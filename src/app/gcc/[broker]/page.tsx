import { notFound } from "next/navigation";

import { BrokerHeader } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { BrokerTitleBand } from "@/components/sections/broker-title-band";
import { BrokerList } from "@/components/sections/broker-list";
import { routes, routeBySegment } from "@/data/brokers";

// Only the 18 known broker segments are valid routes.
export const dynamicParams = false;

export function generateStaticParams() {
  return routes.map((r) => ({ broker: r.segment }));
}

export default function BrokerPage({
  params,
}: {
  params: { broker: string };
}) {
  const data = routeBySegment[params.broker];
  if (!data) notFound();

  return (
    <div>
      <BrokerHeader />
      <main>
        <BrokerTitleBand title={data.title} flagCode={data.flagCode} />
        <BrokerList intro={data.intro} brokers={data.brokers} />
        {/*
          Live `letter-k` divider sits ~50px below the cards (card-section
          bottom gap + letter-k padding-top) with ~30px beneath the K. The
          shared DisclaimerBand bakes `mb-14` (56px) below the K, so push it
          down with `pt` and pull the footer up so the below-K gap lands at 30px.
        */}
        <div className="md:pt-[50px]">
          <DisclaimerBand showWarning={false} />
        </div>
      </main>
      <div className="md:-mt-[26px]">
        <Footer />
      </div>
    </div>
  );
}
