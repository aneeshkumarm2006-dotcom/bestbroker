import type { Broker } from "@/components/sections/broker-list";
import type { RouteData } from "./types";

// ── Evest — the top-recommended broker site-wide ────────────────────────────
// Evest is ranked #1 and highlighted on every route. Facts come from the
// reviewed Evest profile (CySEC Cyprus + FSA Seychelles, $50 min deposit,
// spreads from 0.7 pips, swap-free Islamic account, MT5 + Evest App).
const EVEST_HREF =
  "https://lp.evestpartners.com/tracking//click/?affid=40659&campaign=136597&product_id=2&t_type=Signup&t_lang=EN";
const EVEST_LOGO = "/assets/img/brokers/evest.png";
const EVEST_LOGO_EN = "/assets/img/brokers/evest-en.svg";
const EVEST_FEATURES = [
  "مرخّص من CySEC قبرص و FSA سيشل",
  "حد أدنى منخفض للإيداع $50",
  "فروقات سعرية تبدأ من 0.7 نقطة",
  "حساب إسلامي بدون فوائد (سواب-فري)",
];

const RANK_LABELS = ["المركز الأول", "المركز الثاني"];

/** Build the Evest #1 card with the country-specific trust caption. */
function evest(flagCode: string, flagText: string): Broker {
  return {
    rankLabel: RANK_LABELS[0],
    rankNumber: "1",
    name: "Evest",
    logo: EVEST_LOGO,
    logoEn: EVEST_LOGO_EN,
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

// ── Afaq — the single secondary broker, ranked #2 site-wide ─────────────────
type BaseBroker = Omit<Broker, "rankLabel" | "rankNumber" | "highlighted" | "flag">;

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
  href: "https://afaq.trade/",
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

/**
 * Every route shows the same two-broker line-up: Evest at #1 (with the
 * country-specific trust caption) and Afaq at #2.
 */
function lineup(flagCode: string, caption: string): Broker[] {
  return [evest(flagCode, caption), ranked(2, AFAQ)];
}

// Auto-generated from the live /gcc broker pages; Evest promoted to #1 site-wide.
export const routes: RouteData[] = [
  {
    slug: "uae",
    segment: "best-broker-gcc-uae-ar",
    title: "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("ae", CAPTION.ae),
  },
  {
    slug: "uae-salik",
    segment: "best-broker-gcc-uae-ar-salik",
    title: "فرصة شراء سهم سالك في الإمارات",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("ae", CAPTION.ae),
  },
  {
    slug: "uae-localstocks",
    segment: "best-broker-gcc-uae-ar-localstocks",
    title: "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("ae", CAPTION.ae),
  },
  {
    slug: "uae-oil",
    segment: "best-broker-gcc-uae-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في الامارات لعام 2026",
    flagCode: "ae",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("ae", CAPTION.ae),
  },
  {
    slug: "uae-tests",
    segment: "best-broker-gcc-uae-ar-tests",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("kw", CAPTION.kw),
  },
  {
    slug: "sa",
    segment: "best-broker-gcc-sa-ar",
    title: "أفضل وسطاء التداول الموثوقين في السعودية لعام 2026",
    flagCode: "sa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("sa", CAPTION.sa),
  },
  {
    slug: "sa-islamic",
    segment: "best-broker-gcc-sa-ar-islamic",
    title: "تداول في أسواق المال في السعودية باستخدام حسابات إسلامية",
    flagCode: "sa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("sa", CAPTION.sa),
  },
  {
    slug: "sa-oil",
    segment: "best-broker-gcc-sa-ar-oil",
    title: "تداول في أسواق النفط في السعودية",
    flagCode: "sa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("sa", CAPTION.sa),
  },
  {
    slug: "qa",
    segment: "best-broker-gcc-qa-ar",
    title: "أفضل وسطاء التداول الموثوقين في قطر لعام 2026",
    flagCode: "qa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("qa", CAPTION.qa),
  },
  {
    slug: "qa-oil",
    segment: "best-broker-gcc-qa-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في قطر لعام 2026",
    flagCode: "qa",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("qa", CAPTION.qa),
  },
  {
    slug: "kw",
    segment: "best-broker-gcc-kw-ar",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("kw", CAPTION.kw),
  },
  {
    slug: "kw-localstocks",
    segment: "best-broker-gcc-kw-ar-localstocks",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("kw", CAPTION.kw),
  },
  {
    slug: "kw-oil",
    segment: "best-broker-gcc-kw-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في الكويت لعام 2026",
    flagCode: "kw",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("kw", CAPTION.kw),
  },
  {
    slug: "om",
    segment: "best-broker-gcc-om-ar",
    title: "أفضل وسطاء التداول الموثوقين في عُمان لعام 2026",
    flagCode: "om",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("om", CAPTION.om),
  },
  {
    slug: "om-oil",
    segment: "best-broker-gcc-om-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في عُمان لعام 2026",
    flagCode: "om",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("om", CAPTION.om),
  },
  {
    slug: "bh",
    segment: "best-broker-gcc-bh-ar",
    title: "أفضل وسطاء التداول الموثوقين في البحرين لعام 2026",
    flagCode: "bh",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("bh", CAPTION.bh),
  },
  {
    slug: "bh-oil",
    segment: "best-broker-gcc-bh-ar-oil",
    title: "أفضل وسطاء التداول الموثوقين في البحرين لعام 2026",
    flagCode: "bh",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("bh", CAPTION.bh),
  },
  {
    slug: "jo",
    segment: "best-broker-gcc-jo-ar",
    title: "أفضل وسطاء التداول الموثوقين في الأردن لعام 2026",
    flagCode: "jo",
    intro: "ابدأ التداول بثقة مع أفضل الوسطاء في السوق",
    brokers: lineup("jo", CAPTION.jo),
  },
];

export const routeBySegment: Record<string, RouteData> = Object.fromEntries(
  routes.map((r) => [r.segment, r])
);
