import { notFound } from "next/navigation";

import { BrokerHeader } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { BrokerTitleBand } from "@/components/sections/broker-title-band";
import { BrokerList } from "@/components/sections/broker-list";
import { HomeStats } from "@/components/sections/home-stats";
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
        <HomeStats />
        <BrokerList intro={data.intro} brokers={data.brokers} />
        <DisclaimerBand showWarning={false} />
      </main>
      <Footer />
    </div>
  );
}
