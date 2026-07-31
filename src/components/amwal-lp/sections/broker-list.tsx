"use client";

/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

import { lpBrokers, type LpBroker } from "@/components/amwal-lp/brokers";
import { GreenCta } from "@/components/amwal-lp/green-cta";
import { useLanguage } from "@/lib/i18n";

/**
 * `broker-list` — the conversion core of /mizan-uae-ar.
 *
 * Card anatomy follows the amwal reference (ribbon → rank badge → logo/score
 * header row → bullets + CTA column), restyled in Mizan's theme: white cards
 * on the cream surface with the brand's card radius/shadow, gold-gradient
 * ribbon/badge/CTA, navy ink text and warm dividers.
 *
 * This component renders ONLY the column content. The page assembly supplies
 * the `flex gap-6` row and the `basis-full md:basis-3/4` column.
 */

/** Rating hover tooltip copy. */
const RATING_TOOLTIP = {
  heading: "درجة ميزان",
  intro: "يعتمد تقييمنا على مؤشرات الأداء الرئيسية التالية:",
  rows: [
    {
      title: "المكانة المرموقة",
      body: "نقيس تفاعل المستخدمين من خلال مراقبة عدد النقرات التي تتلقاها كل علامة تجارية في آخر 7 أيام",
    },
    {
      title: "سمعة العلامة التجارية",
      body: "بناءً على التقييمات التي تم جمعها من أشهر المنصات الإلكترونية",
    },
    {
      title: "المزايا والفوائد",
      body: "يقوم فريق التحرير في ميزان بتقييم ومراجعة المنتجات المالية مع مراعاة أهم العناصر الوظيفية للمنتج.",
    },
  ],
};

/** Gold check badge fronting every feature row — same as the home page. */
function FeatureCheck() {
  return (
    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-brand/10 text-brand">
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
  );
}

/** ⓘ + dark-navy hover tooltip explaining the score. */
function RatingBlock() {
  const { t } = useLanguage();
  return (
    <div className="group/rating relative cursor-default">
      <div className="flex items-center gap-[5px] pb-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="ms-2 text-muted"
          viewBox="0 0 16 16"
          role="img"
          aria-label="كيف نحسب الدرجة"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
      </div>
      <div className="absolute start-0 top-8 z-[9] hidden w-[340px] rounded-control bg-ink px-[18px] py-[22px] text-start shadow-card group-hover/rating:block max-md:start-auto max-md:end-[-200px]">
        <div className="flex flex-col text-sm text-white/80">
          <div className="pb-2.5">
            <p className="font-bold text-brand-light">{t(RATING_TOOLTIP.heading)}</p>
            <p>{t(RATING_TOOLTIP.intro)}</p>
          </div>
          {RATING_TOOLTIP.rows.map((row, i) => (
            <div
              key={row.title}
              className={
                i === RATING_TOOLTIP.rows.length - 1
                  ? "border-none pb-0 pt-2.5"
                  : "border-b border-white/15 py-2.5"
              }
            >
              <p className="font-bold text-white">{t(row.title)}</p>
              <p>{t(row.body)}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrokerCard({ broker }: { broker: LpBroker }) {
  const { t, lang } = useLanguage();
  return (
    // `leading-[1.5]` keeps the unitless line-height ratio the score spans
    // (22/32px) depend on, instead of the shell's absolute 24px.
    <div
      className={`relative mb-4 flex flex-col rounded-card border bg-white leading-[1.5] shadow-card transition-shadow hover:shadow-glow ${
        broker.highlighted
          ? "border-brand/40 ring-2 ring-brand/30"
          : "border-divider"
      }`}
    >
      {broker.highlighted && broker.ribbon ? (
        <div className="flex flex-row items-center justify-center gap-2 rounded-t-card bg-brand-gradient py-2.5 text-center text-white">
          <p>🏆</p>
          <p className="text-xs font-extrabold md:text-sm">{t(broker.ribbon)}</p>
          <p>🏆</p>
        </div>
      ) : null}

      <span className="absolute start-0 top-1/2 z-[3] flex h-7 w-7 -translate-x-1/2 items-center justify-center rounded-full bg-brand-gradient text-sm font-bold text-white shadow-control rtl:translate-x-1/2 md:h-8 md:w-8 md:text-xl">
        {broker.rank}
      </span>

      {/* header: logo (right, RTL) · score cluster (left) */}
      <div className="flex items-center justify-between border-b border-divider pb-2 pe-8 ps-8 md:py-4 md:pe-24 md:ps-12">
        <img
          className="w-[120px] md:w-40"
          src={lang === "en" && broker.logoEn ? broker.logoEn : broker.logo}
          alt={broker.name}
        />
        <div className="text-[22px] font-bold">
          <div className="flex flex-row items-center gap-2">
            <div className="block md:flex md:items-center md:gap-2.5">
              <RatingBlock />
            </div>
            {/* dir="ltr" pins the visual order to score-then-"/10" in both
                languages (the reference relied on RTL bidi to get this). */}
            <span dir="ltr" className="flex flex-row items-baseline">
              <span className="text-[32px] text-brand">{broker.score}</span>
              <span className="text-[22px] text-ink">/10</span>
            </span>
          </div>
        </div>
      </div>

      {/* body: bullets (right, RTL) · CTA column (left) */}
      <div className="flex flex-col justify-between px-8 md:mb-6 md:flex-row md:px-24">
        <div className="flex grow flex-col">
          <h3 className="text-xl font-bold text-ink md:text-2xl">{broker.name}</h3>
          <ul className="flex w-full flex-col pb-4 text-sm">
            {broker.features.map((feature) => (
              <li key={feature} className="flex w-full items-start gap-2 py-1">
                <FeatureCheck />
                <span className="font-semibold text-ink/80">{t(feature)}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-stretch justify-center text-center text-sm md:items-center md:text-start">
          <GreenCta
            href={broker.href}
            className="-mx-4 my-0 whitespace-nowrap px-20 py-4 md:mx-0 md:my-4"
          >
            {t("زيارة الموقع")}
          </GreenCta>
          <p className="hidden w-[200px] text-center text-xs text-muted md:block">
            {t("التداول يحمل مخاطر")}
          </p>
        </div>
      </div>

      <div className="flex flex-row-reverse items-center justify-center px-5 text-[10px] text-muted md:flex-row md:px-0 md:text-sm">
        <span className="py-4 md:hidden">{t("التداول يحمل مخاطر")}</span>
      </div>
    </div>
  );
}

export default function BrokerList() {
  return (
    <Fragment>
      {lpBrokers.map((broker) => (
        <BrokerCard key={broker.name} broker={broker} />
      ))}
    </Fragment>
  );
}
