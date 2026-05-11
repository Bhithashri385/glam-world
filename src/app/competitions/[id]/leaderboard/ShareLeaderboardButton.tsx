"use client";

import { useState } from "react";

export default function ShareLeaderboardButton() {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(window.location.href);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="bg-gradient-to-r from-pink-500 to-purple-500 hover:from-pink-600 hover:to-purple-600 text-white px-6 py-2 rounded-lg font-medium transition"
    >
      {copied ? "✓ Link Copied!" : "📋 Copy Link"}
    </button>
  );
}
