import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import Link from "next/link";

export default async function MyEntriesPage() {
  const session = await auth();
  if (!session) redirect("/login");

  const contestant = session.user?.id
    ? await db.contestant.findUnique({
        where: { userId: session.user.id },
        include: {
          entries: {
            include: { competition: true, scoreResult: true },
            orderBy: { createdAt: "desc" },
          },
        },
      })
    : null;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/dashboard" className="text-sm text-gray-500 hover:text-pink-500">← Dashboard</Link>
        </div>

        <h1 className="text-2xl font-bold text-gray-900 mb-6">My Competition Entries</h1>

        {!contestant && (
          <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm mb-4">You need to complete your profile before joining competitions.</p>
            <Link href="/dashboard/profile" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition">
              Complete Profile
            </Link>
          </div>
        )}

        {contestant && contestant.entries.length === 0 && (
          <div className="bg-white rounded-xl p-8 text-center shadow-sm border border-gray-100">
            <p className="text-gray-500 text-sm mb-4">You haven&apos;t joined any competitions yet.</p>
            <Link href="/competitions" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-lg text-sm font-medium transition">
              Browse Competitions
            </Link>
          </div>
        )}

        {contestant && contestant.entries.length > 0 && (
          <div className="space-y-4">
            {contestant.entries.map((entry) => (
              <div key={entry.id} className="bg-white rounded-xl p-5 shadow-sm border border-gray-100">
                <div className="flex justify-between items-start">
                  <div>
                    <Link href={`/competitions/${entry.competitionId}`} className="font-semibold text-gray-900 hover:text-pink-500 transition">
                      {entry.competition.title}
                    </Link>
                    <p className="text-xs text-gray-400 mt-1">
                      {entry.competition.competitionType === "JURY" ? "Jury Based" : "Public Voting"} · {entry.competition.status}
                    </p>
                  </div>
                  <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                    entry.status === "APPROVED" ? "bg-green-100 text-green-700" :
                    entry.status === "REJECTED" ? "bg-red-100 text-red-500" :
                    "bg-yellow-100 text-yellow-700"
                  }`}>
                    {entry.status}
                  </span>
                </div>

                {entry.scoreResult && (
                  <p className="mt-3 text-sm font-semibold text-pink-500">
                    Jury Score: {Number(entry.scoreResult.overallScore).toFixed(2)} / 10
                  </p>
                )}
                {entry.competition.competitionType === "PUBLIC_VOTING" && entry.status === "APPROVED" && (
                  <p className="mt-3 text-sm text-gray-500">{entry.voteCount} votes</p>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
