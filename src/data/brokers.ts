import type { Broker } from "@/components/sections/broker-list";
import type { RouteData } from "./types";

// ── Evest — the top-recommended broker site-wide ────────────────────────────
// Evest is ranked #1 and highlighted on every route. Facts come from the
// reviewed Evest profile (CySEC Cyprus + FSA Seychelles, $50 min deposit,
// spreads from 0.7 pips, swap-free Islamic account, MT5 + Evest App).
const EVEST_HREF = "https://www.evest.com/en";
const EVEST_LOGO = "/assets/img/brokers/evest.png";
const EVEST_FEATURES = [
  "مرخّص من CySEC قبرص و FSA سيشل",
  "حد أدنى منخفض للإيداع $50",
  "فروقات سعرية تبدأ من 0.7 نقطة",
  "حساب إسلامي بدون فوائد (سواب-فري)",
];

const RANK_LABELS = [
  "المركز الأول",
  "المركز الثاني",
  "المركز الثالث",
  "المركز الرابع",
];

/** Build the Evest #1 card with the country-specific trust caption. */
function evest(flagCode: string, flagText: string): Broker {
  return {
    rankLabel: RANK_LABELS[0],
    rankNumber: "1",
    name: "Evest",
    logo: EVEST_LOGO,
    features: EVEST_FEATURES,
    rating: 5,
    href: EVEST_HREF,
    highlighted: true,
    flag: { src: `/assets/img/flags/${flagCode}.svg`, text: flagText },
  };
}

/** Attach a rank to one of the secondary comparison brokers. */
function ranked(n: number, base: Omit<Broker, "rankLabel" | "rankNumber">): Broker {
  return { rankLabel: RANK_LABELS[n - 1], rankNumber: String(n), ...base };
}

// ── Secondary comparison brokers (shown below Evest) ────────────────────────
type BaseBroker = Omit<Broker, "rankLabel" | "rankNumber" | "highlighted" | "flag">;

const WELTRADE: BaseBroker = {
  name: "Weltrade",
  logo: "/bestbroker-ai-images/2025/02/26/d6b9f1e705217379b833b89b0725c2a711444ed9.png",
  features: [
    "ترخيص FSC",
    "شفافية ومصداقية %100",
    "حسابات ذكاء اصطناعي AI اسلامية",
    "تضمين التداول الآلي",
  ],
  rating: 5,
  href: "https://mx.wygmax.com/u/b/2958039/J9Bbo5Q8hBQ5/?affclickid=bestbrokergcc-null___null___null___bestbrokergcc_wrpro___null___null&MPC_4=8876",
};

const CAPITAL: BaseBroker = {
  name: "Capital.com",
  logo: "/bestbroker-ai-images/2025/06/06/c277ec62e8be04a7818027a4c347f8009f834fb8.png",
  features: [
    "ترخيص FCA/CYSEC/ASIC/CMA/SCB",
    "0% عمولات (تُطبّق رسوم أخرى)",
    "تحديد مرن لحجم المركز",
    "رافعة مالية مخصصة",
  ],
  rating: 5,
  href: "https://go.capital.com/visit/?bta=44561&nci=7766&afp=bestbrokergcc-null[-]null[-]null[-]bestbrokergcc_capital[-]null[-]null",
};

const NAGA: BaseBroker = {
  name: "NAGA",
  logo: "/bestbroker-ai-images/2024/12/09/b1156ec3d1b7bec1b8ce830c69e13f3e06cb5fc8.jpg",
  features: [
    "ترخيص CYSEC/FSCA/FSA/ADGM",
    "نسخ التداول أصبح سهلاً بناءً على فئة الأصول",
    "مدرجة علنًا في بورصة فرانكفورت",
  ],
  rating: 5,
  href: "https://go.joinnaga.com/21KSRHH/5JQ8NT/?uid=196&sub1=bestbrokergcc-null[-]null[-]null[-]bestbrokergcc_naga[-]null[-]null",
};

const PEPPERSTONE: BaseBroker = {
  name: "Pepperstone",
  logo: "/bestbroker-ai-images/2024/12/23/16daff041a00149ac5bc37295c3d0a2a3b9e1615.jpg",
  features: [
    "ترخيص ASIC/SCB/FCA/DFSA/CMA/BaFin/CySEC",
    "تم التصويت له كأفضل وسيط على MetaTrader 4",
    "احصل على خصومات على الفروقات السعرية للتداول عالي التردد",
  ],
  rating: 5,
  href: "https://track.pepperstonepartners.com/visit/?bta=40745&nci=5399&utm_campaign=null&landingPage=https%253A%252F%252Fsecure.pepperstone.com%252Fregister%252Fform%253Fcountry%253DBH%2526licence%253Dscb%2526locale%253Dar&afp=bestbrokergcc-null[-]null[-]null[-]bestbrokergcc_pepperstone[-]null[-]null",
};

const AFAQ: BaseBroker = {
  name: "Afaq",
  logo: "/bestbroker-ai-images/2025/07/21/7a5b394fcc351f02fbbc9f33210cb39f862b46a9.png",
  features: [
    "حسابات إسلامية بدون فوائد ربوية",
    "عروض ترحيبية مستمرة",
    "دعم مباشر محلي وحسابات تجريبية",
    "تركيز على التعليم باللغة العربية",
  ],
  rating: 5,
  href: "https://campaign.afaqpartners.trade/Tracking/click/?affid=60003&lpId=20004&adTheme=3&campaign=1001&affclickid=bestbrokergcc-null[-]null[-]null[-]bestbrokergcc_afaq[-]null[-]null&utm_campaign=null&utm_adgroup=null",
};

// Trust captions per country (English copies live in src/lib/i18n.tsx).
const CAPTION = {
  ae: "منصة التداول الأفضل في الامارات",
  sa: "منصة التداول الأفضل في السعودية",
  qa: "منصة التداول الأفضل في قطر",
  kw: "منصة التداول الأفضل في الكويت",
  om: "منصة التداول الأفضل في عُمان",
  bh: "منصة التداول الأفضل في البحرين",
  jo: "منصة التداول الأفضل في الأردن",
} as const;

// Auto-generated from the live /gcc broker pages; Evest promoted to #1 site-wide.
export const routes: RouteData[] = [
  {
    slug: "uae",
    segment: "best-broker-gcc-uae-ar",
    title: "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("ae", CAPTION.ae), ranked(2, WELTRADE)],
  },
  {
    slug: "uae-salik",
    segment: "best-broker-gcc-uae-ar-salik",
    title: "فرصة شراء سهم سالك في الإمارات",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("ae", CAPTION.ae), ranked(2, WELTRADE)],
  },
  {
    slug: "uae-localstocks",
    segment: "best-broker-gcc-uae-ar-localstocks",
    title: "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("ae", CAPTION.ae), ranked(2, WELTRADE)],
  },
  {
    slug: "uae-oil",
    segment: "best-broker-gcc-uae-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("ae", CAPTION.ae), ranked(2, WELTRADE)],
  },
  {
    slug: "uae-tests",
    segment: "best-broker-gcc-uae-ar-tests",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("kw", CAPTION.kw), ranked(2, CAPITAL), ranked(3, WELTRADE)],
  },
  {
    slug: "sa",
    segment: "best-broker-gcc-sa-ar",
    title: "أفضل وسطاء التداول الموثوقين في السعودية لعام 2026",
    flagCode: "sa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("sa", CAPTION.sa), ranked(2, WELTRADE)],
  },
  {
    slug: "sa-islamic",
    segment: "best-broker-gcc-sa-ar-islamic",
    title: "تداول في أسواق المال في السعودية باستخدام حسابات إسلامية",
    flagCode: "sa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("sa", CAPTION.sa), ranked(2, WELTRADE)],
  },
  {
    slug: "sa-oil",
    segment: "best-broker-gcc-sa-ar-oil",
    title: "تداول في أسواق النفط في السعودية",
    flagCode: "sa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("sa", CAPTION.sa), ranked(2, WELTRADE)],
  },
  {
    slug: "qa",
    segment: "best-broker-gcc-qa-ar",
    title: "أفضل وسطاء التداول الموثوقين في قطر لعام 2026",
    flagCode: "qa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("qa", CAPTION.qa), ranked(2, WELTRADE), ranked(3, NAGA)],
  },
  {
    slug: "qa-oil",
    segment: "best-broker-gcc-qa-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في قطر لعام 2026",
    flagCode: "qa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("qa", CAPTION.qa), ranked(2, WELTRADE), ranked(3, NAGA)],
  },
  {
    slug: "kw",
    segment: "best-broker-gcc-kw-ar",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("kw", CAPTION.kw), ranked(2, WELTRADE), ranked(3, NAGA)],
  },
  {
    slug: "kw-localstocks",
    segment: "best-broker-gcc-kw-ar-localstocks",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("kw", CAPTION.kw), ranked(2, WELTRADE), ranked(3, NAGA)],
  },
  {
    slug: "kw-oil",
    segment: "best-broker-gcc-kw-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("kw", CAPTION.kw), ranked(2, WELTRADE), ranked(3, NAGA)],
  },
  {
    slug: "om",
    segment: "best-broker-gcc-om-ar",
    title: "أفضل وسطاء التداول الموثوقين في عُمان لعام 2026",
    flagCode: "om",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [
      evest("om", CAPTION.om),
      ranked(2, AFAQ),
      ranked(3, NAGA),
      ranked(4, CAPITAL),
    ],
  },
  {
    slug: "om-oil",
    segment: "best-broker-gcc-om-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في عُمان لعام 2026",
    flagCode: "om",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [
      evest("om", CAPTION.om),
      ranked(2, AFAQ),
      ranked(3, NAGA),
      ranked(4, CAPITAL),
    ],
  },
  {
    slug: "bh",
    segment: "best-broker-gcc-bh-ar",
    title: "أفضل وسطاء التداول الموثوقين في البحرين لعام 2026",
    flagCode: "bh",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("bh", CAPTION.bh), ranked(2, NAGA), ranked(3, PEPPERSTONE)],
  },
  {
    slug: "bh-oil",
    segment: "best-broker-gcc-bh-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في البحرين لعام 2026",
    flagCode: "bh",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("bh", CAPTION.bh), ranked(2, NAGA), ranked(3, PEPPERSTONE)],
  },
  {
    slug: "jo",
    segment: "best-broker-gcc-jo-ar",
    title: "أفضل وسطاء التداول الموثوقين في الأردن لعام 2026",
    flagCode: "jo",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: [evest("jo", CAPTION.jo)],
  },
];

export const routeBySegment: Record<string, RouteData> = Object.fromEntries(
  routes.map((r) => [r.segment, r])
);
