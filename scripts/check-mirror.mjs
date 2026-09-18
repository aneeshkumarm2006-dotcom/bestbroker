/**
 * Guards the /en mirror: `/en` must be `/` with the copy translated and the
 * layout flipped — not a page that has drifted.
 *
 *   node scripts/check-mirror.mjs                 # static checks only
 *   node scripts/check-mirror.mjs http://127.0.0.1:3111 [...widths]
 *
 * Three checks. The first needs nothing; the other two need the site running
 * (`npm run build && npx next start -p 3111`).
 *
 * 1. DIRECTION CLASSES (static). Nothing the page renders may use a physical
 *    horizontal utility — `ml-`/`mr-`, `pl-`/`pr-`, `left-`/`right-`,
 *    `text-left`/`text-right`, `border-l`/`border-r`, `rounded-l…`, `float-`.
 *    Those pin a box to the same physical side in both directions, which is
 *    exactly how an RTL page stops mirroring. Logical utilities (`ms-`/`me-`,
 *    `ps-`/`pe-`, `start-`/`end-`, `text-start`/`text-end`) flip by
 *    themselves, and an `rtl:`/`ltr:`-prefixed class is deliberate.
 *
 * 2. STRUCTURE (runtime). The tag+class tree of the two pages must be
 *    identical. Only text differs between languages, so a difference here
 *    means a component renders differently in English: a stray
 *    `lang === "en" ?` branch, a section that fails to render, a
 *    conditionally applied class.
 *
 * 3. MIRROR (runtime). Each element must sit the same distance from its
 *    parent's START edge in both languages, where "start" follows that
 *    parent's own computed direction — which keeps the check honest inside a
 *    subtree that sets its own `dir` (the `10/10` score reads left-to-right
 *    in both languages, by design). A box is only compared when the
 *    comparison is meaningful: it and all of its siblings must have the same
 *    widths in both languages, and its parent must hold no text of its own.
 *    Arabic and English copy are different lengths, so anything sized by or
 *    sitting after text legitimately lands elsewhere — that is translation,
 *    not drift, and check 1 is what covers those boxes instead.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "src");
const ENTRY = join(SRC, "components", "landing-page.tsx");

const BASE = process.argv[2];
const WIDTHS = process.argv.slice(3).map(Number).filter(Boolean);
const AT = WIDTHS.length ? WIDTHS : [1440, 768, 375];

/** Sub-pixel rounding and font metrics, not a layout difference. */
const TOLERANCE = 1.5;

let failed = false;

// ── 1. direction classes ──────────────────────────────────────────────────
const EXTS = [".tsx", ".ts", ".jsx", ".js"];

function resolveImport(spec, fromFile) {
  let base;
  if (spec.startsWith("@/")) base = join(SRC, spec.slice(2));
  else if (spec.startsWith(".")) base = resolve(dirname(fromFile), spec);
  else return null; // node_modules — not ours

  for (const ext of EXTS) if (existsSync(base + ext)) return base + ext;
  for (const ext of EXTS) {
    const indexed = join(base, "index" + ext);
    if (existsSync(indexed)) return indexed;
  }
  return null;
}

const stripComments = (s) =>
  s.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/\/\/[^\n]*/g, " ");

const PHYSICAL =
  /(?:^|\s)(-?(?:m[lr]|p[lr]|scroll-m[lr]|scroll-p[lr]|left|right|inset-[lr])-|border-[lr](?:-|$|\s)|rounded-(?:[lr]|[tb][lr])(?:-|$|\s)|(?:text|float|origin|clear)-(?:left|right)(?:$|\s))/;

const reachable = new Set();
const queue = [ENTRY];
const physicalHits = [];

while (queue.length) {
  const file = queue.pop();
  if (reachable.has(file)) continue;
  reachable.add(file);

  const code = stripComments(readFileSync(file, "utf8"));
  for (const m of code.matchAll(/from\s+"([^"]+)"|import\s*\(\s*"([^"]+)"/g)) {
    const next = resolveImport(m[1] ?? m[2], file);
    if (next) queue.push(next);
  }

  // Every class token in the file, checked one at a time so an `rtl:`/`ltr:`
  // prefixed class can be exempted individually.
  for (const m of code.matchAll(/"((?:[^"\\\n]|\\.)*)"/g)) {
    for (const token of m[1].split(/\s+/)) {
      if (!token) continue;
      if (/(?:^|:)(?:rtl|ltr):/.test(token)) continue; // deliberate
      if (PHYSICAL.test(" " + token.replace(/^[a-z-]+:/, ""))) {
        physicalHits.push({ rel: relative(ROOT, file), token });
      }
    }
  }
}

if (physicalHits.length) {
  failed = true;
  console.error(`x physical direction classes in the rendered tree:`);
  for (const { rel, token } of physicalHits) {
    console.error(`    ${rel}  ->  ${token}`);
  }
} else {
  console.log(
    `OK direction classes — ${reachable.size} files reachable from ` +
      `landing-page.tsx, all horizontal spacing is logical`
  );
}

// ── 2 + 3. runtime checks ─────────────────────────────────────────────────
if (!BASE) {
  console.log(
    "-- structure/mirror checks skipped (pass a base URL of a running site)"
  );
  process.exit(failed ? 1 : 0);
}

const require = createRequire(import.meta.url);
const { chromium } = require("playwright");

/**
 * Serialize every element: a structural signature, its box, and enough about
 * its parent and siblings to know whether its position is comparable across
 * languages. The TradingView ticker is an opaque third-party iframe whose
 * contents differ by locale, so it is measured but not descended into.
 */
const COLLECT = () => {
  const out = [];

  const walk = (el, path) => {
    const rect = el.getBoundingClientRect();
    const parent = el.parentElement;
    const parentRect = parent?.getBoundingClientRect();
    const parentDir = parent ? window.getComputedStyle(parent).direction : "ltr";

    let startInset = null;
    if (parentRect) {
      startInset =
        parentDir === "rtl"
          ? parentRect.right - rect.right
          : rect.left - parentRect.left;
    }

    // Widths of every sibling (this element included) and whether the parent
    // holds text of its own — both decide if the position is comparable.
    let siblingWidths = 0;
    let parentHasText = false;
    if (parent) {
      for (const sib of parent.children) {
        siblingWidths += sib.getBoundingClientRect().width;
      }
      for (const node of parent.childNodes) {
        if (node.nodeType === 3 && node.textContent.trim()) parentHasText = true;
      }
    }

    out.push({
      path,
      tag: el.tagName,
      cls: el.getAttribute("class") ?? "",
      w: rect.width,
      h: rect.height,
      startInset,
      parentW: parentRect?.width ?? null,
      siblingWidths,
      // Direction does not apply inside an <svg>, and an unrendered box has
      // no position to mirror.
      comparable: !el.ownerSVGElement && rect.width > 0 && rect.height > 0 && !parentHasText,
    });

    if (el.closest(".tradingview-widget-container")) return;
    let i = 0;
    for (const child of el.children) walk(child, `${path}/${child.tagName}[${i++}]`);
  };

  walk(document.body, "BODY");
  return out;
};

async function capture(browser, path, width) {
  const page = await browser.newPage({ viewport: { width, height: 900 } });
  // The TradingView ticker streams, so "networkidle" can never settle.
  await page.goto(BASE + path, { waitUntil: "load" });
  await page.waitForTimeout(1200);
  const nodes = await page.evaluate(COLLECT);
  await page.close();
  return nodes;
}

const near = (a, b) => Math.abs(a - b) <= TOLERANCE;

const browser = await chromium.launch();

for (const width of AT) {
  const ar = await capture(browser, "/", width);
  const en = await capture(browser, "/en", width);
  const problems = [];
  let compared = 0;
  let skipped = 0;

  if (ar.length !== en.length) {
    problems.push(`element count differs: / has ${ar.length}, /en has ${en.length}`);
  }

  for (let i = 0; i < Math.min(ar.length, en.length); i++) {
    const a = ar[i];
    const e = en[i];

    if (a.path !== e.path || a.cls !== e.cls) {
      problems.push(
        `structure differs at ${a.path}\n      /   ${a.tag} "${a.cls}"\n      /en ${e.tag} "${e.cls}"`
      );
      break; // everything after a structural break is misaligned noise
    }

    if (a.startInset === null) continue;
    if (
      !a.comparable ||
      !e.comparable ||
      !near(a.w, e.w) ||
      !near(a.parentW, e.parentW) ||
      !near(a.siblingWidths, e.siblingWidths)
    ) {
      skipped++;
      continue;
    }

    compared++;
    if (!near(a.startInset, e.startInset)) {
      problems.push(
        `not mirrored at ${a.path} (${a.tag}.${a.cls.split(" ")[0] || "-"})\n` +
          `      inset from parent start: / ${a.startInset.toFixed(1)}px, /en ${e.startInset.toFixed(1)}px`
      );
    }
  }

  if (problems.length) {
    failed = true;
    console.error(`x ${width}px — ${problems.length} problem(s):`);
    for (const p of problems.slice(0, 15)) console.error(`    ${p}`);
    if (problems.length > 15) console.error(`    ... ${problems.length - 15} more`);
  } else {
    console.log(
      `OK ${width}px — ${ar.length} elements, same tree; ` +
        `${compared} boxes mirrored, ${skipped} skipped (text-width differences)`
    );
  }
}

await browser.close();
process.exit(failed ? 1 : 0);
