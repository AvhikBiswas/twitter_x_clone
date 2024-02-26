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
          emailId: data.email,
          firstName: data.firstName,
          lastName: data.lastName,
          profileUrl: data.profileImg,
        },
      });
      console.log(newUser);
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
      return userData;
    } catch (error) {
      console.log("error from user repo find", error);
      return false;
    }
  }
}

export default User_repository;
