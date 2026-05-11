import { auth } from "@/lib/auth";
import SignOutButton from "./SignOutButton";
import Link from "next/link";
import { isAdmin } from "@/lib/session-role";

export default async function Navbar() {
  const session = await auth();
  const admin = isAdmin(session);

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <Link href="/" className="text-xl font-bold text-pink-500">GlamWorld</Link>
      <div className="flex items-center gap-5">
        <Link href="/competitions" className="text-sm text-gray-600 hover:text-pink-500 transition">Competitions</Link>
        {session && (
          <Link href="/dashboard" className="text-sm text-gray-600 hover:text-pink-500 transition">Dashboard</Link>
        )}
        {admin && (
          <Link href="/admin" className="text-sm text-gray-600 hover:text-pink-500 transition">Admin</Link>
        )}
        {session ? (
          <SignOutButton />
        ) : (
          <>
            <Link href="/login" className="text-sm text-gray-600 hover:text-pink-500 transition">Login</Link>
            <Link href="/register" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              Join Now
            </Link>
          </>
        )}
      </div>
    </nav>
  );
}
