export const types = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String
    emailId: String!
    userName: String
    profileUrl: String!
    following:[User]
    follower:[User]
    password: String
    tweets:[tweet]
  }
  
`;
