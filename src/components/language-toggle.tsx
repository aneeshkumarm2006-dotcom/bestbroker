"use client";

import { useLanguage } from "@/lib/i18n";
import { LANG_LABELS, LANG_PATHS } from "@/lib/lang";

/**
 * Language switch. `/` (Arabic) and `/en` (English) are two separate routes
 * under two root layouts, so this is a plain anchor that hands the browser a
 * full document load — not a client-side toggle. The label always names the
 * language you'll switch *to*, written in that language.
 */
export function LanguageToggle({ className = "" }: { className?: string }) {
  const { lang } = useLanguage();
  const other = lang === "ar" ? "en" : "ar";

  return (
    <a
      href={LANG_PATHS[other]}
      hrefLang={other}
      dir="ltr"
      aria-label={
        other === "en" ? "Switch to English" : "التبديل إلى العربية"
      }
      className={`inline-flex items-center gap-2 whitespace-nowrap rounded-cta border border-divider px-3 py-1.5 text-sm font-bold text-muted no-underline transition-colors hover:border-brand hover:text-brand ${className}`}
    >
      <svg
        width="15"
        height="15"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        aria-hidden="true"
        className="shrink-0"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M2 12h20" />
        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
      </svg>
      {LANG_LABELS[other]}
    </a>
  );
}
