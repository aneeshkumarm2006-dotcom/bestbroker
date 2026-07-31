"use client";

import { useLanguage } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

/**
 * lp-header — slim campaign-page header. Unlike the site header there are no
 * nav links: PPC traffic gets exactly two actions (jump to the ranking, or
 * switch language) so nothing pulls a visitor away before the broker list.
 */
export function LpHeader() {
  const { t, lang } = useLanguage();

  return (
    <header
      id="top"
      className="sticky top-0 z-50 w-full border-b border-divider bg-surface/95 backdrop-blur-sm"
    >
      <div className="mx-auto flex w-full items-center justify-between px-6 py-3 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={lang === "en" ? "/assets/img/gcc/logo-en.svg" : "/assets/img/gcc/logo.svg"}
          alt={lang === "en" ? "Mizan" : "ميزان"}
          width={140}
          height={32}
        />
        <div className="flex items-center gap-3">
          <a
            href="#brokers"
            className="hidden whitespace-nowrap rounded-cta bg-brand-gradient px-5 py-2 text-sm font-bold text-white shadow-control transition-all hover:-translate-y-0.5 hover:shadow-glow sm:block"
          >
            {t("قارن الآن")}
          </a>
          <LanguageToggle />
        </div>
      </div>
    </header>
  );
}
