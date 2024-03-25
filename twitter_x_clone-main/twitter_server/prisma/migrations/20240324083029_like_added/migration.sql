-- CreateTable
CREATE TABLE "Like" (
    "userId" TEXT NOT NULL,
    "tweetAuthorId" TEXT NOT NULL,

    CONSTRAINT "Like_pkey" PRIMARY KEY ("tweetAuthorId")
);

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_userId_fkey" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Like" ADD CONSTRAINT "Like_tweetAuthorId_fkey" FOREIGN KEY ("tweetAuthorId") REFERENCES "tweet"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
