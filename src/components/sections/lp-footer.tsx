"use client";

import { useLanguage } from "@/lib/i18n";

/**
 * lp-footer — minimal campaign footer: logo, copyright and the affiliate
 * disclosure only. The site footer's nav anchors are dropped on purpose —
 * the LP has no about section and no reason to offer exits.
 */
export function LpFooter() {
  const { t, lang } = useLanguage();
  return (
    <footer className="w-full border-t border-divider bg-surface pb-10 pt-8 text-muted">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        <div className="flex flex-col items-center gap-5 text-center">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={lang === "en" ? "/assets/img/gcc/logo-en.svg" : "/assets/img/gcc/logo.svg"}
            alt={lang === "en" ? "Mizan" : "ميزان"}
            width={120}
            height={28}
          />
          <p className="max-w-3xl text-xs leading-relaxed opacity-80">
            {t(
              "هذا الموقع مورد مجاني مصمم لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر الإنترنت. قد يضم محتوى مدعوماً أو إعلانات، وقد نحصل على عمولة من الوسطاء المذكورين عند تفاعلك معهم."
            )}
          </p>
          <div className="text-xs">
            <p>{t("© 2026 ميزان — جميع الحقوق محفوظة.")}</p>
            <p className="mt-1">Aeternum Tech srl. VAT IT17738071004</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
