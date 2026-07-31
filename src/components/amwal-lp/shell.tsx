import { Open_Sans } from "next/font/google";

// The reference page sets `"Open Sans", sans-serif` on <body>; Arabic glyphs
// intentionally fall through to the OS sans-serif (Open Sans ships no Arabic
// subset on Google Fonts — do not add subsets:["arabic"], it breaks the build).
const openSans = Open_Sans({
  subsets: ["latin"],
  weight: ["400", "700", "800"],
  display: "swap",
  variable: "--font-amwal-lp",
  // next/font's synthesized fallback is metric-adjusted Arial, which carries
  // Arabic glyphs and would intercept Arabic text before the OS sans-serif —
  // rendering it ~21% narrower than the reference. Disable it so Arabic falls
  // through to the generic sans-serif exactly like the live page.
  adjustFontFallback: false,
});

/**
 * Route-scoped wrapper for the /mizan-uae-ar clone. The root layout belongs to
 * the Mizan home design (Cairo font, cream surface); this shell overrides
 * font, colors and direction for everything inside it without touching
 * global files. Forced `dir="rtl"` also shields the page from the site-wide
 * language toggle — the clone is Arabic-only, like the reference.
 */
export function LpShell({ children }: { children: React.ReactNode }) {
  return (
    <div
      dir="rtl"
      lang="ar"
      className={`${openSans.variable} min-h-screen bg-white text-[16px] font-normal leading-6 text-[#212427]`}
      style={{ fontFamily: "var(--font-amwal-lp), sans-serif" }}
    >
      {children}
    </div>
  );
}
