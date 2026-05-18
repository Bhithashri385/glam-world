import AWS from "aws-sdk";
import fs from "fs/promises";
import path from "path";

const accessKey = process.env.DO_SPACES_ACCESS_KEY;
const secretKey = process.env.DO_SPACES_SECRET_KEY;

const isSpacesConfigured =
  !!accessKey &&
  !!secretKey &&
  !accessKey.includes("YOUR_") &&
  !secretKey.includes("YOUR_") &&
  !accessKey.includes("replace-with");

const BUCKET = process.env.DO_SPACES_BUCKET || "glamworld";

const s3 = isSpacesConfigured
  ? new AWS.S3({
      endpoint: process.env.DO_SPACES_ENDPOINT,
      accessKeyId: accessKey,
      secretAccessKey: secretKey,
      region: process.env.DO_SPACES_REGION || "nyc3",
    })
  : null;

export async function uploadFile(
  buffer: Buffer,
  fileName: string,
  folder: string
): Promise<string> {
  const safeName = fileName.replace(/[^a-zA-Z0-9._-]/g, "_");

  if (s3) {
    const key = `${folder}/${safeName}`;
    const params: AWS.S3.PutObjectRequest = {
      Bucket: BUCKET,
      Key: key,
      Body: buffer,
      ACL: "public-read",
      ContentType: "image/jpeg",
    };
    const result = await s3.upload(params).promise();
    return result.Location;
  }

  const uploadDir = path.join(process.cwd(), "public", "uploads", folder);
  await fs.mkdir(uploadDir, { recursive: true });
  const filePath = path.join(uploadDir, safeName);
  await fs.writeFile(filePath, buffer);
  return `/uploads/${folder}/${safeName}`;
}

export async function deleteFile(fileUrl: string): Promise<void> {
  try {
    if (fileUrl.startsWith("/uploads/")) {
      const filePath = path.join(process.cwd(), "public", fileUrl);
      await fs.unlink(filePath).catch(() => {});
      return;
    }

    if (!s3) return;

    const url = new URL(fileUrl);
    const key = url.pathname.substring(1);
    await s3
      .deleteObject({
        Bucket: BUCKET,
        Key: key,
      })
      .promise();
  } catch (error) {
    console.error("Error deleting file:", error);
  }
}
