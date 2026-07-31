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

  // ── Campaign landing page (/mizan-uae-ar) ───────────────────────────
  "آخر تحديث": "Last updated",
  "اختر": "Choose",
  "أفضل وسيط تداول": "the best trading broker",
  "في الإمارات وابدأ التداول خلال دقائق":
    "in the UAE and start trading in minutes",
  "قارنّا لك أفضل الوسطاء المرخّصين المتاحين للمتداولين في الإمارات — كل ما عليك هو الاختيار والبدء.":
    "We've compared the top licensed brokers available to traders in the UAE — all you have to do is choose and get started.",
  "عرض أفضل الوسطاء": "See the top brokers",
  "حسابات إسلامية متوفرة": "Islamic accounts available",
  "جاهز للبدء؟": "Ready to start?",
  "خيارنا الأول للمتداولين في الإمارات": "Our top pick for traders in the UAE",
  "افتح حسابك الآن": "Open your account now",

  // ── Campaign LP: header/date/title/country ──────────────────────────
  "المعلومات الاستثمارية المقدمة في هذه الصفحة هي لأغراض تعليمية فقط.":
    "The investment information provided on this page is for educational purposes only.",
  "في الامارات وابدأ التداول في دقائق!":
    "in the UAE and start trading in minutes!",
  "افضل الوسطاء في الامارات": "The best brokers in the UAE",

  // ── Campaign LP: broker cards ───────────────────────────────────────
  "الوسيط الأكثر شعبية في الإمارات": "The most popular broker in the UAE",
  "دعم عربي على مدار الساعة": "24/7 Arabic support",
  "درجة ميزان": "Mizan Score",
  "يعتمد تقييمنا على مؤشرات الأداء الرئيسية التالية:":
    "Our rating is based on the following key performance indicators:",
  "المكانة المرموقة": "Prominence",
  "نقيس تفاعل المستخدمين من خلال مراقبة عدد النقرات التي تتلقاها كل علامة تجارية في آخر 7 أيام":
    "We measure user engagement by monitoring the number of clicks each brand receives over the last 7 days",
  "سمعة العلامة التجارية": "Brand reputation",
  "بناءً على التقييمات التي تم جمعها من أشهر المنصات الإلكترونية":
    "Based on ratings collected from the most popular online platforms",
  "المزايا والفوائد": "Features and benefits",
  "يقوم فريق التحرير في ميزان بتقييم ومراجعة المنتجات المالية مع مراعاة أهم العناصر الوظيفية للمنتج.":
    "Mizan's editorial team evaluates and reviews financial products, considering the product's most important functional elements.",

  // ── Campaign LP: trust sidebar ──────────────────────────────────────
  "خبرتنا": "Our",
  "المحلية في": "local expertise in",
  "الأسواق المالية": "financial markets",
  "يقدم لك خبراؤنا المحليون أفضل الخيارات المالية لمساعدتك في اتخاذ قرارات ذكية":
    "Our local experts bring you the best financial options to help you make smart decisions",
  "لماذا": "Why",
  "تستخدم ميزان؟": "use Mizan?",
  "أفضل الخيارات فقط": "Only the best options",
  "نقارن ونختار لك أفضل العروض": "We compare and pick the best offers for you",
  "وفر وقتك ومالك": "Save your time and money",
  "اعثر على الحل الأنسب لك في ثوانٍ معدودة":
    "Find the solution that suits you best in seconds",
  "بيانات محدثة دائمًا": "Always up-to-date data",
  "نتحقق من العروض والشروط باستمرار لنقدم لك معلومات موثوقة.":
    "We continuously verify offers and terms to give you reliable information.",
  "سهل وآمن": "Easy and safe",
  "فلاتر سهلة الاستخدام وتقييمات مفصلة لمساعدتك على اتخاذ القرار بثقة.":
    "Easy-to-use filters and detailed ratings to help you decide with confidence.",

  // ── Campaign LP: article ────────────────────────────────────────────
  "ما هو التداول عبر الإنترنت؟": "What is online trading?",
  "التداول عبر الإنترنت هو عملية شراء وبيع الأصول من خلال المنصات الإلكترونية، بهدف الاستفادة من تغيرات الأسعار في الأسواق العالمية.":
    "Online trading is the process of buying and selling assets through electronic platforms, aiming to benefit from price movements in global markets.",
  "يمكن للمتداولين الاستثمار في مجموعة متنوعة من الأسواق، بما في ذلك:":
    "Traders can invest in a variety of markets, including:",
  "المعادن الثمينة: الذهب والفضة وغيرها من السلع القيمة.":
    "Precious metals: gold, silver and other valuable commodities.",
  "الموارد الطاقية: النفط والغاز الطبيعي وغيرها من السلع.":
    "Energy resources: oil, natural gas and other commodities.",
  "الأسهم: حصص في شركات عالمية رائدة مثل ابل امازون سامسونج.":
    "Stocks: shares in leading global companies such as Apple, Amazon and Samsung.",
  "تتيح هذه التنوعات للمتداولين الوصول إلى عدة أسواق، وتنويع محافظهم الاستثمارية، وتطبيق استراتيجيات مختلفة بناءً على ظروف السوق.":
    "This variety lets traders access multiple markets, diversify their portfolios, and apply different strategies based on market conditions.",
  "فوائد التداول عبر الإنترنت": "Benefits of online trading",
  "الوصول إلى الأسواق العالمية: يمكنك التداول في مناطق مثل الولايات المتحدة وأوروبا وآسيا والخليج من خلال منصة واحدة.":
    "Access to global markets: trade regions such as the US, Europe, Asia and the Gulf from a single platform.",
  "تنوع الأسواق: من المعادن والسلع إلى أسهم الشركات الكبرى، يمكنك اختيار المجالات التي تناسب أهدافك.":
    "Market variety: from metals and commodities to blue-chip stocks, choose the areas that fit your goals.",
  "المرونة والتحكم: التداول في أي وقت، مع القدرة على ضبط حجم المخاطرة لكل صفقة وفقًا لأهدافك.":
    "Flexibility and control: trade at any time, with the ability to size the risk of every position to your goals.",
  "أدوات تحليل متقدمة: استخدام الرسوم البيانية الحية والمؤشرات التقنية وبيانات السوق الفورية لاتخاذ قرارات مستنيرة.":
    "Advanced analysis tools: use live charts, technical indicators and real-time market data to make informed decisions.",
  "فرص التعلم: توفر العديد من المنصات موارد تعليمية وحسابات تجريبية لممارسة الاستراتيجيات دون مخاطر.":
    "Learning opportunities: many platforms offer educational resources and demo accounts to practice strategies risk-free.",
  "اختيار وسيط التداول": "Choosing a trading broker",
  "جميع وسطاء التداول لدينا موثوقون ويمكنك اختيار أي منهم للبدء بسهولة في التداول. كل وسيط يوفر منصة تداول مستقرة وأدوات تحليل متقدمة لدعم قراراتك، مع مستويات أمان عالية وطرق دفع مرنة لتسهيل الإيداع والسحب. قبل البدء، يمكنك تجربة الحساب التجريبي لتتعرف على المنصة وتختبر استراتيجياتك بدون مخاطر، ومع دعم العملاء المتوفر دائمًا، ستتمكن من إدارة استثماراتك بثقة وراحة.":
    "All of our trading brokers are trusted and you can pick any of them to start trading with ease. Every broker offers a stable trading platform and advanced analysis tools to support your decisions, with high security levels and flexible payment methods for easy deposits and withdrawals. Before you start, you can try the demo account to get to know the platform and test your strategies risk-free — and with customer support always available, you'll manage your investments with confidence.",
  "ابدا التداول مع": "Start trading with",

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
