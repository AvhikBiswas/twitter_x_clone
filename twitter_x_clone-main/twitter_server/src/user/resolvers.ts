import { tweet, user } from "@prisma/client";
import { GraphqlContext, UserData } from "../types/User_types";
import User_repository from "./repository/User_repository";
import GoogleAuthuserLogin from "./services/GoogleAuthuserLogin";
import UserProfile from "./services/UserProfile";
import getUserTweets from "./services/getUserTweet";
import findUser from "./services/findUser";
import { Userfollow } from "./services/follow";
import { prismaClient } from "../client/db";
import { Unfollow } from "./services/unFollow";
import { findUsersByName } from "./services/findUserByName";

export const mutations_resolver = {
  followUser: async (
    parent: any,
    { toFollow }: { toFollow: string },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user?.id) {
      throw new Error("Unathorized user");
    }
    try {
      const followRes = await Userfollow(ctx.user?.id, toFollow);
      console.log("followRes---->", followRes);
      return followRes;
    } catch (error) {
      console.log("error from follow user", error);
      throw new Error("somthing went Wrong");
    }
  },

  UnfollowUser: async (
    parent: any,
    { toUnFollow }: { toUnFollow: string },
    ctx: GraphqlContext
  ) => {
    if (!ctx.user?.id) {
      throw new Error("Unathorized user");
    }
    try {
      const followRes = await Unfollow(ctx.user?.id, toUnFollow);
      return followRes;
    } catch (error) {
      console.log("error from follow user", error);
      throw new Error("somthing went Wrong");
    }
  },
};

export const resolvers = {
  verifyAuthToken: async (parent: any, { token }: { token: string }) => {
    try {
      const res = await GoogleAuthuserLogin(token);
      console.log("from resolver ");
      return res;
    } catch (error) {
      throw new Error("From Veryfy Auth");
    }
  },
  getCurrentUser: async (parent: any, args: any, ctx: GraphqlContext) => {
    const email = ctx.user?.email;
    if (!email) throw new Error("Unauthenticated User");
    try {
      const user = await findUser(email);
      if (!user) {
        throw new Error("Somthing Went Wrong");
      }
      return user;
    } catch (error) {
      console.log("error", error);
    }
  },
  getUserByName:async(parent:any,{firstName,lastName}:{firstName:string,lastName:string,},ctx:GraphqlContext)=>{
    if (!ctx.user?.id) throw new Error("Unauthorized User");
    try {
      const UserData = await findUsersByName(firstName,lastName);
      return UserData;
    } catch (error) {
      return { err: error };
    }
  },
  GetUserDetails: async (
    parent: any,
    { id }: { id: string },
    ctx: GraphqlContext
  ) => {
    console.log("Id---------------------->", id);

    if (!ctx.user?.id) throw new Error("Unauthorized User");
    if (!id) throw new Error("Id is Null");
    try {
      console.log("UserData");
      const UserData = await UserProfile(id);
      return UserData;
    } catch (error) {
      return { err: error };
    }
  },
};

export const extraResolver = {
  User: {
    tweets: async (parent: user) => {
      console.log("parent.id", parent.id);
      const tweetData = await getUserTweets(parent.id);
      return tweetData;
    },
    follower: async (parent: user) => {
      const followeRes = await prismaClient.follow.findMany({
        where: { following: { id: parent.id } },
        include: {
          follower: true,
        },
      });

      return followeRes.map((el) => el.follower);
    },

    following: async (parent: user) => {
      const followingeRes = await prismaClient.follow.findMany({
        where: { follower: { id: parent.id } },
        include: {
          following: true,
        },
      });
      return followingeRes.map((el) => el.following);
    },
  },
};
