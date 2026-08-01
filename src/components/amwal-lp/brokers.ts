/**
 * Rebranded broker data for the /mizan-uae-ar clone. Layout comes from the
 * amwal reference; brand and brokers are Mizan's own (the reference shows 3
 * cards — this site endorses exactly 2 brokers, so the page renders 2 cards
 * of identical construction).
 *
 * Affiliate hrefs are the same ones used by src/components/sections/broker-list.tsx.
 */
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
    href: "https://lp.evestpartners.com/tracking//click/?affid=40659&campaign=136597&product_id=2&t_type=Signup&t_lang=EN",
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
  },
];
