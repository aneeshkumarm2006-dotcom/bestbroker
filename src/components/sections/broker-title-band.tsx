"use client";

import * as React from "react";

import { PageContainer } from "@/components/ui/container";
import { useLanguage } from "@/lib/i18n";

export interface BrokerTitleBandProps {
  /** H1 copy for the broker-detail route (Arabic, verbatim from source). */
  title?: string;
  /** ISO country code matching a flag under /assets/img/flags/<code>.svg. */
  flagCode?: string;
}

/** Small gold check used by the hero trust pills. */
function CheckPill({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center gap-1.5 rounded-full border border-divider bg-white px-3 py-1.5 text-xs font-bold text-ink shadow-sm">
      <svg
        width="12"
        height="12"
        viewBox="0 0 24 24"
        fill="none"
        aria-hidden="true"
        className="text-brand"
      >
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {children}
    </span>
  );
}

/**
 * Broker-detail hero — rebuilt to match the /gcc home page design language
 * (cream surface, gold accents, deep-navy ink) instead of the former heavy
 * navy title band. RTL two-column: copy (badge + H1 + lead + trust pills) on
 * the right, the shared scales illustration with a floating country flag on
 * the left; stacks (illustration on top) on mobile.
 */
export function BrokerTitleBand({
  title = "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
  flagCode = "ae",
}: BrokerTitleBandProps) {
  const { t } = useLanguage();
  return (
    <section className="relative w-full overflow-hidden bg-surface">
      {/* Warm gold glow + bottom hairline tie the hero to the page surface. */}
      <span
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 right-0 h-72 w-72 rounded-full bg-brand/10 blur-3xl"
      />
      <span
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-divider to-transparent"
      />

      <PageContainer className="relative py-12 lg:py-16">
        <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16">
          {/* Copy — right column in RTL */}
          <div className="text-center lg:text-right">
            <span className="inline-flex items-center gap-2 rounded-md border border-brand px-4 py-1.5 text-sm font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t("مقارنة مستقلة ومحايدة")}
            </span>

            <h1 className="mt-6 text-3xl font-extrabold leading-tight text-ink sm:text-4xl lg:text-5xl lg:leading-[1.15]">
              {t(title)}
            </h1>

            <p className="mt-5 leading-relaxed text-muted lg:max-w-xl">
              {t(
                "قائمة مُحدّثة بأفضل الوسطاء المرخّصين، مع مقارنة مستقلة تساعدك على اختيار الأنسب لك."
              )}
            </p>

            <div className="mt-7 flex flex-wrap justify-center gap-2.5 lg:justify-start">
              <CheckPill>{t("وسطاء مرخّصون")}</CheckPill>
              <CheckPill>{t("مراجعات مستقلة")}</CheckPill>
              <CheckPill>{t("محدّث 2026")}</CheckPill>
            </div>
          </div>

          {/* Visual — left column in RTL */}
          <div className="relative mx-auto w-8/12 max-w-[320px] lg:w-full lg:max-w-[380px]">
            <span
              aria-hidden="true"
              className="pointer-events-none absolute inset-4 -z-10 rounded-full bg-brand/15 blur-3xl"
            />
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/gcc/illu-1_a.svg"
              alt="ميزان — قارن بين أفضل الوسطاء"
              className="relative z-[1] w-full"
            />
            {/* Country flag as a designed, floating chip. */}
            <span
              role="img"
              aria-label={`flag-${flagCode}`}
              className="absolute bottom-1 left-0 block aspect-[16/9] w-16 rounded-lg border-2 border-white bg-cover bg-center shadow-card sm:w-20"
              style={{ backgroundImage: `url('/assets/img/flags/${flagCode}.svg')` }}
            />
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
