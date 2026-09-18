# Mizan — site

A single landing page, served as two **market editions**:

| Route | Market       | Language | `<html>`              | Source                     |
| ----- | ------------ | -------- | --------------------- | -------------------------- |
| `/`   | UAE          | Arabic   | `lang="ar" dir="rtl"` | `src/app/(ar)/page.tsx`    |
| `/en` | South Africa | English  | `lang="en" dir="ltr"` | `src/app/(en)/en/page.tsx` |

The two are **not** linked from the page: there is no language switch. A
reader lands on the edition their traffic was bought for and stays on it;
`hreflang` (`ar-AE` / `en-ZA`, declared in both root layouts) is what tells
Google which one to serve where.

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

## How the two editions work

Both routes render the **same** component, `src/components/landing-page.tsx`.
There is no second copy of the page to keep in sync — `/en` is `/` with the
copy translated, the market swapped and the direction flipped.

- **Copy.** Arabic is the source language: components write their strings as
  `t("<arabic>")`, and `src/lib/dictionary.ts` maps each one to English. A
  missing entry falls through to the Arabic (and warns in dev) rather than
  rendering nothing. `npm run check:i18n` walks the import graph from
  `landing-page.tsx` and fails on anything unmapped.
- **Market.** The country is copy, so it travels the same way: the entries
  that name a country, a region or a language are **market equivalents, not
  literal translations** — `"في الامارات"` is `"in South Africa"` on `/en`.
  They are marked `market:` in the dictionary. The one non-copy difference is
  the country band's flag, which comes from `LANG_MARKET` in
  `src/lib/lang.ts`; both editions render the same `<span>` with a different
  background image, so the element tree stays identical (see `check:mirror`).
- **Direction.** The sections use logical CSS properties throughout (`ps-`/
  `pe-`, `ms-`/`me-`, `start-`/`end-`, `text-start`), so the LTR layout is the
  RTL one mirrored — nothing is laid out twice. Avoid `pl-`/`mr-`/`text-right`
  in anything the page renders.
- **`<html lang>` / `<html dir>`.** A layout can only set these on the element
  it owns, so each language has its own **root layout** in its own route group:
  `src/app/(ar)/layout.tsx` and `src/app/(en)/layout.tsx`. Everything the two
  documents share — fonts, GTM, the provider — lives in
  `src/components/root-shell.tsx`. Nothing on either page links to the other.
- **Constants** that both a Server Component and a client component need
  (`LANG_DIR`, `LANG_PATHS`, `LANG_MARKET`) live in `src/lib/lang.ts`, *not*
  in `src/lib/i18n.tsx` — that module is `"use client"`, and a server
  component reading a value across that boundary gets a client reference and
  fails the build.

Adding a route means putting it inside a language group: a file at the top of
`src/app/` has no root layout and will not render.

## Layout

```
src/
  app/
    (ar)/            Arabic/UAE root layout + /, /mizan-uae-ar, /preview/[section]
    (en)/en/         English/South Africa root layout + /en
    globals.css      shared; imported by both root layouts
  components/
    landing-page.tsx the page both routes render
    root-shell.tsx   the <html>/<body> both root layouts render
    amwal-lp/        the landing page's own sections
    sections/        header, footer, risk-warning band
  lib/
    dictionary.ts    Arabic (UAE) → English (South Africa)
    i18n.tsx         LanguageProvider / useLanguage (client)
    lang.ts          language + market constants (server-safe)
```

`/preview/<section>` renders one section on its own for visual QA. It is
Arabic-only and 404s in production.
