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
      console.log("error", error);
      throw new Error("Unable to create tweet");
    }
  }

  async getAllUserTweet(allUserTweet: PageSkipValue) {
    try {
      const tweetsData = await prismaClient.tweet.findMany({
        where: { autherId: allUserTweet.userID },
        skip: allUserTweet.skipValue,
        take: 5,
        orderBy: { createdAt: "desc" },
      });

      if (tweetsData.length === 0) {
        return [];
      }

      return tweetsData;
    } catch (error) {
      throw new Error("Something Went Wrong");
    }
  }

  async getAllTweetAll(skipValue: number) {
    try {
      const tweetsData = await prismaClient.tweet.findMany({
        where: {},
        skip: skipValue,
        take: 10,
        orderBy: { autherId: "desc" },
      });
      return tweetsData;
    } catch (error) {
      console.error("Error fetching tweets:", error);
      throw new Error("Error fetching tweets");
    }
  }

  async getAuthor(userId: string) {
    const tweetAuthor = await prismaClient.user.findUnique({
      where: { id: userId },
    });
    return tweetAuthor;
  }
}

export default Tweet;
