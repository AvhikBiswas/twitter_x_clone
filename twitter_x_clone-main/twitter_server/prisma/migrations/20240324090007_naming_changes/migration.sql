/*
  Warnings:

  - The primary key for the `Like` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `tweetAuthorId` on the `Like` table. All the data in the column will be lost.
  - Added the required column `tweetId` to the `Like` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Like" DROP CONSTRAINT "Like_tweetAuthorId_fkey";

-- AlterTable
ALTER TABLE "Like" DROP CONSTRAINT "Like_pkey",
DROP COLUMN "tweetAuthorId",
ADD COLUMN     "tweetId" TEXT NOT NULL,
ADD CONSTRAINT "Like_pkey" PRIMARY KEY ("tweetId", "userId");

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_tweetId_fkey" FOREIGN KEY ("tweetId") REFERENCES "tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
