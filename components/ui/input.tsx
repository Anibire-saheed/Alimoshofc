import * as React from "react";
import { cn } from "@/lib/utils";
export function Input({
  className,
  type,
  ...props
}: React.ComponentProps<"input">) {
  return (
    <input
      type={type}
      className={cn(
        "flex h-12 w-full border border-neutral-300 bg-white px-3 py-2 text-base outline-none focus-visible:border-[#68b04d] focus-visible:ring-2 focus-visible:ring-[#68b04d]/30 aria-invalid:border-red-600 disabled:opacity-50",
        className,
      )}
      {...props}
    />
  );
}
