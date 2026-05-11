import { NextRequest, NextResponse } from "next/server";
import { db } from "@/lib/db";

export async function GET(_req: NextRequest, { params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const contestant = await db.contestant.findUnique({
    where: { id },
    include: {
      images: true,
      entries: {
        include: { competition: true, scoreResult: true },
        orderBy: { createdAt: "desc" },
      },
    },
  });

  if (!contestant) {
    return NextResponse.json({ error: "Contestant not found" }, { status: 404 });
  }

  return NextResponse.json({ contestant });
}
