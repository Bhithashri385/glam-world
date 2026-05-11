"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

const CATEGORIES = [
  { key: "presentationScore", label: "Presentation" },
  { key: "confidenceScore", label: "Confidence" },
  { key: "stylingScore", label: "Styling" },
  { key: "profileScore", label: "Profile" },
  { key: "professionalismScore", label: "Professionalism" },
];

export default function ScoreForm({ entryId, existing }: { entryId: string; existing: any | null }) {
  const router = useRouter();
  const [scores, setScores] = useState({
    presentationScore: existing?.presentationScore?.toString() ?? "",
    confidenceScore: existing?.confidenceScore?.toString() ?? "",
    stylingScore: existing?.stylingScore?.toString() ?? "",
    profileScore: existing?.profileScore?.toString() ?? "",
    professionalismScore: existing?.professionalismScore?.toString() ?? "",
  });
  const [loading, setLoading] = useState(false);
  const [saved, setSaved] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setLoading(true);
    setSaved(false);
    await fetch("/api/scores", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        entryId,
        presentationScore: parseFloat(scores.presentationScore),
        confidenceScore: parseFloat(scores.confidenceScore),
        stylingScore: parseFloat(scores.stylingScore),
        profileScore: parseFloat(scores.profileScore),
        professionalismScore: parseFloat(scores.professionalismScore),
      }),
    });
    setLoading(false);
    setSaved(true);
    router.refresh();
  }

  return (
    <form onSubmit={handleSubmit} className="mt-3 p-4 bg-gray-50 rounded-lg border border-gray-200">
      <p className="text-xs font-semibold text-gray-600 mb-3">Jury Scores (0 – 10)</p>
      <div className="grid grid-cols-5 gap-2 mb-3">
        {CATEGORIES.map(({ key, label }) => (
          <div key={key}>
            <label className="text-xs text-gray-500 block mb-1">{label}</label>
            <input
              type="number"
              min="0"
              max="10"
              step="0.1"
              required
              value={scores[key as keyof typeof scores]}
              onChange={(e) => setScores((prev) => ({ ...prev, [key]: e.target.value }))}
              className="w-full border border-gray-200 rounded px-2 py-1.5 text-sm text-center text-gray-900 focus:outline-none focus:ring-1 focus:ring-pink-300"
            />
          </div>
        ))}
      </div>
      {existing?.overallScore && (
        <p className="text-xs text-gray-500 mb-2">
          Current overall:{" "}
          <span className="font-semibold text-pink-500">{Number(existing.overallScore).toFixed(2)} / 10</span>
        </p>
      )}
      <button
        type="submit"
        disabled={loading}
        className="bg-pink-500 hover:bg-pink-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium transition"
      >
        {loading ? "Saving..." : saved ? "Saved ✓" : existing ? "Update Scores" : "Submit Scores"}
      </button>
    </form>
  );
}
