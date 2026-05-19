import { auth } from "@/lib/auth";
import SignOutButton from "./SignOutButton";
import ThemeToggle from "./ThemeToggle";
import Link from "next/link";
import { Crown } from "lucide-react";
import { isAdmin } from "@/lib/session-role";

export default async function Navbar() {
  const session = await auth();
  const admin = isAdmin(session);

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--background)]/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-gold shadow-[0_4px_20px_rgba(251,191,36,0.35)]">
            <Crown className="h-5 w-5 text-[#1a0a2e]" strokeWidth={2.5} />
          </span>
          <span className="font-serif text-xl font-semibold tracking-tight">
            <span className="text-gradient-gold">Glam</span>
            <span className="text-[var(--foreground)]">WorldFace</span>
          </span>
        </Link>
        <div className="flex items-center gap-1 sm:gap-2">
          <Link
            href="/explore"
            className="hidden rounded-lg px-3 py-2 text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)] sm:inline-flex"
          >
            Explore
          </Link>
          <Link
            href="/competitions"
            className="hidden rounded-lg px-3 py-2 text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)] sm:inline-flex"
          >
            Competitions
          </Link>
          {session && (
            <Link
              href="/dashboard"
              className="hidden rounded-lg px-3 py-2 text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)] sm:inline-flex"
            >
              Dashboard
            </Link>
          )}
          {admin && (
            <Link
              href="/admin"
              className="hidden rounded-lg px-3 py-2 text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)] sm:inline-flex"
            >
              Admin
            </Link>
          )}
          <ThemeToggle className="ml-1" />
          {session ? (
            <SignOutButton />
          ) : (
            <>
              <Link
                href="/login"
                className="rounded-lg px-3 py-2 text-sm text-[var(--muted-foreground)] transition hover:text-[var(--foreground)]"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="ml-1 inline-flex items-center justify-center rounded-xl bg-gradient-royal px-4 py-2 text-sm font-medium text-white shadow-md transition-opacity hover:opacity-95"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
