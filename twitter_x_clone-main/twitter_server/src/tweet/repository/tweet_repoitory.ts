import { PrismaClient } from "@prisma/client";
import { PageSkipValue, tweetPayload } from "../../types/tweet";

class Tweet {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createTweet(payload: tweetPayload) {
    console.log("payload is -->", payload);
    try {
      const data = await this.prisma.tweet.create({
        data: {
          imageURL: payload?.imageURL,
          content: payload.content,
          hashTag: payload?.hashTag,
          autherId: payload.userID,
        },
      });
      console.log("Data", data);
      return data;
    } catch (error) {
      console.error("Error creating tweet:", error);
      throw new Error("Unable to create tweet");
    }
  }

  async getAllUserTweet(allUserTweet: PageSkipValue) {
    try {
      const TweetsData = await this.prisma.tweet.findMany({
        where: { autherId: allUserTweet.userID },
        skip: allUserTweet.skipValue,
        take: 10,
        orderBy: { createdAt: "desc" },
      });
      return TweetsData;
    } catch (error) {
      throw new Error("Somthing Went Wrong");
    }
  }

  async getAuthor(userId: string) {
    const TweetAuthor = await this.prisma.user.findUnique({
      where: { id: userId },
    });
    return TweetAuthor;
  }
}
export default Tweet;
