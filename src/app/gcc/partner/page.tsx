import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { PartnerHero } from "@/components/sections/partner-hero";

export default function PartnerPage() {
  return (
    <>
      <Header />
      <main>
        <PartnerHero />
        <DisclaimerBand />
      </main>
      <Footer />
    </>
  );
}
