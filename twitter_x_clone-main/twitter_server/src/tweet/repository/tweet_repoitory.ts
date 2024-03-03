import { PrismaClient } from "@prisma/client";
import { tweetPayload } from "../../types/tweet";

class Tweet {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createTweet(payload: tweetPayload) {

    console.log('payload is -->', payload);
    try {
      const data = await this.prisma.tweet.create({
        data: {
          imageURL: payload?.imageURL,
          content: payload.content,
          hashTag: payload?.hashTag,
          autherId: payload.userID,
        },
      });
      console.log('Data', data);
      return data;
    } catch (error) {
      console.error("Error creating tweet:", error);
      throw new Error("Unable to create tweet");
    }
  }

//   async getAllUserTweet(Userid: string) {
//     try {
//       const data = this.prisma.user.findMany({ where: {id: Userid },include: { tweets: true } });
//       return (await data).sort;
//     } catch (error) {
//       console.log("error is from tweet find many", error);
//       throw new Error("Unable To Find Tweets");
//     }
//   }

  async getAuthor(userId:string){
    const TweetAuthor=await this.prisma.user.findUnique({where:{id:userId}});
    return TweetAuthor;
  }
}
export default Tweet;