import type { Metadata } from "next";

import { LpHeader } from "@/components/sections/lp-header";
import { LpHero } from "@/components/sections/lp-hero";
import { BrokerList } from "@/components/sections/broker-list";
import { LpBottomCta } from "@/components/sections/lp-bottom-cta";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { LpFooter } from "@/components/sections/lp-footer";

export const metadata: Metadata = {
  title: "أفضل وسطاء التداول في الإمارات 2026 | ميزان",
  description:
    "قائمة محدّثة بأفضل وسطاء التداول المرخّصين في الإمارات — قارن واختر وابدأ التداول خلال دقائق.",
  // Paid-traffic page: kept out of the index so it never competes with the
  // home page for the same queries.
  robots: { index: false, follow: false },
};

/**
 * /mizan-uae-ar — short PPC landing page in the style of the reference
 * (amwal-online-gcc-uae-ar): freshness date, one headline, the ranked broker
 * cards immediately, a trust row, a repeated #1-broker CTA and the risk
 * disclosure. No nav, no about section, no detours.
 */
export default function Page() {
  return (
    <>
      <LpHeader />
      <main>
        <LpHero />
        <BrokerList />
        <LpBottomCta />
        <DisclaimerBand />
      </main>
      <LpFooter />
    </>
  );
}
