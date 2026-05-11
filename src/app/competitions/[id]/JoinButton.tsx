"use client";

import { useState } from "react";

type EntryStatus = "PENDING" | "APPROVED" | "REJECTED";
type JoinEntry = { id: string; status: EntryStatus };

export default function JoinButton({ competitionId, contestantId, existingEntry, competitionStatus }: {
  competitionId: string;
  contestantId: string;
  existingEntry: JoinEntry | null;
  competitionStatus: string;
}) {
  const [entry, setEntry] = useState<JoinEntry | null>(existingEntry);
  const [loading, setLoading] = useState(false);

  async function handleJoin() {
    setLoading(true);
    const res = await fetch("/api/entries", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ competitionId, contestantId }),
    });
    const data = await res.json();
    if (res.ok) setEntry(data.entry as JoinEntry);
    setLoading(false);
  }

  if (competitionStatus === "COMPLETED") {
    return <p className="text-sm text-gray-400">This competition has ended.</p>;
  }

  if (entry) {
    return (
      <div className={`inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium ${
        entry.status === "APPROVED" ? "bg-green-100 text-green-700" :
        entry.status === "REJECTED" ? "bg-red-100 text-red-600" :
        "bg-yellow-100 text-yellow-700"
      }`}>
        {entry.status === "APPROVED" ? "✓ Approved" :
         entry.status === "REJECTED" ? "✗ Rejected" :
         "⏳ Pending Approval"}
      </div>
    );
  }

  return (
    <button
      onClick={handleJoin}
      disabled={loading}
      className="bg-pink-500 hover:bg-pink-600 text-white px-6 py-2 rounded-lg text-sm font-medium transition"
    >
      {loading ? "Joining..." : "Join Competition"}
    </button>
  );
}
