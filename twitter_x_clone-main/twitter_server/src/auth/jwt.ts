import { user } from "@prisma/client";
import { jwtPayload } from "../types/User_types";
import Jwt, { JwtPayload } from "jsonwebtoken";

const jwtSecret = "sdfghjkpyrrtyuioiuytdhjk85";

class JwtVerify {
  public static genarateUserToken(user: user) {
    try {
      console.log("user", user);
      const payload: jwtPayload = {
        id: user?.id,
        email: user?.emailId,
      };
      const token: string = Jwt.sign(payload, jwtSecret);
      return token;
    } catch (error) {
      console.log("error", error);
      return error;
    }
  }
  public static verifyToken(token: string | undefined) {
    if (!token || token.length < 10) return;
    try {
      if (token) {
        const decode = Jwt.verify(token, jwtSecret);
        return decode as JwtPayload;
      }
    } catch (error) {
      return { err: error };
    }
  }
}

export default JwtVerify;
