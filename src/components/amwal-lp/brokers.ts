/**
 * Rebranded broker data for the /mizan-uae-ar clone. Layout comes from the
 * amwal reference; brand and brokers are Mizan's own (the reference shows 3
 * cards — this site endorses exactly 2 brokers, so the page renders 2 cards
 * of identical construction).
 *
 * Affiliate hrefs are per-market: `href` is the UAE/Arabic link and `hrefEn`
 * the South Africa/English one, because the two editions run on separate
 * affiliate campaigns. Read them through lpBrokerHref(broker, lang) rather
 * than touching either field directly.
 */
import type { Lang } from "@/lib/lang";

export interface LpBroker {
  rank: number;
  name: string;
  logo: string;
  /** Optional English-language logo, used when the active language is "en". */
  logoEn?: string;
  /** Score value shown gold at 32px, e.g. "10" renders as ‎10/10‎. */
  score: string;
  /** Bullet list, gold check.svg fronting each row. */
  features: string[];
  href: string;
  /** Affiliate href for the English (/en) edition; falls back to `href`. */
  hrefEn?: string;
  /** Card #1: 2px gold border + gold-gradient trophy ribbon. */
  highlighted?: boolean;
  ribbon?: string;
}

export const lpBrokers: LpBroker[] = [
  {
    rank: 1,
    name: "Evest",
    logo: "/assets/img/brokers/evest.png",
    logoEn: "/assets/img/brokers/evest-en.svg",
    score: "10",
    features: [
      "مرخّص من CySEC قبرص و FSA سيشل",
      "حد أدنى منخفض للإيداع $50",
      "فروقات سعرية تبدأ من 0.7 نقطة",
      "حساب إسلامي بدون فوائد (سواب-فري)",
      "دعم عربي على مدار الساعة",
    ],
    href: "https://evest-ads.com/lp/us-stocks?affiliate_id=40659&campaign_id=136597&clickid=6a982f439c2b0ce7186c7e46&partner_id=c1a486dd6c8f128d0be36f669aa221fe",
    hrefEn:
      "https://lp.evestpartners.com/tracking//click/?affid=40659&lpId=21620&adTheme=212&campaign=136597",
    highlighted: true,
    ribbon: "الوسيط الأكثر شعبية في الإمارات",
  },
  {
    rank: 2,
    name: "Afaq",
    logo: "/bestbroker-ai-images/2025/07/21/7a5b394fcc351f02fbbc9f33210cb39f862b46a9.png",
    score: "9.8",
    features: [
      "حسابات إسلامية بدون فوائد ربوية",
      "عروض ترحيبية مستمرة",
      "دعم مباشر محلي وحسابات تجريبية",
      "تركيز على التعليم باللغة العربية",
    ],
    href: "https://campaign.afaqpartners.trade/Tracking/click/?affid=60034&campaign=1029&product_id=1&t_type=Register",
    hrefEn:
      "https://campaign.afaqpartners.trade/Tracking/click/?affid=60034&lpId=20002&adTheme=5&campaign=10291",
  },
];

/**
 * The affiliate href for the active edition: the English page sends traffic
 * to its own campaign, every other language keeps the UAE link.
 */
export function lpBrokerHref(broker: LpBroker, lang: Lang) {
  return lang === "en" && broker.hrefEn ? broker.hrefEn : broker.href;
}
