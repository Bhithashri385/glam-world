import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";
import { isAdmin } from "@/lib/session-role";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!isAdmin(session)) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { entryId, presentationScore, confidenceScore, stylingScore, profileScore, professionalismScore } = await req.json();
  if (!entryId) return NextResponse.json({ error: "entryId is required" }, { status: 400 });

  const values = [presentationScore, confidenceScore, stylingScore, profileScore, professionalismScore];
  const areValidScores = values.every((v) => typeof v === "number" && Number.isFinite(v) && v >= 0 && v <= 10);
  if (!areValidScores) {
    return NextResponse.json({ error: "Scores must be numbers between 0 and 10" }, { status: 400 });
  }

  const overall = (presentationScore + confidenceScore + stylingScore + profileScore + professionalismScore) / 5;

  const scoreResult = await db.scoreResult.upsert({
    where: { entryId },
    create: { entryId, presentationScore, confidenceScore, stylingScore, profileScore, professionalismScore, overallScore: overall },
    update: { presentationScore, confidenceScore, stylingScore, profileScore, professionalismScore, overallScore: overall },
  });

  await db.competitionEntry.update({
    where: { id: entryId },
    data: { overallScore: overall },
  });

  return NextResponse.json({ scoreResult });
}
