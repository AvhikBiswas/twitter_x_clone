-- CreateTable
CREATE TABLE "follow" (
    "followingID" TEXT NOT NULL,
    "follwerID" TEXT NOT NULL,

    CONSTRAINT "follow_pkey" PRIMARY KEY ("followingID","follwerID")
);

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_followingID_fkey" FOREIGN KEY ("followingID") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "follow" ADD CONSTRAINT "follow_follwerID_fkey" FOREIGN KEY ("follwerID") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
