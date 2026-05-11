import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import UserManagementTable from "@/components/UserManagementTable";
import { isAdmin } from "@/lib/session-role";

export default async function AdminUsersPage() {
  const session = await auth();
  if (!isAdmin(session)) redirect("/");

  const users = await db.user.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <div className="mb-6">
          <a href="/admin" className="text-sm text-gray-500 hover:text-pink-500">
            ← Back to Admin Dashboard
          </a>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Admin Users</h1>
        <p className="text-gray-500 text-sm mb-6">Manage user roles for platform access.</p>
        <UserManagementTable users={users} />
      </div>
    </div>
  );
}
