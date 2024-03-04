
export const types = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String
    emailId: String!
    profileUrl: String!
    password: String
    tweets:[tweet]
  }
  
  type UserDataWithID {
  id: String!
  firstName: String!
  lastName: String
  emailId: String!
  profileUrl: String!
}
`;
