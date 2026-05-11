import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";

export default async function AdminPage() {
  const session = await auth();
  if (!session || (session.user as any).role !== "ADMIN") redirect("/");

  const [competitions, users] = await Promise.all([
    db.competition.findMany({ orderBy: { createdAt: "desc" } }),
    db.user.findMany({ orderBy: { createdAt: "desc" } }),
  ]);

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-8">Admin Dashboard</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Total Users</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{users.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Total Competitions</p>
            <p className="text-3xl font-bold text-gray-900 mt-1">{competitions.length}</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <p className="text-sm text-gray-500">Active Competitions</p>
            <p className="text-3xl font-bold text-pink-500 mt-1">
              {competitions.filter((c) => c.status === "ACTIVE").length}
            </p>
          </div>
        </div>

        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-gray-800">Competitions</h2>
          <a
            href="/admin/create-competition"
            className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-lg text-sm font-medium transition"
          >
            + Create Competition
          </a>
        </div>

        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
          {competitions.length === 0 ? (
            <p className="text-center text-gray-400 py-10 text-sm">No competitions yet.</p>
          ) : (
            <table className="w-full text-sm">
              <thead className="bg-gray-50 border-b">
                <tr>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Title</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Type</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Status</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">Start Date</th>
                  <th className="text-left px-4 py-3 text-gray-600 font-medium">End Date</th>
                </tr>
              </thead>
              <tbody>
                {competitions.map((c) => (
                  <tr key={c.id} className="border-b last:border-0 hover:bg-gray-50">
                    <td className="px-4 py-3 font-medium">
                      <a href={`/admin/competitions/${c.id}`} className="text-pink-500 hover:underline">{c.title}</a>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{c.competitionType}</td>
                    <td className="px-4 py-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                        c.status === "ACTIVE" ? "bg-green-100 text-green-700" :
                        c.status === "UPCOMING" ? "bg-blue-100 text-blue-700" :
                        "bg-gray-100 text-gray-600"
                      }`}>
                        {c.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-gray-600">{new Date(c.startDate).toLocaleDateString()}</td>
                    <td className="px-4 py-3 text-gray-600">{new Date(c.endDate).toLocaleDateString()}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
