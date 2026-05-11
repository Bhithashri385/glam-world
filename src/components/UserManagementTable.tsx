"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface User {
  id: string;
  email: string;
  role: "ADMIN" | "CONTESTANT" | "PUBLIC";
  createdAt: Date | string;
}

export default function UserManagementTable({ users }: { users: User[] }) {
  const [userList, setUserList] = useState(users);
  const [loading, setLoading] = useState<string | null>(null);
  const router = useRouter();

  async function updateRole(userId: string, newRole: "ADMIN" | "CONTESTANT" | "PUBLIC") {
    setLoading(userId);
    try {
      const res = await fetch("/api/admin/users", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, role: newRole }),
      });

      if (res.ok) {
        setUserList(
          userList.map((u) => (u.id === userId ? { ...u, role: newRole } : u))
        );
        router.refresh();
      }
    } catch (error) {
      console.error("Failed to update user:", error);
    } finally {
      setLoading(null);
    }
  }

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <table className="w-full text-sm">
        <thead className="bg-gray-50 border-b">
          <tr>
            <th className="text-left px-4 py-3 text-gray-600 font-medium">Email</th>
            <th className="text-left px-4 py-3 text-gray-600 font-medium">Role</th>
            <th className="text-left px-4 py-3 text-gray-600 font-medium">Joined</th>
            <th className="text-left px-4 py-3 text-gray-600 font-medium">Actions</th>
          </tr>
        </thead>
        <tbody>
          {userList.map((user) => (
            <tr key={user.id} className="border-b last:border-0 hover:bg-gray-50">
              <td className="px-4 py-3 font-medium text-gray-900">{user.email}</td>
              <td className="px-4 py-3">
                <span
                  className={`px-2 py-1 rounded-full text-xs font-medium ${
                    user.role === "ADMIN"
                      ? "bg-red-100 text-red-700"
                      : user.role === "CONTESTANT"
                      ? "bg-blue-100 text-blue-700"
                      : "bg-gray-100 text-gray-600"
                  }`}
                >
                  {user.role}
                </span>
              </td>
              <td className="px-4 py-3 text-gray-600">
                {new Date(user.createdAt).toLocaleDateString()}
              </td>
              <td className="px-4 py-3">
                <div className="flex gap-2">
                  {user.role !== "ADMIN" && (
                    <button
                      onClick={() => updateRole(user.id, "ADMIN")}
                      disabled={loading === user.id}
                      className="text-xs bg-red-500 hover:bg-red-600 disabled:bg-gray-300 text-white px-2 py-1 rounded transition"
                    >
                      Make Admin
                    </button>
                  )}
                  {user.role !== "CONTESTANT" && (
                    <button
                      onClick={() => updateRole(user.id, "CONTESTANT")}
                      disabled={loading === user.id}
                      className="text-xs bg-blue-500 hover:bg-blue-600 disabled:bg-gray-300 text-white px-2 py-1 rounded transition"
                    >
                      Make Contestant
                    </button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
