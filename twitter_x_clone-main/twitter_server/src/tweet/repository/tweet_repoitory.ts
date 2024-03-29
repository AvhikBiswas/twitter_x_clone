import { Redis } from "ioredis";
import { prismaClient } from "../../client/db";
import { PageSkipValue, tweetPayload } from "../../types/tweet";

class Tweet {
  Redisclient = new Redis(process.env.REDIS_URL!);

  async createTweet(payload: tweetPayload) {
    try {
      await this.Redisclient.del(`FIND_MANY_USER:${payload.userID}`);
      await this.Redisclient.del(`ALLUSER_TWEET:${payload.userID}`);
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
    } finally {
      await this.Redisclient.quit();
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
    try {
      const cashedData = await this.Redisclient.get(`GET_AUTHOR:${userId}`);
      if (cashedData) {
        console.log("getauthor from redis");
        return JSON.parse(cashedData);
      }
      const tweetAuthor = await prismaClient.user.findUnique({
        where: { id: userId },
      });

      await this.Redisclient.set(
        `GET_AUTHOR:${userId}`,
        JSON.stringify(tweetAuthor)
      );
      return tweetAuthor;
    } catch (error) {
      return error;
    } finally {
      await this.Redisclient.quit();
    }
  }

  async LikeTweet(tweetId: string, userId: string) {
    try {
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
      return true;
    } catch (error) {
      return false;
    }
  }
}

export default Tweet;
