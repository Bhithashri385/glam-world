import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import Link from "next/link";
import ShareLeaderboardButton from "./ShareLeaderboardButton";

export default async function CompetitionLeaderboardPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  const competition = await db.competition.findUnique({
    where: { id },
    include: {
      entries: {
        where: { status: "APPROVED" },
        include: { contestant: true, scoreResult: true },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!competition) {
    notFound();
  }

  // Sort by votes or scores
  const entries = [...competition.entries];
  if (competition.competitionType === "JURY") {
    entries.sort(
      (a, b) => Number(b.scoreResult?.overallScore ?? 0) - Number(a.scoreResult?.overallScore ?? 0)
    );
  } else {
    entries.sort((a, b) => (b.voteCount || 0) - (a.voteCount || 0));
  }

  const isJury = competition.competitionType === "JURY";

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 to-purple-50">
      <div className="max-w-4xl mx-auto px-4 py-8">
        <Link href={`/competitions/${competition.id}`} className="text-sm text-pink-600 hover:text-pink-700 mb-6 inline-block">
          ← Back to Competition
        </Link>

        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h1 className="text-4xl font-bold text-gray-900 mb-2">{competition.title}</h1>
          <p className="text-gray-600 mb-2">{competition.description}</p>
          <p className="text-sm text-gray-500">
            {isJury ? "Jury Scores" : "Public Voting"} • {entries.length} Approved Entries
          </p>
        </div>

        <div className="bg-white rounded-2xl shadow-lg p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {isJury ? "Final Scores" : "Vote Results"}
          </h2>

          {entries.length === 0 ? (
            <p className="text-center text-gray-500 py-8">No approved entries yet.</p>
          ) : (
            <div className="space-y-3">
              {entries.map((entry, index) => {
                const medal = index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`;
                const bgColor = 
                  index === 0 ? "bg-yellow-50 border-yellow-200" :
                  index === 1 ? "bg-gray-50 border-gray-200" :
                  index === 2 ? "bg-orange-50 border-orange-200" :
                  "bg-white border-gray-100";

                return (
                  <div
                    key={entry.id}
                    className={`flex items-center gap-4 p-4 rounded-xl border-2 ${bgColor} transition hover:shadow-md`}
                  >
                    <div className="text-2xl font-bold w-10 text-center">{medal}</div>

                    {entry.contestant.profileImage && (
                      <img
                        src={entry.contestant.profileImage}
                        alt={entry.contestant.fullName}
                        className="w-14 h-14 rounded-full object-cover shadow-md"
                      />
                    )}

                    <div className="flex-1 min-w-0">
                      <p className="font-bold text-gray-900 text-lg">{entry.contestant.fullName}</p>
                      <p className="text-sm text-gray-600">{entry.contestant.country} • Age {entry.contestant.age}</p>
                    </div>

                    <div className="text-right">
                      {isJury && entry.scoreResult ? (
                        <div>
                          <p className="text-3xl font-bold text-pink-500">
                            {Number(entry.scoreResult.overallScore).toFixed(2)}
                          </p>
                          <p className="text-xs text-gray-500">/10</p>
                        </div>
                      ) : (
                        <div>
                          <p className="text-3xl font-bold text-blue-500">{entry.voteCount || 0}</p>
                          <p className="text-xs text-gray-500">votes</p>
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          )}

          {isJury && entries[0]?.scoreResult && (
            <div className="mt-8 pt-8 border-t-2 border-gray-100">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Winner Scores</h3>
              <div className="grid grid-cols-5 gap-3">
                {[
                  { label: "Presentation", score: entries[0].scoreResult.presentationScore },
                  { label: "Confidence", score: entries[0].scoreResult.confidenceScore },
                  { label: "Styling", score: entries[0].scoreResult.stylingScore },
                  { label: "Profile", score: entries[0].scoreResult.profileScore },
                  { label: "Professionalism", score: entries[0].scoreResult.professionalismScore },
                ].map((cat) => (
                  <div key={cat.label} className="bg-pink-50 rounded-lg p-3 text-center">
                    <p className="text-xs text-gray-600 mb-1">{cat.label}</p>
                    <p className="text-2xl font-bold text-pink-600">{Number(cat.score).toFixed(1)}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className="text-center mt-8">
          <p className="text-sm text-gray-500 mb-4">Want to share these results?</p>
          <ShareLeaderboardButton />
        </div>
      </div>
    </div>
  );
}
