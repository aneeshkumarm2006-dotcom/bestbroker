/**
 * Guards the /en mirror: every Arabic string that the landing page can render
 * must have an English translation in src/lib/dictionary.ts.
 *
 *   node scripts/check-dictionary.mjs
 *
 * It walks the import graph from src/components/landing-page.tsx — the single
 * component both `/` and `/en` render — so it sees the indirect calls a
 * `t("…")` regex would miss: broker bullets, sidebar benefits and the article
 * lists are declared as plain arrays and only later passed through `t(item)`.
 * Components outside that graph (the dev-only /preview sections, the retired
 * home-page blocks) are never shown in English and are not checked.
 *
 * Exits non-zero, listing the offenders, when something is untranslated.
 */
import { readFileSync, existsSync } from "node:fs";
import { join, dirname, relative, resolve } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const SRC = join(ROOT, "src");
const ENTRY = join(SRC, "components", "landing-page.tsx");

/** Arabic that is deliberately NOT translated where it appears. */
const ALLOWED = new Set([
  // Logo alt / aria-label: the components already pick "Mizan" for English.
  "ميزان",
  // aria-label on the switch back to Arabic, written in Arabic by design.
  "التبديل إلى العربية",
  "العربية",
]);

/** Dictionary keys, read out of the source (plain node can't import .ts). */
const dictionarySource = readFileSync(join(SRC, "lib", "dictionary.ts"), "utf8");
const KEYS = new Set(
  [...dictionarySource.matchAll(/^\s{2}"((?:[^"\\]|\\.)*)":/gm)].map((m) => m[1])
);

/**
 * Reached only through the section barrel (src/components/amwal-lp/sections/
 * index.ts), never rendered by the page: LandingPage takes its footer and
 * brand bar from src/components/sections/. They exist for /preview, which is
 * Arabic-only and dev-only, so their copy is out of scope.
 */
const PREVIEW_ONLY = [
  join("src", "components", "amwal-lp", "sections", "footer.tsx"),
  join("src", "components", "amwal-lp", "sections", "header-bar.tsx"),
];

const EXTS = [".tsx", ".ts", ".jsx", ".js"];

function resolveImport(spec, fromFile) {
  let base;
  if (spec.startsWith("@/")) base = join(SRC, spec.slice(2));
  else if (spec.startsWith(".")) base = resolve(dirname(fromFile), spec);
  else return null; // node_modules — not ours to translate

  for (const ext of EXTS) if (existsSync(base + ext)) return base + ext;
  for (const ext of EXTS) {
    const indexed = join(base, "index" + ext);
    if (existsSync(indexed)) return indexed;
  }
  return null;
}

/** Comments hold Arabic examples that are documentation, not rendered copy. */
function stripComments(source) {
  return source.replace(/\/\*[\s\S]*?\*\//g, " ").replace(/\/\/[^\n]*/g, " ");
}

const seen = new Set();
const missing = [];
const queue = [ENTRY];

while (queue.length) {
  const file = queue.pop();
  if (seen.has(file)) continue;
  if (PREVIEW_ONLY.some((p) => file.endsWith(p))) continue;
  seen.add(file);

  const raw = readFileSync(file, "utf8");
  const code = stripComments(raw);

  for (const m of code.matchAll(/from\s+"([^"]+)"|import\s*\(\s*"([^"]+)"/g)) {
    const next = resolveImport(m[1] ?? m[2], file);
    if (next) queue.push(next);
  }

  for (const m of code.matchAll(/"((?:[^"\\\n]|\\.)*)"/g)) {
    const literal = m[1];
    if (!/[؀-ۿ]/.test(literal)) continue;
    if (ALLOWED.has(literal) || KEYS.has(literal)) continue;
    missing.push({ rel: relative(ROOT, file), literal });
  }
}

if (missing.length) {
  console.error(`x ${missing.length} Arabic string(s) with no English:\n`);
  for (const { rel, literal } of missing) {
    console.error(`  ${rel}\n    ${literal}\n`);
  }
  process.exit(1);
}

console.log(
  `OK - ${seen.size} files reachable from landing-page.tsx, ` +
    `every Arabic string translated (${KEYS.size} dictionary entries)`
);
