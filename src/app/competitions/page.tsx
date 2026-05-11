import { db } from "@/lib/db";

export default async function CompetitionsPage() {
  const competitions = await db.competition.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-2xl font-bold text-gray-900 mb-2">Competitions</h1>
        <p className="text-gray-500 text-sm mb-8">Browse and join active competitions</p>

        {competitions.length === 0 ? (
          <p className="text-center text-gray-400 py-20">No competitions available yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {competitions.map((c) => (
              <a
                key={c.id}
                href={`/competitions/${c.id}`}
                className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 hover:border-pink-200 transition"
              >
                <div className="flex justify-between items-start mb-3">
                  <h2 className="font-semibold text-gray-900">{c.title}</h2>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    c.status === "ACTIVE" ? "bg-green-100 text-green-700" :
                    c.status === "UPCOMING" ? "bg-blue-100 text-blue-700" :
                    "bg-gray-100 text-gray-600"
                  }`}>
                    {c.status}
                  </span>
                </div>
                <p className="text-sm text-gray-500 mb-4 line-clamp-2">{c.description}</p>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>{c.competitionType === "JURY" ? "Jury Based" : "Public Voting"}</span>
                  <span>{new Date(c.startDate).toLocaleDateString()} – {new Date(c.endDate).toLocaleDateString()}</span>
                </div>
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
