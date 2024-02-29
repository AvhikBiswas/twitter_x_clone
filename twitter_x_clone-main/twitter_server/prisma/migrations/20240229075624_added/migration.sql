-- CreateTable
CREATE TABLE "tweet" (
    "id" TEXT NOT NULL,
    "imageURL" TEXT,
    "content" TEXT NOT NULL,
    "hashTag" TEXT,
    "autherId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "tweet_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "tweet" ADD CONSTRAINT "tweet_autherId_fkey" FOREIGN KEY ("autherId") REFERENCES "user"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
