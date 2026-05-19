import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

const MAX_WORDS = 140;

function wordCount(text: string): number {
  return text.trim().split(/\s+/).filter(Boolean).length;
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { competitionId, answers } = (await req.json()) as {
    competitionId: string;
    answers: { question: string; answer: string }[];
  };

  if (!competitionId)
    return NextResponse.json(
      { error: "competitionId is required" },
      { status: 400 },
    );

  if (!Array.isArray(answers) || answers.length === 0)
    return NextResponse.json(
      { error: "answers array is required" },
      { status: 400 },
    );

  for (const [i, a] of answers.entries()) {
    if (!a.question || !a.answer)
      return NextResponse.json(
        { error: `Answer ${i + 1} is incomplete` },
        { status: 400 },
      );
    if (wordCount(a.answer) > MAX_WORDS)
      return NextResponse.json(
        {
          error: `Answer ${i + 1} exceeds ${MAX_WORDS} words (got ${wordCount(a.answer)})`,
        },
        { status: 400 },
      );
  }

  const contestant = await db.contestant.findUnique({
    where: { userId: session.user.id },
  });
  if (!contestant)
    return NextResponse.json(
      { error: "Please complete your profile before applying" },
      { status: 400 },
    );

  const competition = await db.competition.findUnique({
    where: { id: competitionId },
  });
  if (!competition)
    return NextResponse.json(
      { error: "Competition not found" },
      { status: 404 },
    );

  const entry = await db.competitionEntry.upsert({
    where: {
      competitionId_contestantId: {
        competitionId,
        contestantId: contestant.id,
      },
    },
    update: { submittedAt: new Date(), status: "PENDING" },
    create: {
      competitionId,
      contestantId: contestant.id,
      status: "PENDING",
      submittedAt: new Date(),
    },
  });

  await db.entryAnswer.deleteMany({ where: { entryId: entry.id } });
  await db.entryAnswer.createMany({
    data: answers.map((a, idx) => ({
      entryId: entry.id,
      order: idx + 1,
      question: a.question,
      answer: a.answer,
      wordCount: wordCount(a.answer),
    })),
  });

  return NextResponse.json({ entry }, { status: 201 });
}
