-- AlterTable
ALTER TABLE "Competition" ADD COLUMN     "bannerImage" TEXT,
ADD COLUMN     "prizePool" TEXT,
ADD COLUMN     "questions" TEXT[] DEFAULT ARRAY[]::TEXT[];

-- AlterTable
ALTER TABLE "CompetitionEntry" ADD COLUMN     "submittedAt" TIMESTAMP(3);

-- AlterTable
ALTER TABLE "Contestant" ADD COLUMN     "city" TEXT,
ADD COLUMN     "dateOfBirth" TIMESTAMP(3),
ADD COLUMN     "experience" TEXT,
ADD COLUMN     "occupation" TEXT,
ADD COLUMN     "phone" TEXT,
ADD COLUMN     "updatedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
ALTER COLUMN "age" DROP NOT NULL,
ALTER COLUMN "gender" DROP NOT NULL,
ALTER COLUMN "country" DROP NOT NULL,
ALTER COLUMN "height" DROP NOT NULL,
ALTER COLUMN "weight" DROP NOT NULL,
ALTER COLUMN "bodyType" DROP NOT NULL,
ALTER COLUMN "eyeColor" DROP NOT NULL,
ALTER COLUMN "hairColor" DROP NOT NULL,
ALTER COLUMN "bio" DROP NOT NULL;

-- CreateTable
CREATE TABLE "EntryAnswer" (
    "id" TEXT NOT NULL,
    "entryId" TEXT NOT NULL,
    "order" INTEGER NOT NULL,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "wordCount" INTEGER NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "EntryAnswer_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "EntryAnswer_entryId_order_key" ON "EntryAnswer"("entryId", "order");

-- AddForeignKey
ALTER TABLE "EntryAnswer" ADD CONSTRAINT "EntryAnswer_entryId_fkey" FOREIGN KEY ("entryId") REFERENCES "CompetitionEntry"("id") ON DELETE CASCADE ON UPDATE CASCADE;
