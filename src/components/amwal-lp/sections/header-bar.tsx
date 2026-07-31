import { LpContainer } from "@/components/amwal-lp/container";

/**
 * Brand bar under the ticker tape — amwal's layout (logo right in RTL,
 * advertiser disclosure left, disclosure hidden below `md`), Mizan's theme.
 */
export default function HeaderBar() {
  return (
    <LpContainer className="pb-2 pt-4 text-xs leading-4 text-ink">
      <div className="flex items-center justify-center pb-2 md:justify-between">
        <a href="/" aria-label="ميزان">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/assets/img/gcc/logo.svg"
            alt="ميزان"
            width={140}
            height={44}
            className="h-[44px] w-[140px] object-contain"
          />
        </a>
        <p className="hidden text-start text-muted md:block">
          المعلومات الاستثمارية المقدمة في هذه الصفحة هي لأغراض تعليمية فقط.
        </p>
      </div>
    </LpContainer>
  );
}
