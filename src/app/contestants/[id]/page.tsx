import { db } from "@/lib/db";
import { notFound } from "next/navigation";
import ShareButton from "./ShareButton";
import Link from "next/link";

export default async function PublicProfilePage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const contestant = await db.contestant.findUnique({
    where: { id },
    include: {
      images: true,
      entries: {
        where: { status: "APPROVED" },
        include: { competition: true, scoreResult: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!contestant) notFound();

  const profileUrl = `${process.env.NEXTAUTH_URL}/contestants/${id}`;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-3xl mx-auto">
        <div className="mb-6">
          <Link href="/competitions" className="text-sm text-gray-500 hover:text-pink-500">← All Competitions</Link>
        </div>

        {/* Profile Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <div className="flex items-start gap-6">
            {contestant.profileImage ? (
              <img
                src={contestant.profileImage}
                alt={contestant.fullName}
                className="w-28 h-28 rounded-2xl object-cover shadow-sm"
              />
            ) : (
              <div className="w-28 h-28 rounded-2xl bg-pink-100 flex items-center justify-center text-pink-400 text-3xl font-bold">
                {contestant.fullName.charAt(0)}
              </div>
            )}
            <div className="flex-1">
              <div className="flex justify-between items-start">
                <div>
                  <h1 className="text-2xl font-bold text-gray-900">{contestant.fullName}</h1>
                  <p className="text-gray-500 text-sm mt-1">{contestant.country} · Age {contestant.age}</p>
                </div>
                <ShareButton url={profileUrl} />
              </div>
              <p className="text-gray-600 text-sm mt-3 leading-relaxed">{contestant.bio}</p>
              <div className="flex gap-3 mt-3">
                {contestant.instagram && (
                  <a
                    href={`https://instagram.com/${contestant.instagram.replace("@", "")}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-500 hover:underline"
                  >
                    Instagram
                  </a>
                )}
                {contestant.portfolioUrl && (
                  <a
                    href={contestant.portfolioUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-pink-500 hover:underline"
                  >
                    Portfolio
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
          <h2 className="font-semibold text-gray-800 mb-4">Details</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {[
              { label: "Gender", value: contestant.gender },
              { label: "Height", value: `${contestant.height} cm` },
              { label: "Weight", value: `${contestant.weight} kg` },
              { label: "Body Type", value: contestant.bodyType },
              { label: "Eye Color", value: contestant.eyeColor },
              { label: "Hair Color", value: contestant.hairColor },
            ].map(({ label, value }) => (
              <div key={label} className="bg-gray-50 rounded-xl p-3">
                <p className="text-xs text-gray-400 mb-1">{label}</p>
                <p className="text-sm font-medium text-gray-800">{value}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Photos */}
        {contestant.images.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6 mb-6">
            <h2 className="font-semibold text-gray-800 mb-4">Photos</h2>
            <div className="grid grid-cols-2 gap-4">
              {contestant.images.map((img) => (
                <div key={img.id}>
                  <img
                    src={img.imageUrl}
                    alt={img.imageType}
                    className="w-full rounded-xl object-cover aspect-[3/4]"
                  />
                  <p className="text-xs text-gray-400 text-center mt-1">
                    {img.imageType === "FACE" ? "Face" : "Full Body"}
                  </p>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Competition History */}
        {contestant.entries.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm p-6">
            <h2 className="font-semibold text-gray-800 mb-4">Competitions</h2>
            <div className="space-y-3">
              {contestant.entries.map((entry) => (
                <div key={entry.id} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                  <div>
                    <p className="text-sm font-medium text-gray-900">{entry.competition.title}</p>
                    <p className="text-xs text-gray-400 mt-0.5">
                      {entry.competition.competitionType === "JURY" ? "Jury Based" : "Public Voting"}
                    </p>
                  </div>
                  {entry.scoreResult && (
                    <span className="text-sm font-semibold text-pink-500">
                      {Number(entry.scoreResult.overallScore).toFixed(2)} / 10
                    </span>
                  )}
                  {entry.competition.competitionType === "PUBLIC_VOTING" && (
                    <span className="text-sm text-gray-500">{entry.voteCount} votes</span>
                  )}
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
