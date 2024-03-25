export const createNewTweetMutation = `#graphql
createNewTweet(payload:CreateTweetData):tweet
likeTweet(tweetId: String!):Boolean
`;
