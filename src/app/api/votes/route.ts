import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { competitionId, contestantId, entryId } = await req.json();

  const competition = await db.competition.findUnique({ where: { id: competitionId } });
  if (!competition) return NextResponse.json({ error: "Not found" }, { status: 404 });
  if (competition.status !== "ACTIVE") return NextResponse.json({ error: "Competition not active" }, { status: 400 });
  if (competition.competitionType !== "PUBLIC_VOTING") return NextResponse.json({ error: "Not a public voting competition" }, { status: 400 });

  const entry = await db.competitionEntry.findUnique({ where: { id: entryId } });
  if (!entry || entry.status !== "APPROVED") return NextResponse.json({ error: "Entry not approved" }, { status: 400 });

  const existingVote = await db.vote.findUnique({
    where: { competitionId_voterId: { competitionId, voterId: session.user.id! } },
  });
  if (existingVote) return NextResponse.json({ error: "Already voted" }, { status: 409 });

  const vote = await db.$transaction(async (tx) => {
    const v = await tx.vote.create({
      data: { competitionId, contestantId, voterId: session.user.id! },
    });
    await tx.competitionEntry.update({
      where: { id: entryId },
      data: { voteCount: { increment: 1 } },
    });
    return v;
  });

  return NextResponse.json({ vote }, { status: 201 });
}
