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
      throw new Error("Somthing Wrong In Find User By Id Repo");
    }
  }

  async findMAnyByID(UserId: string) {
    try {
      const userData = await prismaClient.tweet.findMany({
        where: { id: UserId },
      });
      return userData;
    } catch (error) {
      console.log("error from user repo find findMAnyByID", error);
      return false;
    }
  }
}

export default User_repository;
