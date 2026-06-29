"use client";

import { Button } from "@/components/ui/button";
import { PageContainer } from "@/components/ui/container";
import { useLanguage } from "@/lib/i18n";

/**
 * partner--hero — the /gcc/partner hero + sign-up form.
 *
 * Re-laid-out to share the home page's design system: the same PageContainer
 * gutters, a gold eyebrow above the headline, and home-style section rhythm.
 * Left (RTL: right) column = headline + "كيف نخلق قيمة لشركائنا" 3-up value
 * props; right (RTL: left) column = the "انضم الينا كشريك" sign-up form card.
 */

const VALUE_PROPS = [
  {
    src: "/assets/img/gcc/illu-sm-1.svg",
    before: "نشبك الوسطاء والمستخدمين من خلال تقنية ",
    bold: "الذكاء الاصطناعي",
    after: "",
  },
  {
    src: "/assets/img/gcc/illu-sm-2.svg",
    before: "نعزز ثقة المستخدم من خلال توفير مصدر ",
    bold: "موثوق ومستقل",
    after: " للمعلومات",
  },
  {
    src: "/assets/img/gcc/illu-sm-3.svg",
    before: "نوفر ",
    bold: "فرص استثمارية",
    after: " اكبر لشركائنا",
  },
];

const INPUTS = [
  { type: "text", name: "name", placeholder: "الاسم الكامل" },
  { type: "email", name: "email", placeholder: "البريد الإلكتروني" },
  { type: "tel", name: "phone", placeholder: "رقم التليفون", dir: "rtl" as const },
  { type: "text", name: "company", placeholder: "موقع الشركة" },
];

export function PartnerHero() {
  const { t } = useLanguage();
  return (
    <section className="py-12 lg:py-20">
      <PageContainer>
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16">
          {/* Headline + value props */}
          <div className="lg:flex-1">
            {/* Eyebrow — matches the home page section labels. */}
            <span className="inline-flex items-center gap-2 rounded-md border border-brand px-4 py-1.5 text-sm font-semibold text-brand">
              <span className="h-2 w-2 rounded-full bg-brand" />
              {t("كن شريكاً")}
            </span>

            <h1 className="mt-6 text-center text-3xl font-bold leading-tight text-ink lg:text-right lg:text-5xl lg:leading-tight">
              {t("انضم إلى شبكة ")}
              <span className="text-gradient font-extrabold">{t("الوسيط الأفضل")}</span>
              {t("التي تضم أفضل الوسطاء في مجال الوساطة المالية في العالم.")}
            </h1>
            <p className="mt-5 text-center text-base leading-relaxed text-muted lg:text-right lg:text-lg">
              {t("كيف نخلق قيمة لشركائنا:")}
            </p>

            <div className="mt-8 flex flex-col gap-6 sm:flex-row">
              {VALUE_PROPS.map((prop, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-card border border-divider bg-white p-6 text-center shadow-card transition-all hover:-translate-y-1 hover:shadow-glow"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={prop.src}
                    alt="best broker ai"
                    className="mx-auto h-[120px] w-auto lg:h-[140px]"
                  />
                  <p className="mt-5 text-sm font-medium leading-relaxed text-muted">
                    {t(prop.before)}
                    <span className="font-bold text-ink">{t(prop.bold)}</span>
                    {t(prop.after)}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Sign-up form */}
          <div className="w-full lg:w-[400px] lg:flex-shrink-0">
            <div className="rounded-card border border-divider bg-white p-6 shadow-card lg:p-8">
              <h3 className="mb-8 text-center text-2xl font-extrabold text-ink lg:mb-10 lg:text-3xl">
                {t("انضم الينا كشريك")}
              </h3>
              <form>
                {INPUTS.map((input, i) => (
                  <input
                    key={input.name}
                    type={input.type}
                    name={input.name}
                    placeholder={t(input.placeholder)}
                    dir={input.dir}
                    required
                    className={`block w-full rounded-control border border-divider bg-surface p-5 outline-none transition-all placeholder:text-muted focus:border-brand/50 focus:bg-white focus:ring-2 focus:ring-brand/15 ${
                      i > 0 ? "mt-4" : ""
                    }`}
                  />
                ))}
                <div className="mt-8 flex justify-center">
                  <Button
                    type="submit"
                    variant="green"
                    className="h-auto w-full rounded-control px-10 py-5 uppercase tracking-wider shadow-control"
                  >
                    {t("لننمو معاً")}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </PageContainer>
    </section>
  );
}
