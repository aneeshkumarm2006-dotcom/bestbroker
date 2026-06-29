export interface DisclaimerBandProps {
  /**
   * When false (broker-detail pages) only the gold "K" divider renders.
   * Defaults to true (home page) so the risk-warning paragraphs show.
   */
  showWarning?: boolean;
}

/**
 * Centered gold "K" divider followed by the investment risk-warning copy.
 * Source: home.html `main > section.mb-14.mt-20` (outer mt-20/mb-14 margins
 * are excluded per the crop-matching rule).
 *   - standard Tailwind `.container` (max-width breakpoints), centered
 *   - inner box: `w-10/12 mx-auto`, shifted `ml-4em` at lg (>=1024px)
 *   - K = /assets/img/gcc/Icon-K.svg at intrinsic size (w-max), centered, mb-14
 *   - paragraphs: 14px / 500, second paragraph separated by my-6 (1.5rem)
 */
export function DisclaimerBand({ showWarning = true }: DisclaimerBandProps) {
  return (
    <section className="w-full">
      <div className="container mx-auto">
        <div className="mx-auto w-10/12 lg:ml-[4em]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/gcc/Icon-K.svg"
            alt="BestBroker"
            className="mx-auto mb-14 w-max"
          />
          {showWarning && (
            <div className="rounded-card border border-divider bg-white/70 p-6 shadow-card backdrop-blur lg:p-10">
              <p className="text-sm font-bold text-ink">
                <span className="ml-1 text-brand">تحذير من المخاطر:</span>
                ينطوي الاستثمار على مخاطر عالية، بما في ذلك خطر خسارة بعض أو كل
                مبلغ استثمارك، وقد لا يكون مناسبًا لجميع المستثمرين.
              </p>
              <p className="my-6 text-sm font-medium leading-relaxed text-muted">
                يجب أن تتأكد انه بإمكانك تحمل المخاطرة العالية التي قد تؤدي إلى
                خسارة أموالك. قبل اتخاذ قرار بالتداول، يجب أن تكون على علم تام
                بالمخاطر والتكاليف المرتبطة بالاستثمار في الأسواق المالية.
                البيانات الواردة في هذا الموقع ليست بالضرورة ظاهرة في الوقت
                الحقيقي او دقيقة. لن يتحمل ميزان Mizan أو أي مزود للبيانات الواردة
                في هذا الموقع المسؤولية عن أي خسارة أو ضرر نتيجة لاستثمارك، أو
                اعتمادك على المعلومات الواردة في هذا الموقع.
              </p>
              <p className="text-sm font-medium leading-relaxed text-muted">
                قد يتم تعويض ميزان Mizan من قبل المعلنين الذين يظهرون على الموقع،
                بناءً على تفاعلك مع الإعلانات أو المعلنين.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
