import * as React from "react";

import { cn } from "@/lib/utils";

/**
 * Site content wrapper — mirrors the live `.container`:
 *   width: calc(100% - 15%)  => 85% (>=768px),  mobile <768px => 90%
 *   max-width: 1440px, centered.
 */
export function Container({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-[90%] max-w-[1440px] md:w-[85%]", className)}
      {...props}
    />
  );
}
