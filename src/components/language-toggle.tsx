"use client";

import { useLanguage } from "@/lib/i18n";

/**
 * Floating language switch pinned to the top of every page. Swaps the whole
 * site between Arabic (the source language) and English; the label always
 * shows the language you'll switch *to*.
 */
export function LanguageToggle() {
  const { lang, toggle } = useLanguage();

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={lang === "ar" ? "Switch to English" : "التبديل إلى العربية"}
      dir="ltr"
      className="fixed right-3 top-3 z-[100] inline-flex items-center gap-2 rounded-full border border-white/20 bg-ink/90 px-4 py-2 text-sm font-bold text-white shadow-control backdrop-blur-md transition-all hover:-translate-y-0.5 hover:text-accent hover:shadow-glow"
    >
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {lang === "ar" ? "English" : "العربية"}
    </button>
  );
}
