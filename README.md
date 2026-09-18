# Mizan — site

A single landing page, served in two languages:

| Route  | Language | `<html>`                  | Source                      |
| ------ | -------- | ------------------------- | --------------------------- |
| `/`    | Arabic   | `lang="ar" dir="rtl"`     | `src/app/(ar)/page.tsx`     |
| `/en`  | English  | `lang="en" dir="ltr"`     | `src/app/(en)/en/page.tsx`  |

`/mizan-uae-ar` (the old Google Ads landing URL) 301s to `/` via
`next.config.mjs`.

## Getting started

```bash
npm run dev            # http://localhost:3000
npm run build          # production build
npm run check:i18n     # every Arabic string on the page has an English one
npm run check:mirror   # no physical direction classes in the rendered tree
```

`check:mirror` also diffs the two pages against each other when given a
running site — same element tree, every comparable box in the same place
relative to its parent's start edge:

```bash
npm run build && npx next start -p 3111
node scripts/check-mirror.mjs http://127.0.0.1:3111
```

## How the two languages work

Both routes render the **same** component, `src/components/landing-page.tsx`.
There is no second copy of the page to keep in sync — `/en` is `/` with the
copy translated and the direction flipped.

- **Copy.** Arabic is the source language: components write their strings as
  `t("<arabic>")`, and `src/lib/dictionary.ts` maps each one to English. A
  missing entry falls through to the Arabic (and warns in dev) rather than
  rendering nothing. `npm run check:i18n` walks the import graph from
  `landing-page.tsx` and fails on anything unmapped.
- **Direction.** The sections use logical CSS properties throughout (`ps-`/
  `pe-`, `ms-`/`me-`, `start-`/`end-`, `text-start`), so the LTR layout is the
  RTL one mirrored — nothing is laid out twice. Avoid `pl-`/`mr-`/`text-right`
  in anything the page renders.
- **`<html lang>` / `<html dir>`.** A layout can only set these on the element
  it owns, so each language has its own **root layout** in its own route group:
  `src/app/(ar)/layout.tsx` and `src/app/(en)/layout.tsx`. Everything the two
  documents share — fonts, GTM, the provider — lives in
  `src/components/root-shell.tsx`. Because they are separate root layouts,
  moving between `/` and `/en` is a full page load; the header's language
  switch is a plain link, not a client-side toggle.
- **Constants** that both a Server Component and a client component need
  (`LANG_DIR`, `LANG_PATHS`, `LANG_LABELS`) live in `src/lib/lang.ts`, *not*
  in `src/lib/i18n.tsx` — that module is `"use client"`, and a server
  component reading a value across that boundary gets a client reference and
  fails the build.

Adding a route means putting it inside a language group: a file at the top of
`src/app/` has no root layout and will not render.

## Layout

```
src/
  app/
    (ar)/            Arabic root layout + /, /mizan-uae-ar, /preview/[section]
    (en)/en/         English root layout + /en
    globals.css      shared; imported by both root layouts
  components/
    landing-page.tsx the page both routes render
    root-shell.tsx   the <html>/<body> both root layouts render
    amwal-lp/        the landing page's own sections
    sections/        header, footer, risk-warning band
  lib/
    dictionary.ts    Arabic → English
    i18n.tsx         LanguageProvider / useLanguage (client)
    lang.ts          language constants (server-safe)
```

`/preview/<section>` renders one section on its own for visual QA. It is
Arabic-only and 404s in production.
