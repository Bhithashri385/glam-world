import AWS from "aws-sdk";

const s3 = new AWS.S3({
  endpoint: process.env.DO_SPACES_ENDPOINT,
  accessKeyId: process.env.DO_SPACES_ACCESS_KEY,
  secretAccessKey: process.env.DO_SPACES_SECRET_KEY,
  region: process.env.DO_SPACES_REGION || "nyc3",
});

const BUCKET = process.env.DO_SPACES_BUCKET || "glamworld";

export async function uploadFile(
  buffer: Buffer,
  fileName: string,
  folder: string
): Promise<string> {
  const key = `${folder}/${fileName}`;
  
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

export async function deleteFile(fileUrl: string): Promise<void> {
  try {
    // Extract key from URL (e.g., from "https://bucket.nyc3.digitaloceanspaces.com/folder/file")
    const url = new URL(fileUrl);
    const key = url.pathname.substring(1); // Remove leading slash
    
    await s3.deleteObject({
      Bucket: BUCKET,
      Key: key,
    }).promise();
  } catch (error) {
    console.error("Error deleting file from DigitalOcean Spaces:", error);
  }
}
