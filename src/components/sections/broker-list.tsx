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
  /** #1 card: gold ring + gold "best" ribbon. */
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
      className="inline-block leading-none text-[18px] md:text-[20px]"
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

/** Gold check badge that fronts every feature row. */
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

/**
 * Ranked broker-list — rebuilt to match the /gcc home design language.
 * Section header reuses the home eyebrow + heading + gold underline. Each
 * broker is a horizontal three-zone card (RTL): brand + rank medallion on the
 * right, a gold-check feature grid in the middle, and the action panel (flag
 * trust chip + gold CTA) on the left; the columns stack on mobile. The #1 card
 * gets a gold ring, a gold top accent and a centred "best" ribbon.
 */
export function BrokerList({
  intro = "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
  brokers: items = brokers,
}: BrokerListProps) {
  const { t } = useLanguage();
  return (
    <section className="relative w-full py-14 lg:py-20">
      <PageContainer>
        <div className="relative z-[1] mx-auto w-full lg:w-11/12 xl:w-4/5">
          {/* Section header — matches the home page eyebrow + heading. */}
          <div className="pb-10 text-center">
            <p className="text-sm font-bold text-brand">{t("التصنيف")}</p>
            <p className="mt-2 text-2xl font-extrabold text-ink lg:text-3xl">{t(intro)}</p>
            <div className="mx-auto mt-4 h-1.5 w-20 rounded-full bg-brand-gradient" />
          </div>

          <div className="flex flex-col gap-6">
            {items.map((b, i) => (
              <article
                key={i}
                className={cn(
                  "relative overflow-hidden rounded-card border border-divider bg-white shadow-card transition-all hover:-translate-y-1 hover:shadow-glow",
                  b.highlighted && "border-brand/40 ring-2 ring-brand/30"
                )}
              >
                {b.highlighted && (
                  <>
                    {/* Gold top accent + centred "best" ribbon. */}
                    <span
                      aria-hidden="true"
                      className="absolute inset-x-0 top-0 h-1 bg-brand-gradient"
                    />
                    <span className="absolute left-1/2 top-0 z-10 -translate-x-1/2 rounded-b-xl bg-brand-gradient px-4 py-1 text-[12px] font-extrabold text-white shadow-control">
                      {t("⭐ الأفضل")}
                    </span>
                  </>
                )}

                <div className="flex flex-col lg:flex-row lg:items-stretch">
                  {/* Zone A — brand + rank (right column in RTL) */}
                  <div className="flex flex-col items-center justify-center gap-3 px-6 pb-2 pt-9 lg:w-[210px] lg:shrink-0 lg:py-9">
                    {b.rankNumber && (
                      <div className="flex flex-col items-center gap-1.5">
                        <span className="flex h-11 w-11 items-center justify-center rounded-full bg-brand-gradient text-lg font-extrabold text-white shadow-control">
                          {b.rankNumber}
                        </span>
                        <span className="text-[13px] font-bold text-brand">{t(b.rankLabel)}</span>
                      </div>
                    )}
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={b.logo}
                      alt={b.name}
                      className="h-auto max-h-12 w-auto max-w-[150px]"
                    />
                    {b.rating > 0 && <Stars rating={b.rating} />}
                  </div>

                  {/* Zone B — feature check list (center column) */}
                  <div className="flex flex-1 items-center border-y border-divider px-6 py-5 lg:border-x lg:border-y-0 lg:px-8">
                    <ul className="flex w-full flex-col gap-3">
                      {b.features.map((f, fi) => (
                        <li key={fi} className="flex items-start gap-2.5">
                          <FeatureCheck />
                          <span className="text-[14px] font-semibold leading-snug text-ink/80 [overflow-wrap:anywhere] md:text-[15px]">
                            {t(f)}
                          </span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Zone C — action panel (left column in RTL) */}
                  <div className="flex flex-col justify-center gap-3 px-6 pb-8 pt-5 lg:w-[244px] lg:shrink-0 lg:py-9">
                    {b.flag && (
                      <div className="flex items-center justify-center gap-2 rounded-xl border border-brand/20 bg-brand/5 px-3 py-2">
                        <span
                          role="img"
                          aria-label="flag"
                          className="block aspect-[16/9] w-7 shrink-0 rounded-[3px] border border-divider bg-cover bg-center"
                          style={{ backgroundImage: `url('${b.flag.src}')` }}
                        />
                        <p className="text-[12px] font-semibold leading-tight text-ink">
                          {t(b.flag.text)}
                        </p>
                      </div>
                    )}
                    <a
                      href={b.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 rounded-cta bg-brand-gradient px-5 py-3.5 font-bold text-white shadow-control transition-all hover:-translate-y-0.5 hover:shadow-glow"
                    >
                      {t("زيارة الموقع")}
                      <svg
                        width="9"
                        height="14"
                        viewBox="0 0 11 16"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        aria-hidden="true"
                      >
                        <path
                          d="M8.77472 1.76004L2.93539 7.64317L8.77472 13.5263"
                          stroke="white"
                          strokeWidth="3"
                          strokeLinecap="round"
                        />
                      </svg>
                    </a>
                    <p className="text-center text-[10px] text-muted">
                      {t("التداول يحمل مخاطر")}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
