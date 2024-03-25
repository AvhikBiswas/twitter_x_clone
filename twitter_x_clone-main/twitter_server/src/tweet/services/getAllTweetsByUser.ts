import { PageSkipValue } from "../../types/tweet";
import Tweet from "../repository/tweet_repoitory";

export const getAllTweetsByUser = async (payload:PageSkipValue) => {
  console.log('payload----------->', payload);
  const Tweet_repository=new Tweet();
  try {
    const data = await Tweet_repository.getAllUserTweet(payload);
    return data;
  } catch (error) {
    return { mess: "Got Some Error", err:error };
  }
};
