/**
 * Language + market constants, deliberately kept OUT of i18n.tsx: that module
 * is `"use client"`, and a Server Component (the root layouts, <RootShell>)
 * cannot read a plain value exported across that boundary — it only ever
 * sees a client reference. These are shared by both sides.
 */
export type Lang = "ar" | "en";

/**
 * Where each edition lives. The two routes are two MARKETS, not two
 * translations of one page: `/` is the Arabic UAE edition, `/en` is the
 * English South Africa edition. There is no on-page switch between them —
 * each is entered from its own ads/search traffic, and hreflang below is what
 * tells Google which to serve where.
 */
export const LANG_PATHS: Record<Lang, string> = {
  ar: "/",
  en: "/en",
};

export const LANG_DIR: Record<Lang, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

/**
 * The market each edition targets: the hreflang tag the layouts declare and
 * the flag the country band flies. The country's NAME is copy, so it comes
 * through the dictionary like every other string.
 */
export const LANG_MARKET: Record<
  Lang,
  { hreflang: string; flag: string }
> = {
  ar: { hreflang: "ar-AE", flag: "/assets/img/flags/ae.svg" },
  en: { hreflang: "en-ZA", flag: "/assets/img/flags/za.svg" },
};

/**
 * Each edition reports to its OWN Google Tag Manager container, because the
 * two markets run separate ad accounts and separate conversion tracking.
 * Mixing them would attribute South African conversions to the UAE container.
 */
export const LANG_GTM_ID: Record<Lang, string> = {
  ar: "GTM-K2GRK6KD",
  en: "GTM-WPRMF5GP",
};
