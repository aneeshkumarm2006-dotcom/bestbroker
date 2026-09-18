"use client";

import * as React from "react";

import { EN_DICTIONARY } from "@/lib/dictionary";
import { LANG_DIR, type Lang } from "@/lib/lang";

// Re-exported as a type only (erased at compile time) so the many components
// that already `import { type Lang } from "@/lib/i18n"` keep working.
export type { Lang };

interface LanguageContextValue {
  lang: Lang;
  dir: "rtl" | "ltr";
  /** Translate an Arabic source string to the active language. */
  t: (arabic: string) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

/**
 * Language is a property of the ROUTE, not of client state: `/` renders the
 * Arabic original and `/en` renders the English mirror, each under its own
 * root layout so `<html lang>` / `<html dir>` are correct in the server HTML.
 * The provider therefore just carries the route's language down to the
 * ~20 components that call `useLanguage()`; there is nothing to toggle here
 * (the header's switch is a plain link to the other route).
 */
export function LanguageProvider({
  lang,
  children,
}: {
  lang: Lang;
  children: React.ReactNode;
}) {
  const value = React.useMemo<LanguageContextValue>(
    () => ({
      lang,
      dir: LANG_DIR[lang],
      t: (arabic: string) => {
        if (lang === "ar") return arabic;
        const english = EN_DICTIONARY[arabic];
        if (english === undefined) {
          if (process.env.NODE_ENV !== "production") {
            console.warn(`[i18n] no English for: ${arabic}`);
          }
          return arabic;
        }
        return english;
      },
    }),
    [lang]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
