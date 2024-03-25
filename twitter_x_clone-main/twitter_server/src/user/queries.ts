
export const queries = `#graphql
    verifyAuthToken(token: String!): String
    getCurrentUser:User
    GetUserDetails(id: String!):User
`;
