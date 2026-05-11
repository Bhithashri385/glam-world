"use client";

import { useState } from "react";

export default function ShareButton({ url }: { url: string }) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    await navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      onClick={handleCopy}
      className="flex items-center gap-2 border border-gray-200 hover:border-pink-300 text-gray-600 hover:text-pink-500 px-4 py-2 rounded-lg text-sm font-medium transition"
    >
      {copied ? "✓ Link Copied!" : "Share Profile"}
    </button>
  );
}
