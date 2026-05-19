import { cn } from "@/lib/cn";
import { type HTMLAttributes, forwardRef } from "react";

export const GlassPanel = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      "glass rounded-2xl p-6 shadow-[0_8px_32px_rgba(0,0,0,0.06)]",
      className,
    )}
    {...props}
  />
));
GlassPanel.displayName = "GlassPanel";
