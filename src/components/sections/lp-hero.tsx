"use client";

import * as React from "react";

import { useLanguage } from "@/lib/i18n";

/**
 * lp-hero — compressed campaign hero. No illustration and no two-column
 * layout: a freshness chip (today's date, à la the reference LP), one
 * headline, one subline, a trust-chip row and a single CTA that drops the
 * visitor straight onto the ranked broker cards below.
 */
export function LpHero() {
  const { t, lang } = useLanguage();

  // Today's date is rendered after hydration so the freshness chip never
  // shows a stale build-time date (and the server/client HTML can't diverge).
  const [today, setToday] = React.useState("");
  React.useEffect(() => {
    setToday(
      new Intl.DateTimeFormat(lang === "ar" ? "ar-AE" : "en-GB", {
        dateStyle: "full",
      }).format(new Date())
    );
  }, [lang]);

  return (
    <section className="py-10 lg:py-14">
      <div className="mx-auto w-full px-6 text-center sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl">
        {/* Freshness chip */}
        <span className="inline-flex min-h-[34px] items-center gap-2 rounded-full border border-brand/25 bg-brand/5 px-4 py-1.5 text-[13px] font-semibold text-brand">
          <span className="h-2 w-2 rounded-full bg-brand" />
          {today && (
            <>
              {t("آخر تحديث")}: {today}
            </>
          )}
        </span>

        {/* Headline */}
        <h1 className="mx-auto mt-5 max-w-3xl text-3xl font-bold leading-tight text-ink sm:text-4xl lg:text-5xl lg:leading-tight">
          {t("اختر")}{" "}
          <span className="text-gradient font-extrabold">{t("أفضل وسيط تداول")}</span>{" "}
          {t("في الإمارات وابدأ التداول خلال دقائق")}
        </h1>

        {/* Subline */}
        <p className="mx-auto mt-4 max-w-2xl leading-relaxed text-muted">
          {t(
            "قارنّا لك أفضل الوسطاء المرخّصين المتاحين للمتداولين في الإمارات — كل ما عليك هو الاختيار والبدء."
          )}
        </p>

        {/* Trust chips */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
          <span className="flex items-center gap-2 rounded-control border border-divider bg-white px-4 py-2 shadow-sm">
            <span
              role="img"
              aria-label="UAE"
              className="block aspect-[16/9] w-7 shrink-0 rounded-[3px] border border-divider bg-cover bg-center"
              style={{ backgroundImage: "url('/assets/img/flags/ae.svg')" }}
            />
            <span className="text-[13px] font-semibold text-ink">
              {t("الإمارات العربية المتحدة")}
            </span>
          </span>
          <span className="flex items-center gap-2 rounded-control border border-divider bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-sm">
            <CheckDot />
            {t("وسطاء مرخّصون فقط")}
          </span>
          <span className="flex items-center gap-2 rounded-control border border-divider bg-white px-4 py-2 text-[13px] font-semibold text-ink shadow-sm">
            <CheckDot />
            {t("حسابات إسلامية متوفرة")}
          </span>
        </div>

        {/* CTA */}
        <a
          href="#brokers"
          className="mt-8 inline-block w-full rounded-cta bg-ink px-10 py-4 text-center text-sm font-bold text-white shadow-control transition-all hover:-translate-y-0.5 hover:bg-navy-deep sm:w-auto"
        >
          {t("عرض أفضل الوسطاء")}
        </a>
      </div>
    </section>
  );
}

/** Small gold check used by the trust chips. */
function CheckDot() {
  return (
    <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" aria-hidden="true">
        <path
          d="M20 6L9 17l-5-5"
          stroke="currentColor"
          strokeWidth="3.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}
