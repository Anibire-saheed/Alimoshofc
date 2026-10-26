import * as React from "react";
import { cn } from "@/lib/utils";
export function Textarea({
  className,
  ...props
}: React.ComponentProps<"textarea">) {
  return (
    <textarea
      className={cn(
        "flex min-h-28 w-full border border-neutral-300 bg-white px-3 py-2 outline-none focus-visible:ring-2 focus-visible:ring-[#68b04d]/30 aria-invalid:border-red-600",
        className,
      )}
      {...props}
    />
  );
}
