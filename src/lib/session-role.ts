import type { Session } from "next-auth";

export type AppRole = "ADMIN" | "CONTESTANT" | "PUBLIC";

export function getUserRole(session: Session | null | undefined): AppRole | null {
  const role = session?.user && "role" in session.user ? session.user.role : null;
  if (role === "ADMIN" || role === "CONTESTANT" || role === "PUBLIC") {
    return role;
  }
  return null;
}

export function isAdmin(session: Session | null | undefined): boolean {
  return getUserRole(session) === "ADMIN";
}
