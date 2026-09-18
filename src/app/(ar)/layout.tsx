import type { Metadata } from "next";

import "../globals.css";
import "flag-icons/css/flag-icons.min.css";
import { RootShell } from "@/components/root-shell";

/**
 * Root layout for the Arabic site (`/`, plus /mizan-uae-ar and the dev-only
 * /preview routes). Its English twin lives in src/app/(en)/layout.tsx — two
 * root layouts, because the two languages need different `<html lang>` and
 * `<html dir>` in the server-rendered HTML. Everything the two documents
 * share is in <RootShell>.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mizanone.com"),
  title: "ميزان - Mizan | أفضل وسطاء التداول في الإمارات 2026",
  description:
    "ميزان — وازِن بين أفضل وسطاء التداول المرخّصين في الإمارات. مقارنة مستقلة ومحايدة تساعدك على اختيار الوسيط الأنسب لك.",
  alternates: {
    canonical: "/",
    languages: { "ar-AE": "/", "en-ZA": "/en", "x-default": "/" },
  },
};

export default function ArabicRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell lang="ar">{children}</RootShell>;
}
