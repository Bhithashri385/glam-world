import { auth } from "@/lib/auth";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import ProfileForm from "./ProfileForm";

export default async function ProfilePage() {
  const session = await auth();
  if (!session) redirect("/login");

  const raw = session.user?.id
    ? await db.contestant.findUnique({
        where: { userId: session.user.id },
        include: { images: true },
      })
    : null;

  const contestant = raw
    ? { ...raw, height: Number(raw.height), weight: Number(raw.weight) }
    : null;

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-2xl mx-auto">
        <div className="mb-6">
          <a href="/dashboard" className="text-sm text-gray-500 hover:text-pink-500">
            ← Back to Dashboard
          </a>
        </div>
        <h1 className="text-2xl font-bold text-gray-900 mb-1">My Profile</h1>
        <p className="text-gray-500 text-sm mb-8">Fill in your contestant details</p>
        <ProfileForm existing={contestant} />
      </div>
    </div>
  );
}
