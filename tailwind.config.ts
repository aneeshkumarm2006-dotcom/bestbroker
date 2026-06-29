import type { Config } from "tailwindcss";

/**
 * Mizan (ميزان) — "Warm Cream & Gold" brand system.
 * Cream/beige surfaces, deep dark-navy text, and a warm gold primary accent.
 */
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Deep dark navy for headings, table headers, footer.
        ink: "#0B1A30",
        navy: { DEFAULT: "#0B1A30", deep: "#060E1E", light: "#162444" },
        // Gold primary — CTAs, labels, highlights.
        brand: { DEFAULT: "#B59028", light: "#C9A83C", dark: "#8A6B12" },
        violet: { DEFAULT: "#C4A535", light: "#D4B84A" },
        // Accent = same gold family.
        accent: { DEFAULT: "#B59028", light: "#D4B84A", foreground: "#0B1A30" },
        // Star ratings.
        star: { DEFAULT: "#B59028", empty: "#D4CAAE" },
        // Warm muted text.
        muted: "#6B6357",
        // Warm divider.
        divider: "#D8D0C0",
        // Cream page background.
        surface: "#F2EDE0",
      },
      fontFamily: {
        sans: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
        display: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #C9A83C 0%, #8A6B12 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #D4B84A 0%, #B59028 100%)",
        "accent-gradient": "linear-gradient(135deg, #B59028 0%, #6B5010 100%)",
        "navy-gradient":
          "linear-gradient(130deg, #060E1E 0%, #0B1A30 55%, #162444 100%)",
      },
      boxShadow: {
        card: "0 24px 50px -24px rgba(11, 26, 48, 0.10)",
        control: "0 12px 32px -10px rgba(181, 144, 40, 0.20)",
        glow: "0 0 0 1px rgba(181,144,40,0.18), 0 22px 48px -18px rgba(181,144,40,0.30)",
      },
      borderRadius: {
        cta: "14px",
        control: "18px",
        card: "24px",
      },
    },
  },
  plugins: [],
};
export default config;
