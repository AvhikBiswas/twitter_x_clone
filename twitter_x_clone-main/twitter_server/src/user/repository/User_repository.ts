import { prismaClient } from "../../client/db";
import { craeteUser } from "../../types/repository_types";

class User_repository {
  async createUser(data: craeteUser) {
    try {
      const newUser = await prismaClient.user.create({
        data: {
          emailId: data.email,
          firstName: data.firstName,
          lastName: data?.lastName,
          profileUrl: data?.profileImg,
        },
      });
      return newUser;
    } catch (error) {
      console.log("error from user Repo create", error);
      return false;
    }
  }

  async findUser(userEmail: string) {
    try {
      const userData = await prismaClient.user.findUnique({
        where: { emailId: userEmail },
      });
      return userData;
    } catch (error) {
      console.log("error from user repo find findUser", error);
      return false;
    }
  }

  async findUseById(UserId: string) {
    try {
      const userData = await prismaClient.user.findUnique({
        where: { id: UserId },
      });
      return userData;
    } catch (error) {
      console.log("error from user repo find findUseById", error);
      return error;
    }
  }

  async findMAnyByID(UserId: string) {
    try {
      const userData = await prismaClient.tweet.findMany({
        where: { autherId: UserId },
      });
      return userData;
    } catch (error) {
      console.log("error from user repo find findMAnyByID", error);
      return false;
    }
  }

  async findfollowUser(userId: string, toFollowing: string) {
    try {
      const result = await prismaClient.follow.findUnique({
        where: {
          followingID_follwerID: {
            followingID: toFollowing,
            follwerID: userId,
          },
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async followUser(userId: string, toFollowing: string) {
    console.log("userId----------->", userId, toFollowing);
    try {
      const result = await prismaClient.follow.create({
        data: {
          follower: { connect: { id: userId } },
          following: { connect: { id: toFollowing } },
        },
      });

      console.log("result", result);
      return result;
    } catch (error) {
      console.log("error-------------->", error);
      return error;
    }
  }

  async unFollow(userId: string, toUnFollow: string) {
    console.log("unFollow------------->", userId, toUnFollow);
    try {
      const unFollowRes = await prismaClient.follow.delete({
        where: {
          followingID_follwerID: {
            followingID: toUnFollow,
            follwerID: userId,
          },
        },
      });
      console.log("unFollowRes-------->", unFollowRes);
      return unFollowRes;
    } catch (error) {
      console.log("error-------------------------->", error);
      return error;
    }
  }
}

export default User_repository;
