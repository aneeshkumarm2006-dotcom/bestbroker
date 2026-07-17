import type { Metadata } from "next";
import { Cairo } from "next/font/google";
import "./globals.css";
import "flag-icons/css/flag-icons.min.css";
import { LanguageProvider } from "@/lib/i18n";

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
      <head>
        {/* Google Tag Manager */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-KH67B6VM');`,
          }}
        />
        {/* End Google Tag Manager */}
      </head>
      <body className="bg-surface font-sans text-ink antialiased">
        {/* Google Tag Manager (noscript) */}
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-KH67B6VM"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {/* End Google Tag Manager (noscript) */}
        <LanguageProvider>
          {children}
        </LanguageProvider>
      </body>
    </html>
  );
}
