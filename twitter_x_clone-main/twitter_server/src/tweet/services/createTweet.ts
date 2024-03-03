import { tweet } from "@prisma/client";
import { tweetPayload } from "../../types/tweet";
import Tweet from "../repository/tweet_repoitory";

const createTweet = async (pyload: tweetPayload) => {
  const tweet_repository = new Tweet();
  try {
    const data = await tweet_repository.createTweet(pyload);
    return data;
  } catch (error) {
    console.log("error from tweet services", error);
    throw new Error("Somthing Went Wrong");
  }
};

export default createTweet;
