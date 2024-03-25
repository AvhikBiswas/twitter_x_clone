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
    getAllTweetsById(skipValue: $skipValue, userID: $userId) {
      content
      id
      imageURL
      auther {
        firstName
        lastName
        profileUrl
        id
      }
    }
  }
`);

export const getAllTweets = graphql(`
  query GetAllTweetsById($skipValue: Int!) {
    getAllTweets(skipValue: $skipValue) {
      content
      imageURL
      auther {
        firstName
        lastName
        emailId
        profileUrl
        id
      }
    }
  }
`);

export const getPresignedUrl = graphql(`
  query getSignedUrl($imageType: String!, $imageName: String!) {
    getPresignedUrl(imageType: $imageType, imageName: $imageName)
  }
`);
