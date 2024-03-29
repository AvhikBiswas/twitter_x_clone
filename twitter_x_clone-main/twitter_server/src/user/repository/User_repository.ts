import { Redis } from "ioredis";
import { prismaClient } from "../../client/db";
import { craeteUser } from "../../types/repository_types";

class User_repository {
  Redisclient = new Redis(process.env.REDIS_URL!);

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
      const cashedData = await this.Redisclient.get(`userEmail:${userEmail}`);
      if (cashedData) {
        return JSON.parse(cashedData);
      }
      const userData = await prismaClient.user.findUnique({
        where: { emailId: userEmail },
      });
      await this.Redisclient.set(
        `userEmail:${userEmail}`,
        JSON.stringify(userData)
      );
      return userData;
    } catch (error) {
      console.log("error from user repo find findUser", error);
      return false;
    } finally {
      await this.Redisclient.quit();
    }
  }

  async findUseById(UserId: string) {
    try {
      const cashedData = await this.Redisclient.get(`FIND_USER:${UserId}`);
      if (cashedData) {
        return JSON.parse(cashedData);
      }
      const userData = await prismaClient.user.findUnique({
        where: { id: UserId },
      });
      await this.Redisclient.set(
        `FIND_USER:${UserId}`,
        JSON.stringify(userData)
      );
      return userData;
    } catch (error) {
      console.log("error from user repo find findUseById", error);
      return error;
    } finally {
      await this.Redisclient.quit();
    }
  }

  async findMAnyByID(UserId: string) {
    try {
      const cashedData = await this.Redisclient.get(`FIND_MANY_USER:${UserId}`);
      if (cashedData) {
        return JSON.parse(cashedData);
      }
      const userData = await prismaClient.tweet.findMany({
        where: { autherId: UserId },
      });
      await this.Redisclient.set(
        `FIND_MANY_USER:${UserId}`,
        JSON.stringify(userData)
      );
      return userData;
    } catch (error) {
      console.log("error from user repo find findMAnyByID", error);
      return false;
    } finally {
      await this.Redisclient.quit();
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
    try {
      const result = await prismaClient.follow.create({
        data: {
          follower: { connect: { id: userId } },
          following: { connect: { id: toFollowing } },
        },
      });
      return result;
    } catch (error) {
      return error;
    }
  }

  async unFollow(userId: string, toUnFollow: string) {
    try {
      const unFollowRes = await prismaClient.follow.delete({
        where: {
          followingID_follwerID: {
            followingID: toUnFollow,
            follwerID: userId,
          },
        },
      });
      return unFollowRes;
    } catch (error) {
      return error;
    }
  }
}

export default User_repository;
