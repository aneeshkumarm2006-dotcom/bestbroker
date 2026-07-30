"use client";

import * as React from "react";

export type Lang = "ar" | "en";

/**
 * Arabic → English dictionary. The site authors every visible string in
 * Arabic; `t()` returns the English equivalent when the active language is
 * "en", and the original Arabic otherwise. Keyed by the Arabic source string,
 * so strings repeated across sections share one translation.
 */
const AR_TO_EN: Record<string, string> = {
  // ── Header / nav ────────────────────────────────────────────────────
  "التصنيف": "The ranking",
  "من نحن": "Who we are",
  "تحذير المخاطر": "Risk warning",
  "قارن الآن": "Compare now",

  // ── Hero ────────────────────────────────────────────────────────────
  "مقارنة مستقلة ومحايدة": "Independent and unbiased comparison",
  "ابحث عن": "Find",
  "الوسيط الأفضل": "the best broker",
  "في الإمارات": "in the UAE",
  "نساعدك على اختيار الوسيط الأنسب لك في الإمارات، ونوضّح الفروق بين أفضل الوسطاء المرخّصين، بمراجعات مستقلة لا تتأثر بأي شركة وساطة.":
    "We help you choose the broker best suited to you in the UAE and explain the differences between the top licensed brokers, with independent reviews unaffected by any brokerage firm.",
  "قارن أفضل الوسطاء": "Compare the best brokers",
  "الإمارات العربية المتحدة": "United Arab Emirates",
  "محدّث 2026": "Updated 2026",

  // ── Stats band ──────────────────────────────────────────────────────
  "مستخدم": "Users",
  "وسيط مُقيَّم": "Brokers rated",
  "مراجعة": "Reviews",

  // ── Comparison table ────────────────────────────────────────────────
  "المقارنة": "Comparison",
  "نقارن أفضل الوسطاء في الإمارات": "We compare the best brokers in the UAE",
  "تحليلات وتقييمات مستقلة للوسطاء المرخّصين المتاحين للمتداولين في الإمارات، مع مقارنة سريعة قبل الاطلاع على التصنيف الكامل.":
    "Independent analyses and ratings of the licensed brokers available to traders in the UAE, with a quick comparison before you view the full ranking.",
  "الوسيط": "Broker",
  "النوع": "Type",
  "تقييم المستخدمين": "User rating",
  "قارن": "Compare",
  "وسيط متعدد الأصول مرخّص": "Regulated multi-asset broker",
  "وسيط إسلامي بحسابات بدون فوائد": "Islamic broker with swap-free accounts",
  "بيانات توضيحية لغرض عرض التصميم. التقييمات الفعلية تُحدَّث بشكل مستمر عند الإطلاق.":
    "Illustrative data for design-preview purposes. Actual ratings are updated continuously at launch.",

  // ── Broker list (UI chrome) ─────────────────────────────────────────
  "أفضل وسطاء التداول الموثوقين في الإمارات لعام 2026":
    "The most trusted trading brokers in the UAE for 2026",
  "زيارة الموقع": "Visit site",
  "التداول يحمل مخاطر": "Trading carries risk",
  "⭐ الأفضل": "⭐ Best",

  // ── Broker rank labels ──────────────────────────────────────────────
  "المركز الأول": "1st Place",
  "المركز الثاني": "2nd Place",

  // ── Broker features ─────────────────────────────────────────────────
  "مرخّص من CySEC قبرص و FSA سيشل": "Regulated by CySEC Cyprus & FSA Seychelles",
  "حد أدنى منخفض للإيداع $50": "Low minimum deposit of $50",
  "فروقات سعرية تبدأ من 0.7 نقطة": "Spreads from 0.7 pips",
  "حساب إسلامي بدون فوائد (سواب-فري)": "Swap-free Islamic account",
  "حسابات إسلامية بدون فوائد ربوية":
    "Islamic accounts with no usurious interest",
  "عروض ترحيبية مستمرة": "Ongoing welcome offers",
  "دعم مباشر محلي وحسابات تجريبية": "Local live support and demo accounts",
  "تركيز على التعليم باللغة العربية": "Focus on education in Arabic",

  // ── Broker flag caption ─────────────────────────────────────────────
  "منصة التداول الأفضل في الامارات": "The best trading platform in the UAE",

  // ── About ───────────────────────────────────────────────────────────
  "ناشر مستقل وجدير بالثقة": "An independent and trustworthy publisher",
  "نلتزم بتوفير معلومات محايدة وغير متحيزة لمستخدمينا في الإمارات. يراجع فريقنا الوسطاء والسوق بشكل مستمر، ولا يتأثر تحليله بأي مؤسسات مالية أو شركات وساطة.":
    "We are committed to providing neutral, unbiased information to our users in the UAE. Our team continuously reviews brokers and the market, and its analysis is not influenced by any financial institution or brokerage firm.",
  "تركيز كامل على السوق الإماراتي": "Fully focused on the UAE market",
  "نغطي الوسطاء المتاحين للمتداولين في الإمارات فقط، بدل قوائم عامة لا تناسب السوق المحلي.":
    "We cover only the brokers available to traders in the UAE, instead of generic lists that do not fit the local market.",
  "وسطاء مرخّصون فقط": "Licensed brokers only",
  "لا ندرج أي وسيط دون التحقق من ترخيصه وشروط حساباته، بما فيها الحسابات الإسلامية بدون فوائد.":
    "We do not list any broker without verifying its licence and account terms, including swap-free Islamic accounts.",
  "استقلالية كاملة في التحليل": "Complete independence in analysis",
  "تحليلاتنا لا تتأثر بأي رسوم أو شراكات تجارية، ونحدّث تقييماتنا دورياً لتعكس أداء كل وسيط فعلياً.":
    "Our analyses are not influenced by any fees or commercial partnerships, and we update our ratings regularly to reflect each broker's actual performance.",

  // ── Disclaimer band ─────────────────────────────────────────────────
  "تحذير من المخاطر": "Risk warning",
  "ينطوي الاستثمار على مخاطر عالية، بما في ذلك خطر خسارة بعض أو كل مبلغ استثمارك، وقد لا يكون مناسبًا لجميع المستثمرين.":
    "Investing involves high risk, including the risk of losing some or all of your invested amount, and may not be suitable for all investors.",
  "اقرأ المزيد": "Read more",

  // ── Footer ──────────────────────────────────────────────────────────
  "© 2026 ميزان — جميع الحقوق محفوظة.": "© 2026 Mizan — All rights reserved.",
  "هذا الموقع مورد مجاني مصمم لمساعدة المستخدمين في اتخاذ قرارات مستنيرة عبر الإنترنت. قد يضم محتوى مدعوماً أو إعلانات، وقد نحصل على عمولة من الوسطاء المذكورين عند تفاعلك معهم.":
    "This website is a free resource designed to help users make informed decisions online. It may include sponsored content or advertising, and we may earn a commission from the brokers mentioned when you interact with them.",
};

interface LanguageContextValue {
  lang: Lang;
  toggle: () => void;
  /** Translate an Arabic source string to the active language. */
  t: (arabic: string) => string;
}

const LanguageContext = React.createContext<LanguageContextValue | null>(null);

const STORAGE_KEY = "mizan-lang";

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [lang, setLang] = React.useState<Lang>("ar");

  // Restore the saved preference after hydration (server always renders "ar").
  React.useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY);
    if (saved === "en" || saved === "ar") setLang(saved);
  }, []);

  // Keep the document's lang/dir in sync with the active language.
  React.useEffect(() => {
    const root = document.documentElement;
    root.lang = lang;
    root.dir = lang === "ar" ? "rtl" : "ltr";
  }, [lang]);

  const toggle = React.useCallback(() => {
    setLang((prev) => {
      const next = prev === "ar" ? "en" : "ar";
      window.localStorage.setItem(STORAGE_KEY, next);
      return next;
    });
  }, []);

  const t = React.useCallback(
    (arabic: string) => (lang === "en" ? AR_TO_EN[arabic] ?? arabic : arabic),
    [lang]
  );

  const value = React.useMemo(
    () => ({ lang, toggle, t }),
    [lang, toggle, t]
  );

  return (
    <LanguageContext.Provider value={value}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage(): LanguageContextValue {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return ctx;
}
