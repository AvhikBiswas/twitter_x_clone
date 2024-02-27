import { graphql } from "../../gql";

export const VERIFY_AUTH_TOKEN_QUERY = graphql`
  query VerifyAuthToken($token: String!) {
    verifyAuthToken(token: $token)
  }
`;

export const getCurrentUserQuary = graphql`
  query GetCurrentUser {
    getCurrentUser {
      id
      firstName
      emailId
      lastName
      profileUrl
    }
  }
`;
