import { cn } from "@/lib/cn";
import { type HTMLAttributes } from "react";

type BadgeVariant =
  | "default"
  | "luxe"
  | "gold"
  | "outline"
  | "trending"
  | "finalist"
  | "ai";

const variants: Record<BadgeVariant, string> = {
  default: "bg-[var(--muted)] text-[var(--foreground)]",
  luxe: "bg-gradient-luxe text-white",
  gold: "bg-gradient-gold text-[#1a0a2e]",
  outline: "border border-[var(--border)] text-[var(--foreground)]",
  trending: "bg-orange-500/20 text-orange-300 border border-orange-500/40",
  finalist: "bg-emerald-500/20 text-emerald-300 border border-emerald-500/40",
  ai: "bg-violet-500/20 text-violet-300 border border-violet-500/40",
};

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export function Badge({ className, variant = "default", ...props }: BadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-1 rounded-full px-2.5 py-0.5 text-xs font-medium",
        variants[variant],
        className,
      )}
      {...props}
    />
  );
}
