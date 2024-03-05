import { PageSkipValue } from "../../types/tweet";
import Tweet from "../repository/tweet_repoitory";

export const getAllTweetsById = async (payload: PageSkipValue) => {
  const tweet_repository = new Tweet();
  try {
    const allUserTweet = await tweet_repository.getAllUserTweet(payload);
    return allUserTweet;
  } catch (error) {
    return { mess: "Got Some Error", err:error };
  }
};
