"use client";

import * as React from "react";

import { cn } from "@/lib/utils";
import { useLanguage } from "@/lib/i18n";

/**
 * partner--signup-form — the "انضم الينا كشريك" lead form from /gcc/partner.
 *
 * Mirrors the source markup `main > section` (the partner hero + form band).
 * The reference crop is a full-viewport band cut to the form's height: the
 * form sits in the left 5/12 column (RTL) and the partner hero (h1 + intro +
 * three illustrations) fills the right 7/12 column.
 *
 * Form inputs: p-6 (24px), rounded-control (16px), shadow-control. Submit:
 * padding 20px/40px, rounded-control, green-gradient, white bold uppercase.
 *
 * Below lg the columns stack and the crop captures only the form, so the hero
 * column is `hidden lg:block`. At lg the crop top aligns with the first input
 * (the form's `انضم الينا كشريك` heading sits above the crop), so the hero
 * column is pulled up to land its lower lines / illustrations at the right y.
 */

type Field = {
  id: string;
  type: React.HTMLInputTypeAttribute;
  placeholder: string;
};

const FIELDS: Field[] = [
  { id: "name", type: "text", placeholder: "الاسم الكامل" },
  { id: "email", type: "email", placeholder: "البريد الإلكتروني" },
  { id: "phone", type: "tel", placeholder: "رقم التليفون" },
  { id: "company", type: "text", placeholder: "موقع الشركة" },
];

type Illu = {
  src: string;
  before: string;
  bold: string;
  after?: string;
};

const ILLUS: Illu[] = [
  {
    src: "/assets/img/gcc/illu-sm-1.svg",
    before: "نشبك الوسطاء والمستخدمين من خلال تقنية ",
    bold: "الذكاء الاصطناعي",
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

export function PartnerForm() {
  const { t, lang } = useLanguage();
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    // No real backend — mirror the source's `return false` behaviour.
    event.preventDefault();
  }

  return (
    <section className="w-full">
      <div className="container mx-auto px-6 lg:px-24">
        <div className="flex flex-col lg:flex-row">
          {/* Partner hero — right 7/12 (RTL). Hidden below lg (off-crop), and
              pulled up at lg so its content lands at the crop's top. */}
          <div className="hidden lg:block lg:basis-7/12 lg:-mt-[84px]">
            <div className="w-full lg:w-11/12">
              <h1 className="text-3xl lg:text-5xl font-semibold leading-tight text-center text-ink lg:text-left">
                {t("انضم إلى شبكة ")}<span className="text-gradient font-extrabold">{t("الوسيط الأفضل")}</span>
                {t("التي تضم أفضل الوسطاء في مجال الوساطة المالية في العالم.")}
              </h1>
              <p className="mt-6 lg:mt-10 text-base lg:text-2xl text-center text-muted">
                {t("كيف نخلق قيمة لشركائنا:")}
              </p>
              <div className="mt-6 flex flex-col gap-6 lg:flex-row">
                {ILLUS.map((illu) => (
                  <div key={illu.src} className="flex-1">
                    <img
                      src={illu.src}
                      alt="best broker ai"
                      className="mx-auto h-[150px] w-auto"
                    />
                    <p className="mt-6 text-center font-medium">
                      {t(illu.before)}
                      <span className="font-bold">{t(illu.bold)}</span>
                      {illu.after ? t(illu.after) : ""}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form — left 5/12 (RTL). */}
          <div className="relative basis-5/12">
            <div
              aria-hidden="true"
              className="absolute top-0 mx-auto hidden h-0.5 w-8/12 border-l border-[rgb(18,80,179)]/20 lg:left-0 lg:block lg:top-[15%] lg:h-[70%] lg:w-auto"
            />
            <div className="ml-auto w-full lg:w-10/12">
              <form onSubmit={handleSubmit} noValidate>
                {FIELDS.map((field, index) => (
                  <input
                    key={field.id}
                    id={field.id}
                    name={field.id}
                    type={field.type}
                    placeholder={t(field.placeholder)}
                    aria-label={t(field.placeholder)}
                    dir={lang === "ar" ? "rtl" : "ltr"}
                    required
                    className={cn(
                      "block w-full rounded-control border border-divider bg-surface p-5 outline-none transition-all placeholder:text-muted focus:border-brand/50 focus:bg-white focus:ring-2 focus:ring-brand/15",
                      index > 0 && "mt-5"
                    )}
                  />
                ))}
                <div className="mt-12 flex justify-center">
                  <button
                    type="submit"
                    className="rounded-control bg-brand-gradient px-10 py-5 font-bold uppercase tracking-wider text-white shadow-control transition-all hover:-translate-y-0.5 hover:shadow-glow"
                  >
                    {t("لننمو معاً")}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
