"use client";

import { useLanguage } from "@/lib/i18n";

/**
 * Left-hand trust column of /mizan-uae-ar (RTL: sits left of the broker list).
 * Amwal's structure — illustration, "local expertise" card, "why us" card with
 * four icon benefits — in Mizan's theme: the home page's scales illustration,
 * white cards with the brand radius/shadow, gold accents, navy ink.
 *
 * The page assembly owns the column (`hidden md:flex flex-col pb-4 basis-1/4`);
 * this component only emits the column's content.
 */

type Benefit = {
  icon: string;
  width: number;
  height: number;
  title: string;
  body: string;
};

const BENEFITS: Benefit[] = [
  {
    icon: "/assets/img/amwal-lp/diamond-gold.svg",
    width: 16,
    height: 17,
    title: "أفضل الخيارات فقط",
    body: "نقارن ونختار لك أفضل العروض",
  },
  {
    icon: "/assets/img/amwal-lp/moneybag-gold.svg",
    width: 12,
    height: 17,
    title: "وفر وقتك ومالك",
    body: "اعثر على الحل الأنسب لك في ثوانٍ معدودة",
  },
  {
    icon: "/assets/img/amwal-lp/chart-gold.svg",
    width: 16,
    height: 15,
    title: "بيانات محدثة دائمًا",
    body: "نتحقق من العروض والشروط باستمرار لنقدم لك معلومات موثوقة.",
  },
  {
    icon: "/assets/img/amwal-lp/handshake-gold.svg",
    width: 22,
    height: 14,
    title: "سهل وآمن",
    body: "فلاتر سهلة الاستخدام وتقييمات مفصلة لمساعدتك على اتخاذ القرار بثقة.",
  },
];

export default function TrustSidebar() {
  const { t } = useLanguage();
  return (
    <div className="flex flex-col">
      <div className="me-4 w-3/4">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src="/assets/img/gcc/illu-1_a.svg"
          alt=""
          className="h-auto w-full"
        />
      </div>

      <section
        aria-labelledby="trust-sidebar-expertise"
        className="mt-2 flex flex-col items-center gap-5 rounded-card border border-divider bg-white p-6 text-start shadow-card"
      >
        <div>
          <h2
            id="trust-sidebar-expertise"
            className="text-[22px] font-bold leading-[33px] text-ink"
          >
            {t("خبرتنا")} <span className="text-gradient">{t("المحلية في")}</span>{" "}
            {t("الأسواق المالية")}
          </h2>
          <p className="pt-4 text-base leading-6 text-muted">
            {t(
              "يقدم لك خبراؤنا المحليون أفضل الخيارات المالية لمساعدتك في اتخاذ قرارات ذكية"
            )}
          </p>
        </div>
      </section>

      <section
        aria-labelledby="trust-sidebar-why"
        className="mt-2 flex flex-col rounded-card border border-divider bg-white p-6 shadow-card"
      >
        <h2 id="trust-sidebar-why" className="text-2xl font-bold leading-8 text-ink">
          {t("لماذا")} <span className="text-gradient">{t("تستخدم ميزان؟")}</span>
        </h2>
        <ul className="flex flex-col">
          {BENEFITS.map((benefit, index) => (
            <li
              key={benefit.title}
              className={
                "flex items-start gap-2 px-1 pb-4 " +
                (index === 0 ? "pt-8" : "pt-4")
              }
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={benefit.icon}
                alt=""
                width={benefit.width}
                height={benefit.height}
                aria-hidden="true"
                className="box-content ps-2 pt-1"
              />
              <div className="flex flex-col">
                <p className="font-bold text-ink">{t(benefit.title)}</p>
                <p className="text-muted">{t(benefit.body)}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
