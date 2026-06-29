import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import { LanguageProvider } from "@/lib/i18n";
import { LanguageToggle } from "@/components/language-toggle";

// Mizan renders site-wide in Cairo, which ships both Arabic and Latin glyphs —
// a deliberate brand typeface (the former theme fell back to the system font).
const cairo = Cairo({
  subsets: ["arabic", "latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
  variable: "--font-cairo",
  display: "swap",
});

export const metadata: Metadata = {
  title: "ميزان - Mizan | مقارنة الوسطاء",
  description:
    "ميزان — وازِن بين أفضل وسطاء التداول في دول الخليج. مقارنة مستقلة ومحايدة تساعدك على اختيار الوسيط الأنسب لك.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl" className={cairo.variable}>
      <body className="bg-surface font-sans text-ink antialiased">
        <LanguageProvider>
          <LanguageToggle />
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
