import { graphql } from "../../gql";

export const VERIFY_AUTH_TOKEN_QUERY = graphql(`
  query VerifyAuthToken($token: String!) {
    verifyAuthToken(token: $token)
  }
`);

export const getCurrentUserQuary = graphql(`
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      userName
      emailId
      lastName
      profileUrl
    }
  }
`);



export const getProfileQuary = graphql(`
  query GetUserDetails($getUserDetailsId: String!) {
    GetUserDetails(id: $getUserDetailsId) {
      id
      firstName
      follower {
        id
      }
      following {
        id
      }
      emailId
      lastName
      userName
      profileUrl
      tweets {
      id
    }
    }
  }
`);
