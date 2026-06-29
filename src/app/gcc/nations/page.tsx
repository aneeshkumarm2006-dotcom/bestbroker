import { Header } from "@/components/sections/header";
import { Footer } from "@/components/sections/footer";
import { DisclaimerBand } from "@/components/sections/disclaimer-band";
import { NationsGrid } from "@/components/sections/nations-grid";

export default function NationsPage() {
  return (
    <>
      <Header />
      <main>
        <NationsGrid />
        <DisclaimerBand />
      </main>
      <Footer />
    </>
  );
}
