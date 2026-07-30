import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeStats } from "@/components/sections/home-stats";
import { HomeCompare } from "@/components/sections/home-compare";
import { BrokerList } from "@/components/sections/broker-list";
import { HomeAbout } from "@/components/sections/home-about";

/**
 * The whole site is this one page: Mizan, UAE only. Pitch, proof, the ranked
 * UAE broker list and the risk disclosure live in a single scroll, and the nav
 * points at in-page anchors instead of routes.
 */
export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeStats />
        <HomeCompare />
        <BrokerList />
        <HomeAbout />
        <DisclaimerBand />
      </main>
      <Footer />
    </>
  );
}
