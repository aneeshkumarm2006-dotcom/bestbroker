"use client";

import { useEffect, useRef } from "react";

/** Verbatim config from the reference page (reference-amwal/tokens.md §6). */
const TICKER_TAPE_CONFIG = {
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
  locale: "ar_AE",
} as const;

const TICKER_TAPE_SRC =
  "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";

/**
 * Full-bleed TradingView ticker-tape strip that opens the page (46px tall,
 * decorative / non-interactive). The official embed script is injected once,
 * client-side and idle-deferred, exactly like the reference page does. The
 * wrapper reserves `min-height: 46px` so nothing below it shifts while the
 * iframe loads, and the mandatory copyright link is kept in the DOM but
 * hidden, as on the target.
 */
export default function TickerTape() {
  const widgetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = widgetRef.current;
    // Guard against React StrictMode's double-invoke and any re-render:
    // the widget must be injected exactly once.
    if (!container || container.childElementCount > 0) return;

    let cancelled = false;

    const load = () => {
      if (cancelled || container.childElementCount > 0) return;
      const script = document.createElement("script");
      script.type = "text/javascript";
      script.src = TICKER_TAPE_SRC;
      script.async = true;
      script.text = JSON.stringify(TICKER_TAPE_CONFIG);
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
  }, []);

  return (
    <div
      className="tradingview-widget-container w-full min-h-[46px]"
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
