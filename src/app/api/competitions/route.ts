import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  const competitions = await db.competition.findMany({
    orderBy: { createdAt: "desc" },
  });
  return NextResponse.json({ competitions });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { title, description, competitionType, startDate, endDate } = await req.json();

  if (!title || !description || !competitionType || !startDate || !endDate) {
    return NextResponse.json({ error: "All fields are required." }, { status: 400 });
  }

  const competition = await db.competition.create({
    data: {
      title,
      description,
      competitionType,
      startDate: new Date(startDate),
      endDate: new Date(endDate),
      status: "UPCOMING",
    },
  });

  return NextResponse.json({ competition }, { status: 201 });
}
