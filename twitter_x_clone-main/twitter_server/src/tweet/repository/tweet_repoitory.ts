import { prismaClient } from "../../client/db";
import { PageSkipValue, tweetPayload } from "../../types/tweet";

class Tweet {
  async createTweet(payload: tweetPayload) {
    try {
      const data = await prismaClient.tweet.create({
        data: {
          imageURL: payload?.imageURL,
          content: payload?.content,
          hashTag: payload?.hashTag,
          autherId: payload?.userID,
        },
      });
      return data;
    } catch (error) {
      return error;
    }
  }

  async getAllUserTweet(allUserTweet: PageSkipValue) {
    try {
      const tweetsData = await prismaClient.tweet.findMany({
        where: { autherId: allUserTweet.userID },
        skip: allUserTweet.skipValue,
        take: 6,
        orderBy: { createdAt: "desc" },
      });

      if (tweetsData.length === 0) {
        return [];
      }

      return tweetsData;
    } catch (error) {
      return error;
    }
  }

  async getAllTweetAll(skipValue: number) {
    try {
      const tweetsData = await prismaClient.tweet.findMany({
        where: {},
        skip: skipValue,
        take: 6,
        orderBy: { createdAt: "desc" },
      });
      return tweetsData;
    } catch (error) {
      return error;
    }
  }

  async getAuthor(userId: string) {
    const tweetAuthor = await prismaClient.user.findUnique({
      where: { id: userId },
    });
    return tweetAuthor;
  }

  async LikeTweet(tweetId: string, userId: string) {
    try {
      console.log("im here in repository ", tweetId, userId);
      const existingLike = await prismaClient.like.findUnique({
        where: { tweetId_userId: { tweetId, userId } },
      });

      if (existingLike) {
        const data = await prismaClient.like.delete({
          where: {
            tweetId_userId: {
              tweetId,
              userId,
            },
          },
        });

        return true;
      }

      const data = await prismaClient.like.create({
        data: {
          tweetId,
          userId,
        },
      });
      console.log("data is created ", data);
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default Tweet;
