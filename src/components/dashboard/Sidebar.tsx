"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  UserCircle2,
  FileText,
  MessageSquareQuote,
  MessageSquare,
  Bell,
  Calendar,
  HelpCircle,
  LogOut,
  Crown,
  Menu,
  X,
} from "lucide-react";
import { useState, type ComponentType } from "react";
import { cn } from "@/lib/cn";
import { signOut } from "next-auth/react";

type NavItem = {
  href: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
  badge?: number;
  soon?: boolean;
};

const ITEMS: NavItem[] = [
  { href: "/dashboard", label: "Dashboard", icon: LayoutDashboard },
  { href: "/dashboard/profile", label: "My Profile", icon: UserCircle2 },
  { href: "/dashboard/competitions", label: "My Application", icon: FileText },
  { href: "/dashboard/questions", label: "Questions", icon: MessageSquareQuote, soon: true },
  { href: "/dashboard/messages", label: "Messages", icon: MessageSquare, soon: true },
  { href: "/dashboard/notifications", label: "Notifications", icon: Bell, soon: true },
  { href: "/dashboard/events", label: "Events", icon: Calendar, soon: true },
  { href: "/dashboard/help", label: "Help Center", icon: HelpCircle, soon: true },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <>
      {/* Mobile toggle */}
      <button
        type="button"
        onClick={() => setOpen(true)}
        className="fixed left-4 top-4 z-40 grid h-10 w-10 place-items-center rounded-xl border border-[var(--border)] bg-[var(--card)] text-[var(--foreground)] lg:hidden"
        aria-label="Open menu"
      >
        <Menu className="h-5 w-5" />
      </button>

      {/* Overlay */}
      {open && (
        <div
          onClick={() => setOpen(false)}
          className="fixed inset-0 z-40 bg-black/60 lg:hidden"
        />
      )}

      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-[var(--border)] bg-[var(--card)] transition-transform lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
          "lg:relative lg:translate-x-0",
        )}
      >
        <div className="flex items-center justify-between px-6 py-5">
          <Link
            href="/"
            className="flex items-center gap-2"
            onClick={() => setOpen(false)}
          >
            <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold shadow-[0_4px_20px_rgba(251,191,36,0.35)]">
              <Crown className="h-5 w-5 text-[#1a0a2e]" strokeWidth={2.5} />
            </span>
            <span className="font-serif text-lg font-semibold tracking-tight">
              <span className="text-gradient-gold">Glam</span>
              <span className="text-[var(--foreground)]">WorldFace</span>
            </span>
          </Link>
          <button
            type="button"
            onClick={() => setOpen(false)}
            className="lg:hidden"
            aria-label="Close menu"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-2">
          {ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive =
              item.href === "/dashboard"
                ? pathname === "/dashboard"
                : pathname.startsWith(item.href);
            return (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className={cn(
                  "flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium transition-colors",
                  isActive
                    ? "bg-[var(--primary)] text-[var(--primary-foreground)]"
                    : "text-[var(--muted-foreground)] hover:bg-[var(--muted)] hover:text-[var(--foreground)]",
                )}
              >
                <Icon className="h-4 w-4" />
                <span>{item.label}</span>
                {item.soon && (
                  <span className="ml-auto rounded-full bg-[var(--muted)] px-2 py-0.5 text-[10px] uppercase tracking-wide text-[var(--muted-foreground)]">
                    Soon
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="border-t border-[var(--border)] p-3">
          <button
            type="button"
            onClick={() => signOut({ callbackUrl: "/" })}
            className="flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-sm font-medium text-[var(--muted-foreground)] transition-colors hover:bg-[var(--muted)] hover:text-[var(--foreground)]"
          >
            <LogOut className="h-4 w-4" />
            <span>Logout</span>
          </button>
        </div>
      </aside>
    </>
  );
}
