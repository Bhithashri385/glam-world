import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import EntryActions from "./EntryActions";
import StatusButton from "./StatusButton";
import ScoreForm from "./ScoreForm";

export default async function AdminCompetitionPage({ params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session || (session.user as any).role !== "ADMIN") redirect("/");

  const { id } = await params;

  const competition = await db.competition.findUnique({
    where: { id },
    include: {
      entries: {
        include: { contestant: true, scoreResult: true },
        orderBy: { createdAt: "asc" },
      },
    },
  });

  if (!competition) notFound();

  const isJury = competition.competitionType === "JURY";
  const pending = competition.entries.filter((e) => e.status === "PENDING");
  const approved = competition.entries.filter((e) => e.status === "APPROVED");
  const rejected = competition.entries.filter((e) => e.status === "REJECTED");

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-6">
          <a href="/admin" className="text-sm text-gray-500 hover:text-pink-500">← Admin Dashboard</a>
        </div>

        <div className="flex justify-between items-start mb-8">
          <div>
            <h1 className="text-2xl font-bold text-gray-900 mb-1">{competition.title}</h1>
            <p className="text-sm text-gray-500">
              {competition.competitionType} · {competition.status} ·{" "}
              {competition.entries.length} total entries
            </p>
          </div>
          <StatusButton competitionId={competition.id} currentStatus={competition.status} />
        </div>

        {pending.length > 0 && (
          <div className="mb-8">
            <h2 className="font-semibold text-gray-800 mb-3">Pending Approval ({pending.length})</h2>
            <div className="space-y-3">
              {pending.map((entry) => (
                <div key={entry.id} className="bg-white rounded-xl p-4 shadow-sm border border-yellow-100 flex items-center gap-4">
                  {entry.contestant.profileImage && (
                    <img src={entry.contestant.profileImage} alt="" className="w-12 h-12 rounded-full object-cover" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{entry.contestant.fullName}</p>
                    <p className="text-xs text-gray-500">{entry.contestant.country} · Age {entry.contestant.age}</p>
                  </div>
                  <EntryActions entryId={entry.id} />
                </div>
              ))}
            </div>
          </div>
        )}

        {approved.length > 0 && (
          <div className="mb-8">
            <h2 className="font-semibold text-gray-800 mb-3">
              Approved ({approved.length}){isJury && " — Enter Jury Scores"}
            </h2>
            <div className="space-y-4">
              {approved.map((entry) => (
                <div key={entry.id} className="bg-white rounded-xl p-4 shadow-sm border border-green-100">
                  <div className="flex items-center gap-4">
                    {entry.contestant.profileImage && (
                      <img src={entry.contestant.profileImage} alt="" className="w-12 h-12 rounded-full object-cover" />
                    )}
                    <div className="flex-1">
                      <p className="font-medium text-gray-900">{entry.contestant.fullName}</p>
                      <p className="text-xs text-gray-500">{entry.contestant.country} · Age {entry.contestant.age}</p>
                    </div>
                    {isJury && entry.scoreResult && (
                      <span className="text-sm font-semibold text-pink-500">
                        {Number(entry.scoreResult.overallScore).toFixed(2)} / 10
                      </span>
                    )}
                    {!isJury && (
                      <span className="text-xs font-medium text-green-600 bg-green-50 px-3 py-1 rounded-full">Approved</span>
                    )}
                  </div>
                  {isJury && (
                    <ScoreForm
                      entryId={entry.id}
                      existing={entry.scoreResult ? {
                        presentationScore: Number(entry.scoreResult.presentationScore),
                        confidenceScore: Number(entry.scoreResult.confidenceScore),
                        stylingScore: Number(entry.scoreResult.stylingScore),
                        profileScore: Number(entry.scoreResult.profileScore),
                        professionalismScore: Number(entry.scoreResult.professionalismScore),
                        overallScore: Number(entry.scoreResult.overallScore),
                      } : null}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>
        )}

        {rejected.length > 0 && (
          <div>
            <h2 className="font-semibold text-gray-800 mb-3">Rejected ({rejected.length})</h2>
            <div className="space-y-3">
              {rejected.map((entry) => (
                <div key={entry.id} className="bg-white rounded-xl p-4 shadow-sm border border-red-100 flex items-center gap-4">
                  {entry.contestant.profileImage && (
                    <img src={entry.contestant.profileImage} alt="" className="w-12 h-12 rounded-full object-cover" />
                  )}
                  <div className="flex-1">
                    <p className="font-medium text-gray-900">{entry.contestant.fullName}</p>
                    <p className="text-xs text-gray-500">{entry.contestant.country} · Age {entry.contestant.age}</p>
                  </div>
                  <span className="text-xs font-medium text-red-500 bg-red-50 px-3 py-1 rounded-full">Rejected</span>
                </div>
              ))}
            </div>
          </div>
        )}

        {competition.entries.length === 0 && (
          <p className="text-center text-gray-400 py-20 text-sm">No contestants have joined yet.</p>
        )}
      </div>
    </div>
  );
}
