"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function VoteButton({
  competitionId,
  contestantId,
  entryId,
  hasVotedFor,
  userVotedAlready,
}: {
  competitionId: string;
  contestantId: string;
  entryId: string;
  hasVotedFor: boolean;
  userVotedAlready: boolean;
}) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [voted, setVoted] = useState(hasVotedFor);
  const [alreadyVoted, setAlreadyVoted] = useState(userVotedAlready);

  if (voted) {
    return (
      <span className="text-xs font-medium text-pink-600 bg-pink-50 px-3 py-1.5 rounded-full">
        ✓ Your Vote
      </span>
    );
  }

  if (alreadyVoted) {
    return <span className="text-xs text-gray-400 ml-auto">Voted</span>;
  }

  async function handleVote() {
    setLoading(true);
    const res = await fetch("/api/votes", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ competitionId, contestantId, entryId }),
    });
    if (res.ok) {
      setVoted(true);
      setAlreadyVoted(true);
      router.refresh();
    }
    setLoading(false);
  }

  return (
    <button
      onClick={handleVote}
      disabled={loading}
      className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium transition"
    >
      {loading ? "Voting..." : "Vote"}
    </button>
  );
}
