import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { entryId, presentationScore, confidenceScore, stylingScore, profileScore, professionalismScore } = await req.json();

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
