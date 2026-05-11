import { auth } from "@/lib/auth";
import SignOutButton from "./SignOutButton";

export default async function Navbar() {
  const session = await auth();
  const isAdmin = (session?.user as any)?.role === "ADMIN";

  return (
    <nav className="flex justify-between items-center px-8 py-4 border-b border-gray-100 bg-white sticky top-0 z-50">
      <a href="/" className="text-xl font-bold text-pink-500">GlamWorld</a>
      <div className="flex items-center gap-5">
        <a href="/competitions" className="text-sm text-gray-600 hover:text-pink-500 transition">Competitions</a>
        {session && (
          <a href="/dashboard" className="text-sm text-gray-600 hover:text-pink-500 transition">Dashboard</a>
        )}
        {isAdmin && (
          <a href="/admin" className="text-sm text-gray-600 hover:text-pink-500 transition">Admin</a>
        )}
        {session ? (
          <SignOutButton />
        ) : (
          <>
            <a href="/login" className="text-sm text-gray-600 hover:text-pink-500 transition">Login</a>
            <a href="/register" className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition">
              Join Now
            </a>
          </>
        )}
      </div>
    </nav>
  );
}
