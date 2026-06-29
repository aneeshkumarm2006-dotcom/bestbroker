import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { HomeHero } from "@/components/sections/home-hero";
import { HomeAbout } from "@/components/sections/home-about";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="-mt-[55px] sm:mt-0">
        <div className="lg:mt-16">
          <HomeHero />
        </div>
        <div className="mt-20">
          <HomeAbout />
        </div>
        <div className="mb-14 mt-20">
          <DisclaimerBand />
        </div>
      </main>
      <Footer />
    </>
  );
}

