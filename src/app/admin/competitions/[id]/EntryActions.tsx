"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function EntryActions({ entryId }: { entryId: string }) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  async function updateStatus(status: "APPROVED" | "REJECTED") {
    setLoading(true);
    await fetch("/api/entries", {
      method: "PATCH",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ entryId, status }),
    });
    setLoading(false);
    router.refresh();
  }

  return (
    <div className="flex gap-2">
      <button
        onClick={() => updateStatus("APPROVED")}
        disabled={loading}
        className="bg-green-500 hover:bg-green-600 text-white px-4 py-1.5 rounded-lg text-xs font-medium transition"
      >
        Approve
      </button>
      <button
        onClick={() => updateStatus("REJECTED")}
        disabled={loading}
        className="bg-red-400 hover:bg-red-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium transition"
      >
        Reject
      </button>
    </div>
  );
}
