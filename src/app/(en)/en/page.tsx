import type { Metadata } from "next";

import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Best Trading Brokers in South Africa 2026 | Mizan",
  description:
    "An up-to-date list of the best licensed trading brokers in South Africa — compare, choose, and start trading in minutes.",
  alternates: {
    canonical: "/en",
    languages: { "ar-AE": "/", "en-ZA": "/en", "x-default": "/" },
  },
};

/**
 * The English South Africa edition. Same <LandingPage /> component as the
 * Arabic UAE page at `/`, same sections in the same order — the copy comes
 * through the dictionary in src/lib/dictionary.ts (which is where the market
 * differences live) and the layout flips to LTR because this route's root
 * layout sets `dir="ltr"`.
 */
export default function Page() {
  return <LandingPage />;
}
