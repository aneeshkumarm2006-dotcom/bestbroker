import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeStats } from "@/components/sections/home-stats";
import { HomeCompare } from "@/components/sections/home-compare";
import { HomeAbout } from "@/components/sections/home-about";

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HomeHero />
        <HomeStats />
        <HomeCompare />
        <HomeAbout />
        <DisclaimerBand />
      </main>
      <Footer />
    </>
  );
}

