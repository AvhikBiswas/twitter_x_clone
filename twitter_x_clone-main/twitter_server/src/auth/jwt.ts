import { user } from "@prisma/client";
import { jwtPayload } from "../types/User_types";
import Jwt from "jsonwebtoken";

const jwtSecret = "sdfghjkpyrrtyuioiuytdhjk85";

class JwtVerify {
  public static async genarateUserToken(user: user) {
    const payload: jwtPayload = {
      id: user?.id,
      email: user.emailId,
    };
    const token: string = Jwt.sign(payload, jwtSecret);
    return token;
  }
};

export default JwtVerify;
