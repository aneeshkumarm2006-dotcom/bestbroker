"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

/**
 * home--hero — `main > section:nth-of-type(1)` on /gcc home.
 * RTL two-column: copy + country picker on the right, businessman
 * illustration on the left (desktop); stacked (illustration on top) on
 * mobile. The outer `lg:mt-16` page margin is intentionally NOT included
 * (crop is the section border-box).
 */

export interface HeroCountry {
  /** data-name in the source (label shown after selection). */
  name: string;
  /** data-link target route. */
  link: string;
  /** flag-icons country code (fib fi-<code>). */
  code: string;
}

// Extracted verbatim from reference/source/html/home.html (the .country-list).
const COUNTRIES: HeroCountry[] = [
  { name: "Bahrain GCC AR", link: "/gcc/best-broker-gcc-bh-ar", code: "bh" },
  { name: "Bahrain GCC AR", link: "/gcc/best-broker-gcc-bh-ar-oil", code: "bh" },
  { name: "GCC Tests", link: "/gcc/best-broker-gcc-uae-ar-tests", code: "kw" },
  { name: "Jordan GCC AR", link: "/gcc/best-broker-gcc-jo-ar", code: "jo" },
  { name: "Kuwait GCC AR", link: "/gcc/best-broker-gcc-kw-ar", code: "kw" },
  {
    name: "Kuwait Local Stocks GCC AR",
    link: "/gcc/best-broker-gcc-kw-ar-localstocks",
    code: "kw",
  },
  { name: "Kuwait Oil GCC AR", link: "/gcc/best-broker-gcc-kw-ar-oil", code: "kw" },
  { name: "Oman GCC AR", link: "/gcc/best-broker-gcc-om-ar", code: "om" },
  { name: "Oman Oil GCC AR", link: "/gcc/best-broker-gcc-om-ar-oil", code: "om" },
  { name: "Qatar GCC AR", link: "/gcc/best-broker-gcc-qa-ar", code: "qa" },
  { name: "Qatar Oil GCC AR", link: "/gcc/best-broker-gcc-qa-ar-oil", code: "qa" },
  { name: "Saudi Arabia GCC AR", link: "/gcc/best-broker-gcc-sa-ar", code: "sa" },
  {
    name: "Saudi Arabia Islamic GCC AR",
    link: "/gcc/best-broker-gcc-sa-ar-islamic",
    code: "sa",
  },
  {
    name: "Saudi Arabia Oil GCC AR",
    link: "/gcc/best-broker-gcc-sa-ar-oil",
    code: "sa",
  },
  {
    name: "United Arab Emirates GCC AR",
    link: "/gcc/best-broker-gcc-uae-ar",
    code: "ae",
  },
  {
    name: "United Arab Emirates GCC AR Salik",
    link: "/gcc/best-broker-gcc-uae-ar-salik",
    code: "ae",
  },
  {
    name: "United Arab Emirates Local Stocks GCC AR",
    link: "/gcc/best-broker-gcc-uae-ar-localstocks",
    code: "ae",
  },
  {
    name: "United Arab Emirates Oil GCC AR",
    link: "/gcc/best-broker-gcc-uae-ar-oil",
    code: "ae",
  },
];

export interface HomeHeroProps {
  countries?: HeroCountry[];
}

export function HomeHero({ countries = COUNTRIES }: HomeHeroProps) {
  const [open, setOpen] = React.useState(false);
  const [selected, setSelected] = React.useState<HeroCountry | null>(null);
  const boxRef = React.useRef<HTMLDivElement>(null);
  const { t } = useLanguage();

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (boxRef.current && !boxRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    window.addEventListener("click", onClick);
    return () => window.removeEventListener("click", onClick);
  }, [open]);

  const go = () => {
    if (selected) window.location.href = selected.link;
  };

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

          {/* Copy + picker — right column in RTL */}
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
              {t("لك")}
            </h1>

            {/* Description */}
            <p className="mt-5 leading-relaxed text-muted">
              {t(
                "نساعدك في العثور على الوسيط الأنسب لاحتياجاتك، وفهم الاختلافات بين أفضل الوسطاء في كل بلد، بمراجعات مستقلة لا تتأثر بأي شركة وساطة."
              )}
            </p>

            {/* Country label */}
            <p className="mt-6 font-bold text-ink">
              {t("اختر بلدك لتجد الوسيط الأفضل لك")}
            </p>

            {/* Picker row */}
            <div className="mt-4 flex items-stretch gap-0 overflow-hidden rounded-control border border-divider bg-white shadow-sm">
              {/* CTA button */}
              <button
                type="button"
                onClick={go}
                disabled={!selected}
                className="flex-shrink-0 bg-ink px-6 py-4 text-sm font-bold text-white transition-colors hover:bg-navy-deep disabled:opacity-60 lg:px-8"
              >
                {t("قارن الآن")}
              </button>

              {/* Country combobox */}
              <div className="relative flex-1" ref={boxRef}>
                <button
                  type="button"
                  aria-haspopup="listbox"
                  aria-expanded={open}
                  onClick={() => setOpen((v) => !v)}
                  className="flex w-full items-center justify-between gap-2 px-4 py-4 text-right"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={cn(
                      "flex-shrink-0 origin-center transform transition-transform",
                      open && "rotate-180"
                    )}
                    width="13"
                    height="8"
                    viewBox="0 0 13 8"
                    fill="none"
                    aria-hidden="true"
                  >
                    <path
                      d="M12.4341 1.15674L6.65687 6.93395L1.00002 1.2771"
                      stroke="#6B6357"
                      strokeOpacity="0.8"
                    />
                  </svg>
                  <span className={cn("flex-1 text-right font-semibold", !selected && "text-muted")}>
                    {selected ? selected.name : t("اختر البلد")}
                  </span>
                </button>

                {/* Dropdown list */}
                {open && (
                  <ul
                    role="listbox"
                    className="no-scrollbar absolute left-0 top-full z-20 max-h-72 w-full overflow-y-scroll rounded-b-control border border-t-0 border-divider bg-white shadow-card"
                  >
                    {countries.map((c, i) => (
                      <li
                        key={`${c.link}-${i}`}
                        role="option"
                        aria-selected={selected?.link === c.link}
                        className="flex cursor-pointer items-center gap-3 border-b border-divider px-4 py-3 transition-colors hover:bg-brand/5 hover:text-brand"
                        onClick={() => {
                          setSelected(c);
                          setOpen(false);
                        }}
                      >
                        <div
                          className={cn(
                            "fib aspect-[4/3] w-8 flex-shrink-0 rounded",
                            `fi-${c.code}`
                          )}
                        />
                        <span className="text-sm">{c.name}</span>
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
