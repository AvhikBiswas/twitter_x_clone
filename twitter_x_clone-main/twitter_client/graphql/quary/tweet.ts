import { graphql } from "@/gql";

export const createTweetMutation = graphql(`
  #graphql
  mutation CreateTweetMutation($payload: CreateTweetData) {
    createNewTweet(payload: $payload) {
      content
    }
  }
`);

export const getTweets = graphql(`
  query getUserTweet($skipValue: Int, $userId: String) {
    getAllTweetsById(skipValue:$skipValue,userID:$userId) {
      content
      id
      imageURL
      auther {
        firstName
        lastName
        profileUrl
      }
    }
  }
`);


