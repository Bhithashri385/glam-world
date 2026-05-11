import { NextRequest, NextResponse } from "next/server";
import { auth } from "@/lib/auth";
import { uploadFile, deleteFile } from "@/lib/do-spaces";
import { db } from "@/lib/db";

const ALLOWED_UPLOAD_TYPES = new Set(["profile", "face", "full_body"]);
const ALLOWED_IMAGE_MIME_TYPES = new Set(["image/jpeg", "image/png", "image/webp"]);
const MAX_UPLOAD_SIZE_BYTES = 5 * 1024 * 1024;

export async function POST(req: NextRequest) {
  const session = await auth();
  if (!session?.user?.id) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });

  const formData = await req.formData();
  const file = formData.get("file") as File;
  const type = formData.get("type") as string;

  if (!file) return NextResponse.json({ error: "No file provided" }, { status: 400 });
  if (!ALLOWED_UPLOAD_TYPES.has(type)) {
    return NextResponse.json({ error: "Invalid upload type" }, { status: 400 });
  }
  if (!ALLOWED_IMAGE_MIME_TYPES.has(file.type)) {
    return NextResponse.json({ error: "Only JPEG, PNG, and WEBP are allowed" }, { status: 400 });
  }
  if (file.size > MAX_UPLOAD_SIZE_BYTES) {
    return NextResponse.json({ error: "File size exceeds 5MB limit" }, { status: 400 });
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  const contestant = await db.contestant.findUnique({ where: { userId: session.user.id } });
  if (!contestant) return NextResponse.json({ error: "Profile not found. Save your profile first." }, { status: 404 });

  const fileName = `${Date.now()}-${file.name}`;
  const folder = `glamworld/${type}`;
  
  const url = await uploadFile(buffer, fileName, folder);

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
  if (!ALLOWED_UPLOAD_TYPES.has(type)) {
    return NextResponse.json({ error: "Invalid upload type" }, { status: 400 });
  }

  if (type === "profile") {
    const contestant = await db.contestant.findUnique({ where: { userId: session.user.id } });
    if (contestant?.profileImage) {
      await deleteFile(contestant.profileImage);
    }
    await db.contestant.update({
      where: { userId: session.user.id },
      data: { profileImage: null },
    });
  } else {
    const contestant = await db.contestant.findUnique({ where: { userId: session.user.id } });
    if (!contestant) return NextResponse.json({ error: "Not found" }, { status: 404 });
    
    const image = await db.contestantImage.findUnique({ where: { id: imageId } });
    if (image?.imageUrl) {
      await deleteFile(image.imageUrl);
    }
    
    await db.contestantImage.deleteMany({
      where: { id: imageId, contestantId: contestant.id },
    });
  }

  return NextResponse.json({ success: true });
}
