import type { Metadata } from "next";

import "../globals.css";
import "flag-icons/css/flag-icons.min.css";
import { RootShell } from "@/components/root-shell";

/**
 * Root layout for the English edition (`/en`), which serves SOUTH AFRICA —
 * `/` is the Arabic UAE edition. Twin of src/app/(ar)/layout.tsx: same
 * document, same theme, same fonts; only `lang`/`dir`, the market and the
 * metadata differ. See <RootShell> for everything the two share.
 *
 * The two editions are region alternates of each other (hreflang below) but
 * nothing on the page links one to the other — a reader arrives on the
 * edition for their own market and stays there.
 */
export const metadata: Metadata = {
  metadataBase: new URL("https://www.mizanone.com"),
  title: "Mizan | Best Trading Brokers in South Africa 2026",
  description:
    "Mizan — weigh up the best licensed trading brokers in South Africa. An independent, impartial comparison to help you pick the broker that suits you.",
  alternates: {
    canonical: "/en",
    languages: { "ar-AE": "/", "en-ZA": "/en", "x-default": "/" },
  },
};

export default function EnglishRootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <RootShell lang="en">{children}</RootShell>;
}
