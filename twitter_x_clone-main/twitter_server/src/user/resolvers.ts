import { GraphqlContext, UserData } from "../types/User_types";
import User_repository from "./repository/User_repository";
import GoogleAuthuserLogin from "./services/GoogleAuthuserLogin";
import UserProfile from "./services/UserProfile";

export const resolvers = {
  verifyAuthToken: async (parent: any, { token }: { token: string }) => {
    const res = await GoogleAuthuserLogin(token);
    console.log("from resolver ");
    return res;
  },
  getCurrentUser: async (parent: any, args: any, ctx: GraphqlContext) => {
    console.log(ctx.user);
    const email = ctx.user?.email;
    const user_repository = new User_repository();
    if (email) {
      const user = await user_repository.findUser(email);
      return user;
    }
  },
  GetUserDetails: async (parent: any, { id }: { id: string }, ctx: GraphqlContext) => {
    
    // if (!ctx.user?.id) return { err: "Unauthorized User" };
    console.log('id------>', id)
    if (!id) return { err: "id Can't be Undefined" };
    try {
        const UserData = await UserProfile(id);
        if (!UserData) {
            throw new Error("User ID is missing");
        }
        return UserData;
    } catch (error) {
        return { err: error };
    }
},

};
