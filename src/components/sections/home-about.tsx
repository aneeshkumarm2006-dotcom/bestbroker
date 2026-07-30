"use client";

import { useLanguage } from "@/lib/i18n";

const ABOUT_POINTS = [
  {
    num: "01",
    title: "تركيز كامل على السوق الإماراتي",
    body: "نغطي الوسطاء المتاحين للمتداولين في الإمارات فقط، بدل قوائم عامة لا تناسب السوق المحلي.",
  },
  {
    num: "02",
    title: "وسطاء مرخّصون فقط",
    body: "لا ندرج أي وسيط دون التحقق من ترخيصه وشروط حساباته، بما فيها الحسابات الإسلامية بدون فوائد.",
  },
  {
    num: "03",
    title: "استقلالية كاملة في التحليل",
    body: "تحليلاتنا لا تتأثر بأي رسوم أو شراكات تجارية، ونحدّث تقييماتنا دورياً لتعكس أداء كل وسيط فعلياً.",
  },
];

export function HomeAbout() {
  const { t } = useLanguage();
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col gap-12 lg:flex-row lg:gap-20">

          {/* Right column (RTL: displayed first) — intro text */}
          <div className="lg:w-2/5">
            <p className="text-sm font-bold text-brand">{t("من نحن")}</p>
            <h2 className="mt-3 text-3xl font-extrabold leading-snug text-ink lg:text-4xl">
              {t("ناشر مستقل وجدير بالثقة")}
            </h2>
            <p className="mt-5 leading-relaxed text-muted">
              {t(
                "نلتزم بتوفير معلومات محايدة وغير متحيزة لمستخدمينا في الإمارات. يراجع فريقنا الوسطاء والسوق بشكل مستمر، ولا يتأثر تحليله بأي مؤسسات مالية أو شركات وساطة."
              )}
            </p>
          </div>

          {/* Left column (RTL: displayed second) — numbered list */}
          <div className="flex-1 divide-y divide-divider">
            {ABOUT_POINTS.map((point) => (
              <div key={point.num} className="flex gap-6 py-6 first:pt-0 last:pb-0">
                <span className="flex-shrink-0 text-2xl font-extrabold text-brand opacity-70">
                  {point.num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-ink lg:text-lg">
                    {t(point.title)}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">
                    {t(point.body)}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
