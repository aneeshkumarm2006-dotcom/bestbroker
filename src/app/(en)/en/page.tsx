import type { Metadata } from "next";

import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "Best Trading Brokers in the UAE 2026 | Mizan",
  description:
    "An up-to-date list of the best licensed trading brokers in the UAE — compare, choose, and start trading in minutes.",
  alternates: {
    canonical: "/en",
    languages: { ar: "/", en: "/en", "x-default": "/" },
  },
};

/**
 * English mirror of the Arabic landing page at `/`. Same <LandingPage />
 * component, same sections in the same order — the copy comes through the
 * dictionary in src/lib/dictionary.ts and the layout flips to LTR because
 * this route's root layout sets `dir="ltr"`.
 */
export default function Page() {
  return <LandingPage />;
}
