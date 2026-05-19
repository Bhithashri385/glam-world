import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";
import ApplyWizard from "./ApplyWizard";

export default async function ApplyPage({
  searchParams,
}: {
  searchParams: Promise<{ competition?: string }>;
}) {
  const session = await auth();
  if (!session?.user?.id) redirect("/login?callbackUrl=/competition/apply");

  const params = await searchParams;
  const preselectedId = params.competition;

  const [contestant, competitions] = await Promise.all([
    db.contestant.findUnique({
      where: { userId: session.user.id },
      include: { images: true },
    }),
    db.competition.findMany({
      where: { status: { in: ["UPCOMING", "ACTIVE"] } },
      orderBy: { startDate: "asc" },
      select: {
        id: true,
        title: true,
        description: true,
        endDate: true,
        questions: true,
      },
    }),
  ]);

  return (
    <ApplyWizard
      contestant={contestant ? JSON.parse(JSON.stringify(contestant)) : null}
      competitions={competitions.map((c) => ({
        ...c,
        endDate: c.endDate.toISOString(),
      }))}
      preselectedCompetitionId={preselectedId}
      userEmail={session.user.email ?? ""}
      userName={session.user.name ?? ""}
    />
  );
}
