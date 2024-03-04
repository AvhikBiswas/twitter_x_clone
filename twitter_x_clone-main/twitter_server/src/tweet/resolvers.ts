import { tweet } from "@prisma/client";
import { GraphqlContext } from "../types/User_types";
import { tweetPayload } from "../types/tweet";
import createTweet from "./services/createTweet";
import GettweetAuthor from "./services/GetTwetAuthor";

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
const extraResolvers = {
  tweet:{ 
    auther:async(parent:tweet) => {
        const data = await GettweetAuthor(parent.autherId);
        return data;
    }
 },
};
export const resolver = { mutations,extraResolvers };
