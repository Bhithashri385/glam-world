import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { db } from "@/lib/db";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const competition = await db.competition.findUnique({
    where: { id },
    include: {
      entries: {
        where: { status: "APPROVED" },
        include: {
          contestant: true,
        },
        orderBy: { voteCount: "desc" },
      },
    },
  });

  if (!competition) return NextResponse.json({ error: "Not found" }, { status: 404 });

  return NextResponse.json({ competition });
}

export async function PATCH(req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const session = await auth();
  if (!session || (session.user as any).role !== "ADMIN") {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  const { id } = await params;
  const { status } = await req.json();

  const competition = await db.competition.update({
    where: { id },
    data: { status },
  });

  return NextResponse.json({ competition });
}
