"use client";

import { useLanguage } from "@/lib/i18n";

const FEATURED_BROKERS = [
  {
    name: "Evest",
    type: "وسيط متعدد الأصول مرخّص",
    rating: 5,
    href: "/gcc/best-broker-gcc-uae-ar",
  },
  {
    name: "eToro",
    type: "تداول اجتماعي ومنصة استثمار",
    rating: 4,
    href: "/gcc/best-broker-gcc-uae-ar",
  },
  {
    name: "Plus500",
    type: "عقود الفروقات (CFDs)",
    rating: 4,
    href: "/gcc/best-broker-gcc-uae-ar",
  },
  {
    name: "Capital.com",
    type: "تداول عبر الإنترنت",
    rating: 4,
    href: "/gcc/best-broker-gcc-uae-ar",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <span
      aria-label={`${rating} / 5`}
      className="inline-block leading-none"
      style={{
        fontFamily: "Times, serif",
        fontSize: "20px",
        backgroundImage: `linear-gradient(90deg, #B59028 ${(rating / 5) * 100}%, #D4CAAE ${(rating / 5) * 100}%)`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      ★★★★★
    </span>
  );
}

export function HomeCompare() {
  const { t } = useLanguage();
  return (
    <section className="py-16 lg:py-20">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        {/* Section label */}
        <p className="text-sm font-bold text-brand">{t("المقارنة")}</p>

        {/* Heading */}
        <h2 className="mt-2 text-3xl font-extrabold text-ink lg:text-4xl">
          {t("نقارن أفضل الوسطاء في العالم")}
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-xl leading-relaxed text-muted">
          {t(
            "يمكنك العثور على تحليلات وتقييمات للعلامات التجارية العالمية، وكذلك الوسطاء الأكثر تخصصًا في كل مجال."
          )}
        </p>

        {/* Table */}
        <div className="mt-8 overflow-hidden rounded-xl border border-divider">
          {/* Header row */}
          <div className="grid grid-cols-[1fr_1.5fr_auto] bg-ink text-white lg:grid-cols-[1.2fr_2fr_1fr_auto]">
            <div className="px-5 py-4 text-right text-sm font-bold">{t("الوسيط")}</div>
            <div className="px-5 py-4 text-right text-sm font-bold">{t("النوع")}</div>
            <div className="hidden px-5 py-4 text-right text-sm font-bold lg:block">
              {t("تقييم المستخدمين")}
            </div>
            <div className="px-5 py-4" />
          </div>

          {/* Broker rows */}
          {FEATURED_BROKERS.map((broker, i) => (
            <div
              key={i}
              className="grid grid-cols-[1fr_1.5fr_auto] items-center border-t border-divider bg-white transition-colors hover:bg-surface lg:grid-cols-[1.2fr_2fr_1fr_auto]"
            >
              <div className="px-5 py-4 text-right text-sm font-bold text-ink">
                {broker.name}
              </div>
              <div className="px-5 py-4 text-right text-sm text-muted">
                {t(broker.type)}
              </div>
              <div className="hidden px-5 py-4 lg:block">
                <StarRating rating={broker.rating} />
              </div>
              <div className="px-4 py-4">
                <a
                  href={broker.href}
                  className="inline-block rounded-md border border-ink px-5 py-1.5 text-sm font-semibold text-ink no-underline transition-colors hover:bg-ink hover:text-white"
                >
                  {t("قارن")}
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Footnote */}
        <p className="mt-3 text-xs text-muted">
          * {t("بيانات توضيحية لغرض عرض التصميم. التقييمات الفعلية تُحدَّث بشكل مستمر عند الإطلاق.")}
        </p>
      </div>
    </section>
  );
}
