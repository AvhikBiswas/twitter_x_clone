import { user } from "@prisma/client";
import { jwtPayload } from "../types/User_types";
import Jwt from "jsonwebtoken";

const jwtSecret = "sdfghjkpyrrtyuioiuytdhjk85";

class JwtVerify {
  public static genarateUserToken(user: user) {
    const payload: jwtPayload = {
      id: user?.id,
      email: user.emailId,
    };
    const token: string = Jwt.sign(payload, jwtSecret);
    return token;
  }
  public static verifyToken(token: string) {
    if (token) {
      const decode = Jwt.verify(token, jwtSecret);
      return decode;
    }
    return "provide the correct token";
  }
}

export default JwtVerify;
