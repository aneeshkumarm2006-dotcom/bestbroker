/* eslint-disable @next/next/no-img-element */
import { Fragment } from "react";

import { lpBrokers, type LpBroker } from "@/components/amwal-lp/brokers";
import { GreenCta } from "@/components/amwal-lp/green-cta";

/**
 * `broker-list` — the conversion core of the /mizan-uae-ar clone.
 *
 * Card construction is a 1:1 port of the three rendered cards in
 * `reference-amwal/source/page.rendered.html` (the `popular__section`
 * templates in that file are `display:none` — dead markup, ignored).
 * Only the data is rebranded: Mizan endorses 2 brokers, the reference shows 3.
 *
 * This component renders ONLY the column content. The page assembly supplies
 * the `flex gap-6` row and the `basis-full md:basis-3/4` column (894px @1440).
 *
 * Reference classes are kept verbatim where Tailwind v3 has the utility, and
 * translated to arbitrary values where the reference's v4 dynamic scale has no
 * v3 equivalent (`w-30`→`w-[120px]`, `w-50`→`w-[200px]`, `w-85`→`w-[340px]`,
 * `gap-1.25`→`gap-[5px]`, `py-5.5`→`py-[22px]`, `px-4.5`→`px-[18px]`,
 * `z-3`/`z-9`→`z-[3]`/`z-[9]`). `bg-black`/`border-gold`/`text-gold` are the
 * reference's themed tokens `#212427` / `#D6BB64`, not Tailwind's defaults.
 */

const GOLD_GRADIENT =
  "bg-[linear-gradient(176deg,#F5EBC1_0%,#D2C280_15%,#FFFDF4_26%,#EADA97_47%,#FFF6CE_57%,#FFFDF5_71%,#F8F0CE_96%,#EBDD9F_100%)]";

/** Rating hover tooltip copy — reference wording, Mizan branding. */
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

/** ⓘ + black hover tooltip. Inline SVG copied from the reference (12×12). */
function RatingBlock() {
  return (
    <div className="group/rating rating__block relative cursor-default">
      <div className="flex items-center gap-[5px] pb-1.5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="12"
          height="12"
          fill="currentColor"
          className="ms-2"
          viewBox="0 0 16 16"
          role="img"
          aria-label="كيف نحسب الدرجة"
        >
          <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14m0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16" />
          <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
        </svg>
      </div>
      <div className="rating__hoverbox absolute top-8 left-0 z-[9] hidden w-[340px] rounded-[10px] bg-black py-[22px] px-[18px] text-start group-hover/rating:block max-md:left-auto max-md:right-[-200px]">
        <div className="flex flex-col text-sm text-[#DDDDDD]">
          <div className="pb-2.5">
            <p className="font-bold text-[#D6BB64]">{RATING_TOOLTIP.heading}</p>
            <p>{RATING_TOOLTIP.intro}</p>
          </div>
          {RATING_TOOLTIP.rows.map((row, i) => (
            <div
              key={row.title}
              className={
                i === RATING_TOOLTIP.rows.length - 1
                  ? "border-none pt-2.5 pb-0"
                  : "border-b border-[#DDDDDD] py-2.5"
              }
            >
              <div className="flex gap-[5px] font-bold [&>img]:w-3.5">
                <img src="/assets/img/amwal-lp/star.svg" alt="" />
                {row.title}
              </div>
              <p>{row.body}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function BrokerCard({ broker }: { broker: LpBroker }) {
  return (
    // `leading-[1.5]` restores the reference's *unitless* root line-height
    // (Tailwind preflight `html{line-height:1.5}`) that the LP shell's absolute
    // `leading-6` would otherwise pin at 24px — the 22/32px score spans and the
    // 10px mobile disclaimer all depend on that ratio inheriting.
    <div
      className={`relative mb-4 flex flex-col rounded leading-[1.5] shadow-[0_0_10px_0_rgba(33,36,39,0.2)]${
        broker.highlighted ? " border-2 border-[#D6BB64]" : ""
      }`}
    >
      {broker.highlighted && broker.ribbon ? (
        <div
          className={`flex flex-row items-center justify-center gap-2 py-2.5 text-center ${GOLD_GRADIENT}`}
        >
          <p>🏆</p>
          <p className="text-xs font-bold md:text-sm">{broker.ribbon}</p>
          <p>🏆</p>
        </div>
      ) : null}

      <span className="absolute top-1/2 z-[3] flex h-7 w-7 translate-x-1/2 items-center justify-center rounded-full bg-[#212427] text-sm font-bold text-white md:h-8 md:w-8 md:text-xl">
        {broker.rank}
      </span>

      {/* header: logo (right, RTL) · score cluster (left) */}
      <div className="flex items-center justify-between border-b border-[#CECECE] pb-2 ps-8 pe-8 md:py-4 md:ps-12 md:pe-24">
        <img
          className="w-[120px] md:w-40"
          src={broker.logo}
          alt={`شعار ${broker.name}`}
        />
        <div className="text-[22px] font-bold">
          <div className="flex flex-row items-center gap-2">
            <div className="block md:flex md:items-center md:gap-2.5">
              <RatingBlock />
            </div>
            <span className="flex flex-row items-baseline">
              <span className="text-[22px]">10/</span>
              <span className="text-[32px] text-[#D6BB64]">{broker.score}</span>
            </span>
          </div>
        </div>
      </div>

      {/* body: bullets (right, RTL) · CTA column (left) */}
      <div className="flex flex-col justify-between px-8 md:mb-6 md:flex-row md:px-24">
        <div className="flex grow flex-col">
          <h3 className="text-xl font-bold md:text-2xl">{broker.name}</h3>
          <ul className="flex w-full flex-col pb-4 text-sm">
            {broker.features.map((feature) => (
              <li key={feature} className="flex w-full gap-2 py-1">
                <img src="/assets/img/amwal-lp/check.svg" alt="" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>
        <div className="flex flex-col items-stretch justify-center text-center text-sm md:items-center md:text-start">
          <GreenCta
            href={broker.href}
            className="my-0 -mx-4 py-4 px-20 md:mx-0 md:my-4"
          >
            زيارة الموقع
          </GreenCta>
          <p className="hidden w-[200px] text-center font-bold underline md:block">
            التداول يحمل مخاطر
          </p>
        </div>
      </div>

      <div className="rounded-none">
        <div className="flex flex-row-reverse items-center justify-center px-5 text-[10px] md:flex-row md:px-0 md:text-sm">
          <span className="py-4 underline md:hidden">التداول يحمل مخاطر</span>
        </div>
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
