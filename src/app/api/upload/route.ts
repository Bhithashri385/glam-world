import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import cloudinary from "@/lib/cloudinary";
import { db } from "@/lib/db";

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File;
  const type = formData.get("type") as string;

  if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const contestant = await db.contestant.findUnique({ where: { userId: session.user.id } });
  if (!contestant) return NextResponse.json({ error: "Profile not found. Save your profile first." }, { status: 404 });

  const result = await new Promise<any>((resolve, reject) => {
    cloudinary.uploader.upload_stream(
      { folder: `glamworld/${type}`, resource_type: "image" },
      (error, result) => {
        if (error) reject(error);
        else resolve(result);
      }
    ).end(buffer);
  });

  const url = result.secure_url;

  if (type === "profile") {
    await db.contestant.update({
      where: { userId: session.user.id },
      data: { profileImage: url },
    });
    return NextResponse.json({ url, imageId: null });
  } else {
    const imageType = type === "face" ? "FACE" : "FULL_BODY";
    const image = await db.contestantImage.create({
      data: { contestantId: contestant.id, imageUrl: url, imageType },
    });
    return NextResponse.json({ url, imageId: image.id });
  }
}

export async function DELETE(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const { imageId, type } = await req.json();

  if (type === "profile") {
    await db.contestant.update({
      where: { userId: session.user.id },
      data: { profileImage: null },
    });
  } else {
    const contestant = await db.contestant.findUnique({ where: { userId: session.user.id } });
    if (!contestant) return NextResponse.json({ error: "Not found" }, { status: 404 });
    await db.contestantImage.deleteMany({
      where: { id: imageId, contestantId: contestant.id },
    });
  }

  return NextResponse.json({ success: true });
}
