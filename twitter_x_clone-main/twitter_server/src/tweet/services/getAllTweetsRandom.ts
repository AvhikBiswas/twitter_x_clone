import { PageSkipValue } from "../../types/tweet";
import Tweet from "../repository/tweet_repoitory";

export const getAllTweetsRandom = async (skipValue: number) => {

    console.log('skipValue', skipValue);
  if (skipValue==undefined) {
    throw new Error("Skip Value Cant be Null");
  }
  const Tweet_repository = new Tweet();

  try {
    const data = Tweet_repository.getAllTweetAll(skipValue);
    return data;
  } catch (error) {
    throw new Error("Somthing Wrong");
  }
};
