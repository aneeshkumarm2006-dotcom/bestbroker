import type { Metadata } from "next";

import "../globals.css";
import "flag-icons/css/flag-icons.min.css";
import { RootShell } from "@/components/root-shell";

/**
 * Root layout for the English mirror (`/en`). Twin of src/app/(ar)/layout.tsx
 * — same document, same theme, same fonts; only `lang`/`dir` and the metadata
 * differ. See <RootShell> for everything the two share.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mizanone.com"),
  title: "Mizan | Best Trading Brokers in the UAE 2026",
  description:
    "Mizan — weigh up the best licensed trading brokers in the UAE. An independent, impartial comparison to help you pick the broker that suits you.",
  alternates: {
    canonical: "/en",
    languages: { ar: "/", en: "/en", "x-default": "/" },
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell lang="en">{children}</RootShell>;
}
