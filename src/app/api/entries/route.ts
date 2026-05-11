import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { isAdmin } from "@/lib/session-role";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { competitionId, contestantId } = await req.json();
  if (!competitionId || !contestantId) {
    return NextResponse.json({ error: "competitionId and contestantId are required" }, { status: 400 });
  }

  const existing = await db.competitionEntry.findUnique({
    where: { competitionId_contestantId: { competitionId, contestantId } },
  });

  if (existing) return NextResponse.json({ entry: existing });

  const entry = await db.competitionEntry.create({
    data: { competitionId, contestantId, status: "PENDING" },
  });

  return NextResponse.json({ entry }, { status: 201 });
}

export async function GET(req: NextRequest) {
  const session = await auth();
  if (!isAdmin(session)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { searchParams } = new URL(req.url);
  const competitionId = searchParams.get("competitionId");

  const entries = await db.competitionEntry.findMany({
    where: competitionId ? { competitionId } : {},
    include: { contestant: true, competition: true },
    orderBy: { createdAt: "desc" },
  });

  return NextResponse.json({ entries });
}

export async function PATCH(req: NextRequest) {
  const session = await auth();
  if (!isAdmin(session)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { entryId, status } = await req.json();
  if (!entryId || !status) {
    return NextResponse.json({ error: "entryId and status are required" }, { status: 400 });
  }
  if (!["PENDING", "APPROVED", "REJECTED"].includes(status)) {
    return NextResponse.json({ error: "Invalid status" }, { status: 400 });
  }

  const entry = await db.competitionEntry.update({
    where: { id: entryId },
    data: { status },
  });

  return NextResponse.json({ entry });
}
