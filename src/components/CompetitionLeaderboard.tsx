"use client";

import { useEffect, useState } from "react";

interface LeaderboardEntry {
  id: string;
  contestant: {
    id: string;
    fullName: string;
    country: string;
    profileImage: string | null;
  };
  voteCount?: number;
  overallScore?: number;
  scoreResult?: {
    overallScore: number;
  } | null;
}

interface CompetitionResponse {
  error?: string;
  competition: {
    competitionType: "JURY" | "PUBLIC_VOTING";
    entries: LeaderboardEntry[];
  };
}

export default function CompetitionLeaderboard({ competitionId }: { competitionId: string }) {
  const [entries, setEntries] = useState<LeaderboardEntry[]>([]);
  const [loading, setLoading] = useState(true);
  const [type, setType] = useState<string>("");

  useEffect(() => {
    async function loadLeaderboard() {
      try {
        const compRes = await fetch(`/api/competitions/${competitionId}`);
        const compData = (await compRes.json()) as CompetitionResponse;
        if (!compRes.ok) throw new Error(compData?.error || "Failed to load leaderboard");

        setType(compData.competition.competitionType);

        const approved = compData.competition.entries || [];
        if (compData.competition.competitionType === "JURY") {
          approved.sort((a, b) => (b.scoreResult?.overallScore || 0) - (a.scoreResult?.overallScore || 0));
        } else {
          approved.sort((a, b) => (b.voteCount || 0) - (a.voteCount || 0));
        }

        setEntries(
          approved.map((entry) => ({
            ...entry,
            overallScore: entry.scoreResult?.overallScore,
          }))
        );
      } catch (error) {
        console.error("Failed to load leaderboard:", error);
      } finally {
        setLoading(false);
      }
    }

    loadLeaderboard();
  }, [competitionId]);

  if (loading) {
    return <div className="text-center py-8 text-gray-500">Loading leaderboard...</div>;
  }

  if (entries.length === 0) {
    return <div className="text-center py-8 text-gray-500">No approved entries yet.</div>;
  }

  const isJury = type === "JURY";

  return (
    <div className="space-y-2">
      {entries.map((entry, index) => (
        <div
          key={entry.id}
          className={`flex items-center gap-4 p-4 rounded-xl border-2 ${
            index === 0 ? "bg-yellow-50 border-yellow-300" :
            index === 1 ? "bg-gray-50 border-gray-300" :
            index === 2 ? "bg-orange-50 border-orange-300" :
            "bg-white border-gray-100"
          }`}
        >
          <div className="text-2xl font-bold w-12 text-center">
            {index === 0 ? "🥇" : index === 1 ? "🥈" : index === 2 ? "🥉" : `#${index + 1}`}
          </div>
          
          {entry.contestant.profileImage && (
            <img 
              src={entry.contestant.profileImage} 
              alt={entry.contestant.fullName}
              className="w-12 h-12 rounded-full object-cover"
            />
          )}
          
          <div className="flex-1">
            <p className="font-semibold text-gray-900">{entry.contestant.fullName}</p>
            <p className="text-xs text-gray-500">{entry.contestant.country}</p>
          </div>
          
          <div className="text-right">
            {isJury && entry.overallScore !== undefined ? (
              <p className="text-lg font-bold text-pink-500">
                {Number(entry.overallScore).toFixed(2)}
              </p>
            ) : (
              <p className="text-lg font-bold text-blue-500">
                {entry.voteCount || 0} votes
              </p>
            )}
          </div>
        </div>
      ))}
    </div>
  );
}
