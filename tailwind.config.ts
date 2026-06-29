import type { Config } from "tailwindcss";

/**
 * Mizan (ميزان) — "Midnight Indigo" brand system.
 * A complete reskin of the former bestbroker theme: deep navy surfaces,
 * indigo→violet gradients for primary actions, and a cyan accent for
 * highlights. Tailwind's default palette stays available.
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
        // Dark chrome (header / footer / title band).
        ink: "#0B1437",
        navy: { DEFAULT: "#111C44", deep: "#0B1437", light: "#1B2A5E" },
        // Primary brand (CTAs, links, emphasis).
        brand: { DEFAULT: "#6366F1", light: "#818CF8", dark: "#4338CA" },
        violet: { DEFAULT: "#8B5CF6", light: "#A78BFA" },
        // Secondary highlight.
        accent: { DEFAULT: "#22D3EE", light: "#67E8F9", foreground: "#04122E" },
        // Rating stars.
        star: { DEFAULT: "#FBBF24", empty: "#CBD2E5" },
        muted: "#5A6286",
        divider: "#E5E9F5",
        surface: "#F5F7FF",
      },
      fontFamily: {
        // Cairo carries both Arabic and Latin glyphs (loaded in layout.tsx).
        sans: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
        display: ["var(--font-cairo)", "Cairo", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "brand-gradient": "linear-gradient(135deg, #6366F1 0%, #8B5CF6 100%)",
        "brand-gradient-soft": "linear-gradient(135deg, #818CF8 0%, #6366F1 100%)",
        "accent-gradient": "linear-gradient(135deg, #22D3EE 0%, #6366F1 100%)",
        "navy-gradient":
          "linear-gradient(130deg, #0B1437 0%, #14215A 55%, #25357A 100%)",
      },
      boxShadow: {
        card: "0 24px 50px -24px rgba(20, 28, 78, 0.45)",
        control: "0 12px 32px -10px rgba(99, 102, 241, 0.35)",
        glow: "0 0 0 1px rgba(99,102,241,0.18), 0 22px 48px -18px rgba(99,102,241,0.55)",
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
