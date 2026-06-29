"use client";

import { PageContainer } from "@/components/ui/container";
import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

export interface BrokerFlag {
  /** Flag asset under /assets/img/flags/<code>.svg (origin dropped). */
  src: string;
  /** Caption shown beside the flag (Arabic, verbatim from source). */
  text: string;
}

export interface Broker {
  /** Rank label, e.g. "المركز الأول". */
  rankLabel: string;
  /** Rank digit shown in the gold circle, e.g. "1". */
  rankNumber: string;
  /** Broker brand name (used as the logo alt text). */
  name: string;
  /** Logo path under /bestbroker-ai-images/... (origin dropped). */
  logo: string;
  /** Feature bullet list (Arabic, verbatim from source). */
  features: string[];
  /** Star rating 0–5. */
  rating: number;
  /** Affiliate CTA href. */
  href: string;
  /** #1 card: 3px gold border + gold rank label. */
  highlighted?: boolean;
  /** Optional flag caption row (only the top-ranked broker has one). */
  flag?: BrokerFlag;
}

/** Default UAE broker data, extracted verbatim from reference/source/html/uae.html. */
export const brokers: Broker[] = [
  {
    rankLabel: "المركز الأول",
    rankNumber: "1",
    name: "WR PRO",
    logo: "/bestbroker-ai-images/2025/02/26/d6b9f1e705217379b833b89b0725c2a711444ed9.png",
    features: [
      "ترخيص FSC",
      "شفافية ومصداقية %100",
      "حسابات ذكاء اصطناعي AI اسلامية",
      "تضمين التداول الآلي",
    ],
    rating: 5,
    href: "https://mx.wygmax.com/u/b/2958039/J9Bbo5Q8hBQ5/?affclickid=bestbrokergcc-null___null___null___bestbrokergcc_wrpro___null___null&MPC_4=8876",
    highlighted: true,
    flag: {
      src: "/assets/img/flags/ae.svg",
      text: "منصة التداول الأفضل في الامارات",
    },
  },
  {
    rankLabel: "المركز الثاني",
    rankNumber: "2",
    name: "eVest",
    logo: "/bestbroker-ai-images/2024/10/05/9fb4dc53f0c366275e393f1b49601d3c50380b93.png",
    features: ["ترخيص FSCA", "تداول النسخ", "حسابات إسلامية"],
    rating: 5,
    href: "https://lp.evestpartners.com/tracking//click/?affid=40155&lpId=21791&adTheme=271&campaign=136047&affclickid=bestbroker-null[-]null[-]null[-]bestbrokergcc_evest[-]null[-]null&utm_campaign=null&utm_adgroup=null",
  },
];

export interface BrokerListProps {
  /** Subtitle paragraph above the cards (Arabic, verbatim). */
  intro?: string;
  /** Ranked broker cards; defaults to the UAE data. */
  brokers?: Broker[];
}

/** Gold five-character star band (★★★★★) with gradient-clipped fill. */
function Stars({ rating }: { rating: number }) {
  const percent = `${(rating / 5) * 100}%`;
  return (
    <span
      aria-label={`${rating} / 5`}
      className="inline-block leading-none text-[18px] md:text-[24px]"
      style={{
        fontFamily: "Times",
        backgroundImage: `linear-gradient(90deg, #B59028 ${percent}, #D4CAAE ${percent})`,
        WebkitBackgroundClip: "text",
        backgroundClip: "text",
        WebkitTextFillColor: "transparent",
      }}
    >
      ★★★★★
    </span>
  );
}

/**
 * Ranked broker-list — template shared by every broker-detail route.
 * Source: `section.card__section` (gcc/landing-style.css). RTL three-column
 * card on >=768px (right: logo + stars, center: feature bullets, left: rank +
 * optional flag caption); stacks below 768px. The UAE page ships no
 * `.half__bg` element, so no gold band is rendered (matches the reference).
 */
export function BrokerList({
  intro = "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
  brokers: items = brokers,
}: BrokerListProps) {
  const { t } = useLanguage();
  return (
    <section className="relative w-full py-12 lg:py-16">
      <PageContainer>
        <div className="relative z-[1] mx-auto w-full lg:w-4/5">
          {/* Section header — matches the home page eyebrow + heading. */}
          <div className="py-6 text-center">
            <p className="text-sm font-bold text-brand">{t("التصنيف")}</p>
            <p className="mt-2 text-2xl font-extrabold text-ink lg:text-3xl">{t(intro)}</p>
            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-brand-gradient" />
          </div>

          {items.map((b, i) => (
            <article
              key={i}
              className={cn(
                "relative rounded-card border border-divider bg-white px-[25px] py-5 shadow-card transition-all hover:-translate-y-1 hover:shadow-glow",
                i < items.length - 1 && "mb-6",
                b.highlighted && "border-brand/40 ring-2 ring-brand/40 ring-offset-2 ring-offset-surface"
              )}
            >
              {b.highlighted && (
                <span className="absolute -top-3 right-6 z-10 rounded-full bg-brand-gradient px-4 py-1 text-[12px] font-extrabold text-white shadow-control">
                  {t("⭐ الأفضل")}
                </span>
              )}
              {/* card__flex */}
              <div className="flex flex-col pb-0 md:flex-row md:items-center md:justify-between md:pb-5">
                {/* card__rating (right column on desktop) */}
                <div className="flex w-full items-center justify-between gap-2.5 pb-2.5 md:flex-1 md:flex-col md:justify-center md:gap-5 md:p-5 md:pb-5">
                  {/* cardlogo__text */}
                  <div className="flex max-w-[55%] flex-col items-start gap-[5px] md:max-w-none md:gap-[15px]">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="h-auto max-w-full"
                    />
                    <Stars rating={b.rating} />
                  </div>
                  {/* card__number — mobile only */}
                  <div className="flex flex-col items-center justify-center gap-2.5 pl-5 text-[12px] font-bold text-brand md:hidden">
                    <span className="flex h-7 w-7 items-center justify-center rounded-full bg-brand-gradient text-white shadow-control">
                      {b.rankNumber}
                    </span>
                    <p>{t(b.rankLabel)}</p>
                  </div>
                </div>

                {/* card__features (center column) */}
                <div className="flex w-full items-center justify-start border-t border-solid border-divider md:flex-[2] md:border-x md:border-t-0 md:pr-[30px]">
                  <ul className="list-disc py-2.5 pr-3 text-[14px] font-bold text-muted md:py-0 md:pr-0 md:text-[18px]">
                    {b.features.map((f, fi) => (
                      <li key={fi} className="md:my-2">
                        {t(f)}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* rank + flag (left column on desktop) */}
                <div className="flex w-full flex-col items-center justify-center pb-2.5 md:flex-1 md:p-5">
                  {/* card__number — desktop only (inherits 16px) */}
                  <div className="hidden flex-col items-center justify-center gap-2.5 font-bold text-brand md:flex">
                    <span className="flex h-9 w-9 items-center justify-center rounded-full bg-brand-gradient text-white shadow-control">
                      {b.rankNumber}
                    </span>
                    <p>{t(b.rankLabel)}</p>
                  </div>

                  {b.flag && (
                    <div className="flex w-full items-center justify-center gap-2.5 border-y border-solid border-divider py-[5px] text-[12px] md:mt-5 md:w-auto md:border-y-0 md:py-0 md:text-[16px]">
                      <p className="text-center">{t(b.flag.text)}</p>
                      <span
                        role="img"
                        aria-label="flag"
                        className="block aspect-[16/9] w-full max-w-[20px] shrink-0 rounded-sm border border-solid border-divider bg-cover bg-center md:max-w-[40px]"
                        style={{ backgroundImage: `url('${b.flag.src}')` }}
                      />
                    </div>
                  )}
                </div>
              </div>

              {/* card__cta */}
              <div>
                <a
                  href={b.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2.5 rounded-cta bg-brand-gradient px-5 py-[15px] font-bold text-white shadow-control transition-all hover:-translate-y-0.5 hover:shadow-glow md:py-5"
                >
                  {t("زيارة الموقع")}
                  <svg
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8.77472 1.76004L2.93539 7.64317L8.77472 13.5263"
                      stroke="white"
                      strokeWidth="3"
                      strokeLinecap="round"
                    />
                  </svg>
                </a>
                <p className="pt-2.5 text-center text-[10px] md:pt-[15px]">
                  {t("التداول يحمل مخاطر")}
                </p>
              </div>
            </article>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
