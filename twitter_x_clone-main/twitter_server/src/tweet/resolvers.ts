import { tweet } from "@prisma/client";
import { GraphqlContext } from "../types/User_types";
import { PageSkipValue, tweetPayload } from "../types/tweet";
import createTweet from "./services/createTweet";
import GettweetAuthor from "./services/GetTwetAuthor";
import { getAllTweetsByUser } from "./services/getAllTweetsByUser";

const mutations = {
  createNewTweet: async (
    parent: any,
    { payload }: { payload: tweetPayload },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user?.id) {
      throw new Error("Unauthorized User");
    }
    const newTweet = await createTweet({ ...payload, userID: ctx.user.id });
    return newTweet;
  },
};

export const AllTweetresolvers = {
  getAllTweetsById: async (
    parent: any,
    { skipValue, userID }: { skipValue: number; userID:string },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user?.id) {
      throw new Error("Not Authenticated");
    }
    try {
      const allTweetData = await getAllTweetsByUser({
        skipValue,
        userID
      });
      console.log('allTweetData-------------------------->', allTweetData)
      return allTweetData;
    } catch (error) {
      console.log("got error in fetching tweet ", error);
    }
  },
};

const extraResolvers = {
  tweet: {
    auther: async (parent: tweet) => {
      const data = await GettweetAuthor(parent.autherId);
      return data;
    },
  },
};

export const resolver = { mutations, extraResolvers, AllTweetresolvers };
