"use client";

import { useLanguage } from "@/lib/i18n";

export function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="w-full border-t border-divider bg-surface pb-12 pt-10 text-muted">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        {/* Top row — logo + nav links */}
        <div className="mb-8 flex flex-col items-center justify-between gap-6 border-b border-divider pb-8 sm:flex-row">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/gcc/logo.svg"
            alt="ميزان"
            width={130}
            height={30}
          />
          <div className="flex flex-wrap items-center justify-center gap-6 text-sm">
            <a
              href="/gcc#disclaimer"
              className="transition-colors hover:text-brand"
            >
              {t("تحذير المخاطر")}
            </a>
            <a
              href="/gcc/cookie-policy"
              className="transition-colors hover:text-brand"
            >
              {t("سياسة ملفات تعريف الارتباط")}
            </a>
            <a
              href="/gcc/privacy-policy"
              className="transition-colors hover:text-brand"
            >
              {t("سياسة الخصوصية")}
            </a>
          </div>
        </div>

        {/* Bottom row — copyright + disclaimer */}
        <div className="flex flex-col gap-6 text-xs leading-relaxed lg:flex-row lg:items-start lg:justify-between">
          <div className="shrink-0 text-center lg:text-right">
            <p>{t("© 2026 ميزان — جميع الحقوق محفوظة.")}</p>
            <p className="mt-1">Aeternum Tech srl. VAT IT17738071004</p>
          </div>
          <div className="max-w-3xl text-right leading-relaxed opacity-80">
            <p>
              {t(
                "هذا الموقع مورد مجاني مصمم لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر الإنترنت. قد يضم محتوى مدعوماً أو إعلانات، وقد نحصل على عمولة من الوسطاء المذكورين عند تفاعلك معهم."
              )}
            </p>
            <a
              href="/gcc/privacy-policy"
              className="mt-2 inline-block underline underline-offset-2 hover:text-brand"
            >
              {t("اعرف أكثر عن سياسة الإفصاح")}
            </a>
          </div>
        </div>

        {/* Site map row */}
        <div className="mt-8 border-t border-divider pt-6 text-center text-xs">
          <a href="/gcc/nations" className="transition-colors hover:text-brand">
            {t("الخرائط والنشر")}
          </a>
        </div>
      </div>
    </footer>
  );
}
