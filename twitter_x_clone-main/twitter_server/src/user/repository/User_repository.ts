import { PrismaClient, user } from "@prisma/client";
import { craeteUser } from "../../types/repository_types";

class User_repository {
  private prisma: PrismaClient;
  constructor() {
    this.prisma = new PrismaClient();
  }

  async createUser(data: craeteUser) {
    try {
      const newUser: user = await this.prisma.user.create({
        data: {
          emailId: data?.email,
          firstName: data?.firstName,
          lastName: data?.lastName,
          profileUrl: data?.profileImg,
        },
      });
      console.log(newUser);
      if(!newUser?.id) return false;
      return newUser;
    } catch (error) {
      console.log("error from user Repo create", error);
      return false;
    }
  }

  async findUser(userEmail: string) {
    
    try {
      const userData = await this.prisma.user.findUnique({
        where: { emailId: userEmail },
      });
      console.log(userData);
      if(!userData?.id) return false;
      return userData;
    } catch (error) {
      console.log("error from user repo find", error);
      return false;
    }
  }

  //finding tweets of user

  async findUseById(UserId: string) {
    try {
      const userData = await this.prisma.user.findUnique({
        where: { id: UserId },
      });
      if(!userData?.id) return false;
      return userData;
    } catch (error) {
      console.log("error from user repo find", error);
      return false;
    }
  }

  async findMAnyByID(UserId:string) {
    try {
      const userData = await this.prisma.tweet.findMany({
        where: { id: UserId }
      });
      if(!userData) return false;
      return userData;
    } catch (error) {
      console.log("error from user repo find", error);
      return false;
    }
  }
}

export default User_repository;
