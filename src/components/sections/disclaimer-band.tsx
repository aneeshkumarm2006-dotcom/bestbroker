"use client";

import { useLanguage } from "@/lib/i18n";

export interface DisclaimerBandProps {
  showWarning?: boolean;
}

/** Gold diamond section divider + warm-tinted risk-warning box. */
export function DisclaimerBand({ showWarning = true }: DisclaimerBandProps) {
  const { t } = useLanguage();
  return (
    <section id="disclaimer" className="w-full py-10">
      <div className="mx-auto w-full px-6 sm:max-w-screen-sm md:max-w-screen-md lg:max-w-screen-lg lg:px-12 xl:max-w-screen-xl 2xl:max-w-screen-2xl">
        {/* Gold diamond divider */}
        <div className="mb-10 flex items-center gap-0">
          <div className="h-px flex-1 bg-divider" />
          <svg
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="mx-4 flex-shrink-0"
            aria-hidden="true"
          >
            <rect
              x="8"
              y="0.5"
              width="10.607"
              height="10.607"
              rx="1"
              transform="rotate(45 8 0.5)"
              fill="#B59028"
            />
          </svg>
          <div className="h-px flex-1 bg-divider" />
        </div>

        {showWarning && (
          <div className="rounded-xl border border-[#E8C9B4] bg-[#FBF0E8] p-6 lg:p-10">
            {/* Warning header */}
            <div className="mb-4 flex items-center justify-end gap-2 text-right">
              <p className="text-base font-bold text-ink">
                {t("تحذير من المخاطر")}
              </p>
              <svg
                width="22"
                height="22"
                viewBox="0 0 22 22"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
              >
                <path
                  d="M11 2L2 19h18L11 2z"
                  stroke="#9B4F0F"
                  strokeWidth="1.5"
                  strokeLinejoin="round"
                  fill="rgba(155,79,15,0.08)"
                />
                <path d="M11 9v4" stroke="#9B4F0F" strokeWidth="1.5" strokeLinecap="round" />
                <circle cx="11" cy="15.5" r="0.75" fill="#9B4F0F" />
              </svg>
            </div>
            <p className="text-sm leading-relaxed text-muted">
              {t(
                "ينطوي الاستثمار على مخاطر عالية، بما في ذلك خطر خسارة بعض أو كل مبلغ استثمارك، وقد لا يكون مناسبًا لجميع المستثمرين."
              )}
            </p>
            <a
              href="#"
              className="mt-4 inline-block text-sm font-bold text-brand underline underline-offset-2 hover:text-brand-dark"
            >
              {t("اقرأ المزيد")}
            </a>
          </div>
        )}
      </div>
    </section>
  );
}
