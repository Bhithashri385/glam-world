import { db } from "@/lib/db";
import { auth } from "@/lib/auth";
import { notFound } from "next/navigation";
import Link from "next/link";
import JoinButton from "./JoinButton";
import VoteButton from "./VoteButton";

export default async function CompetitionDetailPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const session = await auth();

  const competition = await db.competition.findUnique({
    where: { id },
    include: {
      entries: {
        where: { status: "APPROVED" },
        include: { contestant: true, scoreResult: true },
        orderBy: { voteCount: "desc" },
      },
    },
  });

  if (!competition) notFound();

  const contestant = session?.user?.id
    ? await db.contestant.findUnique({ where: { userId: session.user.id } })
    : null;

  const existingEntryRaw = contestant
    ? await db.competitionEntry.findUnique({
        where: { competitionId_contestantId: { competitionId: id, contestantId: contestant.id } },
      })
    : null;

  const existingEntry = existingEntryRaw
    ? { id: existingEntryRaw.id, status: existingEntryRaw.status }
    : null;

  const userVote =
    session?.user?.id && competition.competitionType === "PUBLIC_VOTING"
      ? await db.vote.findUnique({
          where: { competitionId_voterId: { competitionId: id, voterId: session.user.id } },
        })
      : null;

  const isPublicVoting = competition.competitionType === "PUBLIC_VOTING";
  const isActive = competition.status === "ACTIVE";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <Link href="/competitions" className="text-sm text-gray-500 hover:text-pink-500">← All Competitions</Link>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h1 className="text-2xl font-bold text-gray-900 mb-1">{competition.title}</h1>
              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                competition.status === "ACTIVE" ? "bg-green-100 text-green-700" :
                competition.status === "UPCOMING" ? "bg-blue-100 text-blue-700" :
                "bg-gray-100 text-gray-600"
              }`}>
                {competition.status}
              </span>
            </div>
            <span className="text-sm text-gray-500">
              {isPublicVoting ? "Public Voting" : "Jury Based"}
            </span>
          </div>

          <p className="text-gray-600 text-sm mb-4">{competition.description}</p>

          <div className="flex gap-6 text-sm text-gray-500">
            <span>Start: {new Date(competition.startDate).toLocaleDateString()}</span>
            <span>End: {new Date(competition.endDate).toLocaleDateString()}</span>
          </div>

          {session && contestant && (
            <div className="mt-6">
              <JoinButton
                competitionId={id}
                contestantId={contestant.id}
                existingEntry={existingEntry}
                competitionStatus={competition.status}
              />
            </div>
          )}

          {session && !contestant && (
            <div className="mt-6">
              <p className="text-sm text-gray-500">
                You need to <Link href="/dashboard/profile" className="text-pink-500 hover:underline">complete your profile</Link> before joining.
              </p>
            </div>
          )}

          {!session && (
            <div className="mt-6">
              <Link href="/login" className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition">
                Login to Join
              </Link>
            </div>
          )}
        </div>

        {competition.entries.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-semibold text-gray-800">
                {isPublicVoting ? "Leaderboard" : "Approved Contestants"} ({competition.entries.length})
              </h2>
              <div className="flex gap-2">
                <Link href={`/competitions/${id}/leaderboard`} className="text-xs bg-pink-100 text-pink-600 hover:bg-pink-200 px-3 py-1 rounded-full transition">
                  📊 Full Leaderboard
                </Link>
                {isPublicVoting && isActive && !session && (
                  <Link href="/login" className="text-xs text-pink-500 hover:underline">Login to vote</Link>
                )}
              </div>
            </div>
            <div className="space-y-3">
              {competition.entries.map((entry, i) => {
                const isOwnEntry = contestant?.id === entry.contestantId;
                const hasVotedFor = userVote?.contestantId === entry.contestantId;
                const userVotedAlready = !!userVote;

                return (
                  <div key={entry.id} className="flex items-center gap-4 p-3 rounded-lg bg-gray-50">
                    <span className="text-sm font-bold text-pink-500 w-6">#{i + 1}</span>
                    {entry.contestant.profileImage && (
                      <img src={entry.contestant.profileImage} alt="" className="w-10 h-10 rounded-full object-cover" />
                    )}
                    <div className="flex-1">
                      <Link href={`/contestants/${entry.contestantId}`} className="text-sm font-medium text-gray-900 hover:text-pink-500 transition">
                        {entry.contestant.fullName}
                      </Link>
                      <p className="text-xs text-gray-500">{entry.contestant.country}</p>
                    </div>
                    {isPublicVoting && (
                      <span className="text-sm text-gray-500 tabular-nums">{entry.voteCount} votes</span>
                    )}
                    {!isPublicVoting && entry.scoreResult && (
                      <span className="text-sm font-semibold text-pink-500">
                        {Number(entry.scoreResult.overallScore).toFixed(2)} / 10
                      </span>
                    )}
                    {isPublicVoting && isActive && session && !isOwnEntry && (
                      <VoteButton
                        competitionId={id}
                        contestantId={entry.contestantId}
                        entryId={entry.id}
                        hasVotedFor={hasVotedFor}
                        userVotedAlready={userVotedAlready}
                      />
                    )}
                    {isPublicVoting && isActive && session && isOwnEntry && (
                      <span className="text-xs text-gray-400 ml-2">You</span>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        )}

        {competition.entries.length === 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 text-center text-gray-400 text-sm py-16">
            No approved contestants yet.
          </div>
        )}
      </div>
    </div>
  );
}
