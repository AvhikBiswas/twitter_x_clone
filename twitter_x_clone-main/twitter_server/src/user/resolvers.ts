import { GraphqlContext } from "../types/User_types";
import User_repository from "./repository/User_repository";
import GoogleAuthuserLogin from "./services/GoogleAuthuserLogin";

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
};
