"use client";

import { useLanguage } from "@/lib/i18n";
import { brokers } from "@/components/sections/broker-list";

/**
 * lp-bottom-cta — the reference LP repeats its #1 broker with an identical CTA
 * at the bottom of the page, catching visitors who scrolled past the ranking.
 * A compact trust row sits above it in place of the home page's full about
 * section, reusing the existing about-section strings.
 */
export function LpBottomCta() {
  const { t, lang } = useLanguage();
  const top = brokers[0];

  const trustPoints = [
    "وسطاء مرخّصون فقط",
    "مقارنة مستقلة ومحايدة",
    "تركيز كامل على السوق الإماراتي",
  ];

  return (
    <section className="w-full py-6">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl">
        {/* Trust row */}
        <div className="mx-auto flex w-full flex-col items-stretch justify-center gap-3 sm:flex-row lg:w-11/12 xl:w-4/5">
          {trustPoints.map((p) => (
            <div
              key={p}
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-divider bg-white px-4 py-3 text-center text-[13px] font-bold text-ink shadow-sm"
            >
              <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
                <svg width="11" height="11" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M20 6L9 17l-5-5"
                    stroke="currentColor"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
              {t(p)}
            </div>
          ))}
        </div>

        {/* Top-pick repeat card */}
        <div className="relative mx-auto mt-8 w-full overflow-hidden rounded-card border border-brand/40 bg-white p-8 text-center shadow-card ring-2 ring-brand/30 lg:w-11/12 xl:w-4/5">
          <span aria-hidden="true" className="absolute inset-x-0 top-0 h-1 bg-brand-gradient" />
          <p className="text-sm font-bold text-brand">{t("جاهز للبدء؟")}</p>
          <p className="mt-1 text-xl font-extrabold text-ink lg:text-2xl">
            {t("خيارنا الأول للمتداولين في الإمارات")}
          </p>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lang === "en" && top.logoEn ? top.logoEn : top.logo}
            alt={top.name}
            className="mx-auto mt-5 h-auto max-h-12 w-auto max-w-[160px]"
          />
          <a
            href={top.href}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block w-full rounded-cta bg-brand-gradient px-10 py-4 text-sm font-bold text-white shadow-control transition-all hover:-translate-y-0.5 hover:shadow-glow sm:w-auto"
          >
            {t("افتح حسابك الآن")}
          </a>
          <p className="mt-3 text-[10px] text-muted">{t("التداول يحمل مخاطر")}</p>
        </div>
      </div>
    </section>
  );
}
