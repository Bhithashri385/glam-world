import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import Link from "next/link";

export default async function DashboardPage() {
  const session = await auth();

  if (!session) redirect("/login");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Dashboard</h1>
        <p className="text-gray-600 mb-6">
          Welcome, <span className="font-medium text-pink-500">{session.user?.name}</span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Link
            href="/dashboard/profile"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-pink-200 transition"
          >
            <h2 className="font-semibold text-gray-800 mb-1">My Profile</h2>
            <p className="text-sm text-gray-500">Build your contestant profile</p>
          </Link>

          <Link
            href="/competitions"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-pink-200 transition"
          >
            <h2 className="font-semibold text-gray-800 mb-1">Competitions</h2>
            <p className="text-sm text-gray-500">Browse and join competitions</p>
          </Link>

          <Link
            href="/dashboard/competitions"
            className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-pink-200 transition"
          >
            <h2 className="font-semibold text-gray-800 mb-1">My Entries</h2>
            <p className="text-sm text-gray-500">View your competition entries</p>
          </Link>
        </div>
      </div>
    </div>
  );
}
