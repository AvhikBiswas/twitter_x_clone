import { tweet } from "@prisma/client";
import { GraphqlContext } from "../types/User_types";
import { PageSkipValue, tweetPayload } from "../types/tweet";
import createTweet from "./services/createTweet";
import GettweetAuthor from "./services/GetTwetAuthor";
import { getAllTweetsById } from "./services/getAllTweetsByUser";

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
    { payload }: { payload: PageSkipValue },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user?.id) {
      throw new Error("Not Authenticated");
    }
    try {
      const allTweetData = await getAllTweetsById({
        skipValue: payload?.skipValue,
        userID: payload?.userID,
      });
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
