"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function CreateCompetitionPage() {
  const router = useRouter();
  const [form, setForm] = useState({
    title: "",
    description: "",
    competitionType: "JURY",
    startDate: "",
    endDate: "",
  });
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState("");

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSaving(true);
    setError("");

    const res = await fetch("/api/competitions", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    setSaving(false);

    if (!res.ok) {
      setError(data.error || "Failed to create competition.");
      return;
    }

    router.push("/admin");
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <a href="/admin" className="text-sm text-gray-500 hover:text-pink-500">
            ← Back to Admin
          </a>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">Create Competition</h1>
        <p className="text-gray-500 text-sm mb-8">Fill in the competition details</p>

        <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 space-y-5">
          <div>
            <label className={labelClass}>Competition Title *</label>
            <input name="title" value={form.title} onChange={handleChange} required placeholder="e.g. GlamWorld Summer 2026" className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Description *</label>
            <textarea name="description" value={form.description} onChange={handleChange} required rows={4} placeholder="Describe the competition..." className={inputClass} />
          </div>

          <div>
            <label className={labelClass}>Competition Type *</label>
            <select name="competitionType" value={form.competitionType} onChange={handleChange} className={inputClass}>
              <option value="JURY">Jury Based</option>
              <option value="PUBLIC_VOTING">Public Voting</option>
            </select>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className={labelClass}>Start Date *</label>
              <input type="date" name="startDate" value={form.startDate} onChange={handleChange} required className={inputClass} />
            </div>
            <div>
              <label className={labelClass}>End Date *</label>
              <input type="date" name="endDate" value={form.endDate} onChange={handleChange} required className={inputClass} />
            </div>
          </div>

          {error && <p className="text-red-500 text-sm text-center">{error}</p>}

          <button
            type="submit"
            disabled={saving}
            className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg text-sm font-medium transition"
          >
            {saving ? "Creating..." : "Create Competition"}
          </button>
        </form>
      </div>
    </div>
  );
}
