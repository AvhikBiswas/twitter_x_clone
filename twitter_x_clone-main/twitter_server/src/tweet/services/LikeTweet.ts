import Tweet from "../repository/tweet_repoitory";

const LikeTweet = async (tweetId: string, userId: string) => {
  const Tweet_repository = new Tweet();
  try {
    const data = await Tweet_repository.LikeTweet(tweetId, userId);
    return data;
  } catch (error) {
    return error;
  }
};

export default LikeTweet;
