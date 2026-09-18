import type { Metadata } from "next";

import { LandingPage } from "@/components/landing-page";

export const metadata: Metadata = {
  title: "أفضل وسطاء التداول في الإمارات 2026 | ميزان",
  description:
    "قائمة محدّثة بأفضل وسطاء التداول المرخّصين في الإمارات — قارن واختر وابدأ التداول خلال دقائق.",
  alternates: {
    canonical: "/",
    languages: { "ar-AE": "/", "en-ZA": "/en", "x-default": "/" },
  },
};

/** The Arabic UAE edition. South Africa is src/app/(en)/en/page.tsx. */
export default function Page() {
  return <LandingPage />;
}
