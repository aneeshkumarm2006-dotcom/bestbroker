"use client";

import { useLanguage } from "@/lib/i18n";

/**
 * home--hero — the opening band of the single UAE page.
 * RTL two-column: copy + CTA on the right, scales illustration on the left
 * (desktop); stacked (illustration on top) on mobile. The country picker is
 * gone: the site covers the UAE only, so the CTA scrolls straight to the
 * ranked broker list.
 */
export function HomeHero() {
  const { t } = useLanguage();

  return (
    <section className="py-12 lg:py-20">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col-reverse items-center gap-10 lg:flex-row lg:gap-16">

          {/* Scales illustration — left column in RTL */}
          <div className="relative mx-auto w-8/12 flex-shrink-0 lg:w-[380px]">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src="/assets/img/gcc/illu-1_a.svg"
              className="relative z-[1] w-full"
              alt="ابحث عن الوسيط الأفضل"
            />
          </div>

          {/* Copy + CTA — right column in RTL */}
          <div className="flex-1 text-center lg:text-right">
            {/* Independent badge */}
            <span className="inline-flex items-center gap-2 rounded-md border border-brand px-4 py-1.5 text-sm font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t("مقارنة مستقلة ومحايدة")}
            </span>

            {/* Heading */}
            <h1 className="mt-6 text-4xl font-bold leading-tight text-ink lg:text-5xl lg:leading-tight">
              {t("ابحث عن")} <br />
              <span className="text-gradient font-extrabold">{t("الوسيط الأفضل")}</span>{" "}
              {t("في الإمارات")}
            </h1>

            {/* Description */}
            <p className="mt-5 leading-relaxed text-muted">
              {t(
                "نساعدك على اختيار الوسيط الأنسب لك في الإمارات، ونوضّح الفروق بين أفضل الوسطاء المرخّصين، بمراجعات مستقلة لا تتأثر بأي شركة وساطة."
              )}
            </p>

            {/* Market chip + CTA */}
            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row sm:justify-center lg:justify-start">
              <a
                href="#brokers"
                className="w-full rounded-cta bg-ink px-8 py-4 text-center text-sm font-bold text-white shadow-control transition-all hover:-translate-y-0.5 hover:bg-navy-deep sm:w-auto"
              >
                {t("قارن أفضل الوسطاء")}
              </a>
              <div className="flex items-center gap-2.5 rounded-control border border-divider bg-white px-4 py-3 shadow-sm">
                <span
                  role="img"
                  aria-label="UAE"
                  className="block aspect-[16/9] w-8 shrink-0 rounded-[3px] border border-divider bg-cover bg-center"
                  style={{ backgroundImage: "url('/assets/img/flags/ae.svg')" }}
                />
                <span className="text-sm font-semibold text-ink">
                  {t("الإمارات العربية المتحدة")}
                </span>
                <span className="rounded-md bg-brand/10 px-2 py-0.5 text-[11px] font-bold text-brand">
                  {t("محدّث 2026")}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
