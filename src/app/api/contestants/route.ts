import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

type ContestantPatch = {
  fullName?: string;
  dateOfBirth?: string | null;
  age?: number | string | null;
  gender?: string | null;
  country?: string | null;
  city?: string | null;
  phone?: string | null;
  occupation?: string | null;
  experience?: string | null;
  height?: number | string | null;
  weight?: number | string | null;
  bodyType?: string | null;
  eyeColor?: string | null;
  hairColor?: string | null;
  bio?: string | null;
  instagram?: string | null;
  portfolioUrl?: string | null;
  profileImage?: string | null;
};

export async function GET() {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const contestant = await db.contestant.findUnique({
    where: { userId: session.user.id },
  });

  return NextResponse.json({ contestant });
}

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id)
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const body = (await req.json()) as ContestantPatch;

  const data: Record<string, unknown> = {};
  if (body.fullName !== undefined) data.fullName = body.fullName;
  if (body.dateOfBirth !== undefined)
    data.dateOfBirth = body.dateOfBirth ? new Date(body.dateOfBirth) : null;
  if (body.age !== undefined && body.age !== null && body.age !== "")
    data.age = typeof body.age === "string" ? parseInt(body.age) : body.age;
  if (body.gender !== undefined) data.gender = body.gender;
  if (body.country !== undefined) data.country = body.country;
  if (body.city !== undefined) data.city = body.city;
  if (body.phone !== undefined) data.phone = body.phone;
  if (body.occupation !== undefined) data.occupation = body.occupation;
  if (body.experience !== undefined) data.experience = body.experience;
  if (body.height !== undefined && body.height !== null && body.height !== "")
    data.height =
      typeof body.height === "string" ? parseFloat(body.height) : body.height;
  if (body.weight !== undefined && body.weight !== null && body.weight !== "")
    data.weight =
      typeof body.weight === "string" ? parseFloat(body.weight) : body.weight;
  if (body.bodyType !== undefined) data.bodyType = body.bodyType;
  if (body.eyeColor !== undefined) data.eyeColor = body.eyeColor;
  if (body.hairColor !== undefined) data.hairColor = body.hairColor;
  if (body.bio !== undefined) data.bio = body.bio;
  if (body.instagram !== undefined) data.instagram = body.instagram;
  if (body.portfolioUrl !== undefined) data.portfolioUrl = body.portfolioUrl;
  if (body.profileImage !== undefined) data.profileImage = body.profileImage;

  const existing = await db.contestant.findUnique({
    where: { userId: session.user.id },
  });

  const contestant = existing
    ? await db.contestant.update({
        where: { userId: session.user.id },
        data,
      })
    : await db.contestant.create({
        data: {
          ...data,
          fullName: (body.fullName as string) || session.user.name || "",
          userId: session.user.id,
        },
      });

  return NextResponse.json({ contestant });
}
