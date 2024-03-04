import { graphql } from "@/gql";

export const createTweetMutation = graphql(`
  #graphql
  mutation CreateTweetMutation($payload:CreateTweetData) {
    createNewTweet(payload: $payload) {
      content
    }
  }
`);
