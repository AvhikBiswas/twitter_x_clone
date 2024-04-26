
export const queries = `#graphql
    verifyAuthToken(token: String!): String
    getCurrentUser:User
    GetUserDetails(id: String!):User
    getUserByName(firstName:String!,lastName:String):[User]
`;
