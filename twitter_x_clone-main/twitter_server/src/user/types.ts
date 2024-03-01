export const types = `#graphql
  type User {
    id: ID!
    firstName: String!
    lastName: String
    emailId: String!
    profileUrl: String!
    password: String
  }
  type UserDataWithID {
  id: String!
  firstName: String!
  lastName: String
  emailId: String!
  profileUrl: String!
}
`;
