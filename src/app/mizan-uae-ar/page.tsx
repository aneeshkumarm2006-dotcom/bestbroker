import type { Metadata } from "next";

import { Header } from "@/components/sections/header";
import { LpShell } from "@/components/amwal-lp/shell";
import { LpContainer } from "@/components/amwal-lp/container";
import {
  TickerTape,
  LastUpdatedBand,
  PageTitle,
  CountryBand,
  BrokerList,
  TrustSidebar,
  ArticleContent,
  Footer,
} from "@/components/amwal-lp/sections";

export const metadata: Metadata = {
  title: "أفضل وسطاء التداول في الإمارات 2026 | ميزان",
  description:
    "قائمة محدّثة بأفضل وسطاء التداول المرخّصين في الإمارات — قارن واختر وابدأ التداول خلال دقائق.",
  // Paid-traffic page: kept out of the index so it never competes with the
  // home page for the same queries.
  robots: { index: false, follow: false },
};

/**
 * /mizan-uae-ar — Google Ads landing page, a rebranded clone of the amwal
 * reference (see CLONE_PLAN_AMWAL.md). Section order and geometry mirror the
 * reference exactly; the broker cards are the second content block, straight
 * after the title. Spacing notes:
 * - country-band wrapper carries `md:mt-6 mb-4` — on the reference these
 *   margins collapse between page-title / band / broker row (24px above at
 *   md+, 16px below at all widths).
 * - broker-list + trust-sidebar share one `flex gap-6` container row
 *   (basis-3/4 / basis-1/4); the sidebar only renders at md+.
 */
export default function Page() {
  return (
    <LpShell>
      <TickerTape />
      {/* Same navbar as the main site — its anchors resolve to this page's own
          sections (#brokers → the card row, #about → the article, #disclaimer
          → the footer). */}
      <Header />
      <LastUpdatedBand />
      <main>
        <PageTitle />
        <div className="mb-4 md:mt-6">
          <CountryBand />
        </div>
        <LpContainer id="brokers" className="scroll-mt-24">
          <div className="flex gap-6">
            <div className="basis-full md:basis-3/4">
              <BrokerList />
            </div>
            <div className="hidden basis-1/4 flex-col pb-4 md:flex">
              <TrustSidebar />
            </div>
          </div>
        </LpContainer>
        <ArticleContent />
      </main>
      <Footer />
    </LpShell>
  );
}
