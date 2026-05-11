import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET() {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const contestant = await db.contestant.findUnique({
    where: { userId: session.user.id },
  });

  return NextResponse.json({ contestant });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = await req.json();
  const {
    fullName, age, gender, country, height, weight,
    bodyType, eyeColor, hairColor, bio, instagram, portfolioUrl,
  } = body;

  const existing = await db.contestant.findUnique({ where: { userId: session.user.id } });

  const data = {
    fullName, gender, country, bodyType, eyeColor, hairColor, bio,
    instagram: instagram || null,
    portfolioUrl: portfolioUrl || null,
    age: parseInt(age),
    height: parseFloat(height),
    weight: parseFloat(weight),
  };

  const contestant = existing
    ? await db.contestant.update({ where: { userId: session.user.id }, data })
    : await db.contestant.create({ data: { ...data, userId: session.user.id } });

  return NextResponse.json({ contestant });
}
