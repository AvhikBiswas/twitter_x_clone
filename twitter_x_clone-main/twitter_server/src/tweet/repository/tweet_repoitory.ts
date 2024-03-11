import { prismaClient } from "../../client/db";
import { PageSkipValue, tweetPayload } from "../../types/tweet";

class Tweet {

  async createTweet(payload:tweetPayload) {
    console.log('payload_------------------>', payload);
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
      console.log('error', error);
      throw new Error("Unable to create tweet");

    }
  }

  async getAllUserTweet(allUserTweet: PageSkipValue) {
    try {
      const tweetsData = await prismaClient.tweet.findMany({
        where: { autherId: allUserTweet.userID },
        skip: allUserTweet.skipValue,
        take: 10,
        orderBy: { createdAt: "desc" },
      });
  
      if (tweetsData.length === 0) {
        return []; 
      }
  
      return tweetsData;
    } catch (error) {
      console.log('error------------------->', error);
      // throw new Error("Something Went Wrong");
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
