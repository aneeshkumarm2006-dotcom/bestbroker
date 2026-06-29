/**
 * nations--country-grid — "جميع البلدان" section from /gcc/nations.
 *
 * Re-laid-out to match the home page's design system: a home-style section
 * header (gold eyebrow + gradient heading + lead paragraph) above a responsive
 * grid of country cards (rounded-card + shadow-card + hover lift), instead of
 * the original four uneven plain-text columns.
 */

"use client";

import { useLanguage } from "@/lib/i18n";
import { PageContainer } from "@/components/ui/container";

type Country = {
  /** Display name, copied verbatim from source. */
  name: string;
  /** flag-icons country code (ae, sa, qa, kw, om, bh, jo). */
  cc: string;
  /** Destination route. */
  href: string;
};

// All 18 routes, preserved verbatim (incl. the literal flag codes — e.g.
// "GCC Tests" uses fi-kw in the source).
const COUNTRIES: Country[] = [
  { name: "Bahrain GCC AR", cc: "bh", href: "/gcc/best-broker-gcc-bh-ar" },
  { name: "Bahrain GCC AR", cc: "bh", href: "/gcc/best-broker-gcc-bh-ar-oil" },
  { name: "GCC Tests", cc: "kw", href: "/gcc/best-broker-gcc-uae-ar-tests" },
  { name: "Jordan GCC AR", cc: "jo", href: "/gcc/best-broker-gcc-jo-ar" },
  { name: "Kuwait GCC AR", cc: "kw", href: "/gcc/best-broker-gcc-kw-ar" },
  { name: "Kuwait Local Stocks GCC AR", cc: "kw", href: "/gcc/best-broker-gcc-kw-ar-localstocks" },
  { name: "Kuwait Oil GCC AR", cc: "kw", href: "/gcc/best-broker-gcc-kw-ar-oil" },
  { name: "Oman GCC AR", cc: "om", href: "/gcc/best-broker-gcc-om-ar" },
  { name: "Oman Oil GCC AR", cc: "om", href: "/gcc/best-broker-gcc-om-ar-oil" },
  { name: "Qatar GCC AR", cc: "qa", href: "/gcc/best-broker-gcc-qa-ar" },
  { name: "Qatar Oil GCC AR", cc: "qa", href: "/gcc/best-broker-gcc-qa-ar-oil" },
  { name: "Saudi Arabia GCC AR", cc: "sa", href: "/gcc/best-broker-gcc-sa-ar" },
  { name: "Saudi Arabia Islamic GCC AR", cc: "sa", href: "/gcc/best-broker-gcc-sa-ar-islamic" },
  { name: "Saudi Arabia Oil GCC AR", cc: "sa", href: "/gcc/best-broker-gcc-sa-ar-oil" },
  { name: "United Arab Emirates GCC AR", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar" },
  { name: "United Arab Emirates GCC AR Salik", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar-salik" },
  { name: "United Arab Emirates Local Stocks GCC AR", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar-localstocks" },
  { name: "United Arab Emirates Oil GCC AR", cc: "ae", href: "/gcc/best-broker-gcc-uae-ar-oil" },
];

export function NationsGrid({
  countries = COUNTRIES,
}: {
  countries?: Country[];
}) {
  const { t } = useLanguage();
  return (
    <section className="py-16 lg:py-24">
      <PageContainer>
        {/* Section header — mirrors the home page eyebrow + gradient heading. */}
        <p className="text-sm font-bold text-brand">{t("البلدان")}</p>
        <h1 className="mt-2 text-3xl font-extrabold text-ink lg:text-5xl lg:leading-tight">
          {t("جميع ")}
          <span className="text-gradient">{t("البلدان")}</span>
        </h1>
        <p className="mt-3 max-w-xl leading-relaxed text-muted">
          {t(
            "اختر بلدك للاطلاع على قائمة أفضل الوسطاء المعتمدين والمقارنة بينهم بمراجعات مستقلة ومحايدة."
          )}
        </p>
        <div className="mt-5 h-1.5 w-20 rounded-full bg-brand-gradient" />

        {/* Country cards. */}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {countries.map((country, i) => (
            <a
              key={`${country.href}-${i}`}
              href={country.href}
              className="group flex items-center gap-4 rounded-card border border-divider bg-white p-4 shadow-card transition-all hover:-translate-y-1 hover:border-brand/40 hover:shadow-glow"
            >
              <span
                className={`fib fi-${country.cc} aspect-[4/3] w-12 shrink-0 rounded-md ring-1 ring-divider transition-transform group-hover:scale-105`}
              />
              <span className="flex-1 font-semibold text-ink transition-colors group-hover:text-brand">
                {country.name}
              </span>
              <svg
                width="9"
                height="14"
                viewBox="0 0 9 14"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="shrink-0 text-muted transition-all group-hover:-translate-x-1 group-hover:text-brand"
              >
                <path
                  d="M7.5 1L1.5 7l6 6"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
          ))}
        </div>
      </PageContainer>
    </section>
  );
}
