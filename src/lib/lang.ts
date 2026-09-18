/**
 * Language constants, deliberately kept OUT of i18n.tsx: that module is
 * `"use client"`, and a Server Component (the root layouts, <RootShell>)
 * cannot read a plain value exported across that boundary — it only ever
 * sees a client reference. These are shared by both sides.
 */
export type Lang = "ar" | "en";

/** Where each language lives. Arabic is the canonical root. */
export const LANG_PATHS: Record<Lang, string> = {
  ar: "/",
  en: "/en",
};

export const LANG_DIR: Record<Lang, "rtl" | "ltr"> = {
  ar: "rtl",
  en: "ltr",
};

/** Label of each language, written in that language. */
export const LANG_LABELS: Record<Lang, string> = {
  ar: "العربية",
  en: "English",
};
