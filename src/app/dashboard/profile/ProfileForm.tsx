"use client";

import { useState } from "react";

const GENDERS = ["Female", "Male", "Non-binary", "Prefer not to say"];
const BODY_TYPES = ["Slim", "Athletic", "Average", "Curvy", "Plus size"];

type ImageEntry = { localUrl: string; imageId: string | null; uploading: boolean };
type ExistingImage = { id: string; imageUrl: string; imageType: "FACE" | "FULL_BODY" };
type ExistingContestant = {
  fullName?: string;
  age?: number;
  gender?: string;
  country?: string;
  height?: number;
  weight?: number;
  bodyType?: string;
  eyeColor?: string;
  hairColor?: string;
  bio?: string;
  instagram?: string | null;
  portfolioUrl?: string | null;
  profileImage?: string | null;
  images?: ExistingImage[];
} | null;

function ImageUploader({
  type,
  label,
  initial,
}: {
  type: string;
  label: string;
  initial: ImageEntry[];
}) {
  const [images, setImages] = useState<ImageEntry[]>(initial);

  async function handleUpload(e: React.ChangeEvent<HTMLInputElement>) {
    const files = e.target.files;
    if (!files?.length) return;

    if (type === "profile" && images.length > 0) {
      const existing = images[0];
      if (existing.imageId || existing.localUrl) {
        await fetch("/api/upload", {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ imageId: existing.imageId, type }),
        });
      }
      setImages([]);
    }

    for (const file of Array.from(files)) {
      const localUrl = URL.createObjectURL(file);
      setImages((prev) => [...prev, { localUrl, imageId: null, uploading: true }]);

      const formData = new FormData();
      formData.append("file", file);
      formData.append("type", type);
      const res = await fetch("/api/upload", { method: "POST", body: formData });
      const data = await res.json();

      if (!res.ok) {
        setImages((prev) => prev.filter((img) => img.localUrl !== localUrl));
        alert(data.error || "Upload failed");
        continue;
      }

      setImages((prev) =>
        prev.map((img) =>
          img.localUrl === localUrl
            ? { localUrl: data.url ?? localUrl, imageId: data.imageId ?? null, uploading: false }
            : img
        )
      );
    }

    e.target.value = "";
  }

  async function handleRemove(img: ImageEntry) {
    await fetch("/api/upload", {
      method: "DELETE",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ imageId: img.imageId, type }),
    });
    setImages((prev) => prev.filter((i) => i.localUrl !== img.localUrl));
  }

  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">{label}</label>
      <input
        type="file"
        accept="image/*"
        multiple={type !== "profile"}
        onChange={handleUpload}
        className="block w-full text-sm text-gray-600 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:bg-pink-50 file:text-pink-600 hover:file:bg-pink-100"
      />
      {images.length > 0 && (
        <div className="flex flex-wrap gap-3 mt-3">
          {images.map((img, i) => (
            <div key={i} className="relative">
              <img src={img.localUrl} alt="upload" className="w-20 h-20 object-cover rounded-lg border" />
              {img.uploading && (
                <div className="absolute inset-0 bg-white/70 rounded-lg flex items-center justify-center">
                  <span className="text-xs text-gray-500">...</span>
                </div>
              )}
              <button
                type="button"
                onClick={() => handleRemove(img)}
                className="absolute -top-1.5 -right-1.5 bg-red-500 hover:bg-red-600 text-white rounded-full w-5 h-5 text-xs font-bold flex items-center justify-center shadow"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default function ProfileForm({ existing }: { existing: ExistingContestant }) {
  const [form, setForm] = useState({
    fullName: existing?.fullName || "",
    age: existing?.age || "",
    gender: existing?.gender || "",
    country: existing?.country || "",
    height: existing?.height || "",
    weight: existing?.weight || "",
    bodyType: existing?.bodyType || "",
    eyeColor: existing?.eyeColor || "",
    hairColor: existing?.hairColor || "",
    bio: existing?.bio || "",
    instagram: existing?.instagram || "",
    portfolioUrl: existing?.portfolioUrl || "",
  });

  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState("");

  const initialProfile: ImageEntry[] = existing?.profileImage
    ? [{ localUrl: existing.profileImage, imageId: null, uploading: false }]
    : [];
  const initialFace: ImageEntry[] =
    existing?.images?.filter((i) => i.imageType === "FACE").map((i) => ({
      localUrl: i.imageUrl,
      imageId: i.id,
      uploading: false,
    })) ?? [];
  const initialFullBody: ImageEntry[] =
    existing?.images?.filter((i) => i.imageType === "FULL_BODY").map((i) => ({
      localUrl: i.imageUrl,
      imageId: i.id,
      uploading: false,
    })) ?? [];

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  async function handleSubmit(e: React.SyntheticEvent) {
    e.preventDefault();
    setSaving(true);
    setMessage("");

    const res = await fetch("/api/contestants", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    setSaving(false);
    if (res.ok) {
      setMessage("Profile saved successfully!");
    } else {
      setMessage("Failed to save. Please try again.");
    }
  }

  const inputClass = "w-full border border-gray-300 rounded-lg px-4 py-2 text-sm text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-400";
  const labelClass = "block text-sm font-medium text-gray-700 mb-1";

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-sm p-6 space-y-5">

      {/* Full Name */}
      <div>
        <label className={labelClass}>Full Name *</label>
        <input name="fullName" value={form.fullName} onChange={handleChange} required placeholder="Your full name" className={inputClass} />
      </div>

      {/* Age + Gender */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Age *</label>
          <input name="age" type="number" min={1} max={100} value={form.age} onChange={handleChange} required placeholder="e.g. 22" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Gender *</label>
          <select name="gender" value={form.gender} onChange={handleChange} required className={inputClass}>
            <option value="">Select gender</option>
            {GENDERS.map((g) => <option key={g} value={g}>{g}</option>)}
          </select>
        </div>
      </div>

      {/* Country */}
      <div>
        <label className={labelClass}>Country *</label>
        <input name="country" value={form.country} onChange={handleChange} required placeholder="e.g. India" className={inputClass} />
      </div>

      {/* Height + Weight */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Height (cm) *</label>
          <input name="height" type="number" step="0.1" value={form.height} onChange={handleChange} required placeholder="e.g. 165.5" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Weight (kg) *</label>
          <input name="weight" type="number" step="0.1" value={form.weight} onChange={handleChange} required placeholder="e.g. 55.0" className={inputClass} />
        </div>
      </div>

      {/* Body Type */}
      <div>
        <label className={labelClass}>Body Type *</label>
        <select name="bodyType" value={form.bodyType} onChange={handleChange} required className={inputClass}>
          <option value="">Select body type</option>
          {BODY_TYPES.map((b) => <option key={b} value={b}>{b}</option>)}
        </select>
      </div>

      {/* Eye Color + Hair Color */}
      <div className="grid grid-cols-2 gap-4">
        <div>
          <label className={labelClass}>Eye Color *</label>
          <input name="eyeColor" value={form.eyeColor} onChange={handleChange} required placeholder="e.g. Brown" className={inputClass} />
        </div>
        <div>
          <label className={labelClass}>Hair Color *</label>
          <input name="hairColor" value={form.hairColor} onChange={handleChange} required placeholder="e.g. Black" className={inputClass} />
        </div>
      </div>

      {/* Bio */}
      <div>
        <label className={labelClass}>Bio *</label>
        <textarea name="bio" value={form.bio} onChange={handleChange} required rows={4} placeholder="Tell us about yourself..." className={inputClass} />
      </div>

      {/* Instagram */}
      <div>
        <label className={labelClass}>Instagram Handle</label>
        <input name="instagram" value={form.instagram} onChange={handleChange} placeholder="@yourusername" className={inputClass} />
      </div>

      {/* Portfolio */}
      <div>
        <label className={labelClass}>Portfolio Link</label>
        <input name="portfolioUrl" value={form.portfolioUrl} onChange={handleChange} placeholder="https://yourportfolio.com" className={inputClass} />
      </div>

      <div className="border-t pt-5 space-y-4">
        <p className="text-sm font-semibold text-gray-700">Images</p>
        {!existing && (
          <p className="text-xs text-gray-500">Save your profile first to enable image uploads.</p>
        )}
        <ImageUploader type="profile" label="Profile Image" initial={initialProfile} />
        <ImageUploader type="face" label="Face Images (multiple allowed)" initial={initialFace} />
        <ImageUploader type="full_body" label="Full Body Images (multiple allowed)" initial={initialFullBody} />
      </div>

      {message && (
        <p className={`text-sm text-center ${message.includes("success") ? "text-green-600" : "text-red-500"}`}>
          {message}
        </p>
      )}

      <button
        type="submit"
        disabled={saving}
        className="w-full bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-lg text-sm font-medium transition"
      >
        {saving ? "Saving..." : existing ? "Update Profile" : "Save Profile"}
      </button>
    </form>
  );
}
