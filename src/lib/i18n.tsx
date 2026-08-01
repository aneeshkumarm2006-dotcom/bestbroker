"use client";

import * as React from "react";

export type Lang = "ar" | "en";

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  /** Translate an Arabic source string to the active language. */
  t: (arabic: string) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "mizan-lang";

/**
 * The site is Arabic-only: the English toggle was removed, so the provider
 * pins `lang` to "ar" and `t` passes source strings through. The context API
 * is kept so the ~20 components calling useLanguage() stay untouched.
 */
export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const lang: Lang = "ar";

  // Clear any "en" preference saved before the toggle was removed, so
  // returning visitors aren't left with a stale value.
  React.useEffect(() => {
    window.localStorage.removeItem(STORAGE_KEY);
  }, []);

  const value = React.useMemo<LanguageContextValue>(
    () => ({ lang, toggle: () => {}, t: (arabic: string) => arabic }),
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
