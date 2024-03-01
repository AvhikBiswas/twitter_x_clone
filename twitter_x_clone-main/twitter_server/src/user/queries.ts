import { UserData } from "../types/User_types";

interface UserDataWithID extends UserData {
  id: string;
}

export const queries = `#graphql
    verifyAuthToken(token: String!): String
    getCurrentUser:User
    GetUserDetails(id: String!): UserDataWithID

`;
