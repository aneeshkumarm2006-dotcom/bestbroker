"use client";

import { useEffect, useRef } from "react";

import { useLanguage } from "@/lib/i18n";

/** Symbols/config from the reference page; the locale follows the site language. */
const TICKER_TAPE_BASE = {
  symbols: [
    { proName: "OANDA:EURUSD", title: "EUR to USD" },
    { proName: "NASDAQ:NVDA", title: "NVidia" },
    { proName: "OANDA:XAUUSD", title: "Gold" },
    { proName: "NASDAQ:TSLA", title: "Tesla" },
    { proName: "NASDAQ:GOOG", title: "Alphabet" },
  ],
  showSymbolLogo: true,
  isTransparent: false,
  displayMode: "regular",
  colorTheme: "light",
} as const;

const TICKER_TAPE_SRC =
  "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

/**
 * Full-bleed TradingView ticker-tape strip that opens the page (46px tall,
 * decorative / non-interactive). The official embed script is injected
 * client-side and idle-deferred; the wrapper reserves `min-height: 46px` so
 * nothing below shifts while the iframe loads. When the language toggles, the
 * widget is torn down and re-injected with the matching locale.
 */
export default function TickerTape() {
  const widgetRef = useRef<HTMLDivElement>(null);
  const { lang } = useLanguage();

  useEffect(() => {
    const container = widgetRef.current;
    if (!container) return;

    let cancelled = false;
    // Tear down any previous-locale widget before injecting the new one
    // (also neutralises React StrictMode's double-invoke — the second run
    // simply rebuilds the same widget).
    container.innerHTML = "";

    const load = () => {
      if (cancelled || container.childElementCount > 0) return;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = TICKER_TAPE_SRC;
      script.async = true;
      script.text = JSON.stringify({
        ...TICKER_TAPE_BASE,
        locale: lang === "en" ? "en" : "ar_AE",
      });
      container.appendChild(script);
    };

    const idle = (
      window as Window & {
        requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      }
    ).requestIdleCallback;

    let timer: number | undefined;
    if (typeof idle === "function") {
      idle(load, { timeout: 2000 });
    } else {
      // Safari/iOS fallback — no requestIdleCallback.
      timer = window.setTimeout(load, 400);
    }

    return () => {
      cancelled = true;
      if (timer !== undefined) window.clearTimeout(timer);
    };
  }, [lang]);

  return (
    <div
      className="tradingview-widget-container min-h-[46px] w-full"
      aria-hidden="true"
    >
      <div
        ref={widgetRef}
        id="tv-ticker-tape"
        className="tradingview-widget-container__widget pointer-events-none [&_iframe]:pointer-events-none"
      />
      <div className="tradingview-widget-copyright hidden">
        <a
          href="https://www.tradingview.com/"
          rel="noopener nofollow"
          target="_blank"
        >
          <span className="blue-text">Track all markets on TradingView</span>
        </a>
      </div>
    </div>
  );
}
