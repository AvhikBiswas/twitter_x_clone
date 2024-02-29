import GetUserDetail from "../../api/GetUserDetail";
import User_repository from "../repository/User_repository";
import JwtVerify from "../../auth/jwt";

async function GoogleAuthuserLogin(token: string) {
  const user_repository = new User_repository();

  const userData = await GetUserDetail(token);
  try {
    if (userData) {
      const user = await user_repository.findUser(userData.email);
      if (!user) {
        const newUser = await user_repository.createUser(userData);
        if (newUser) {
          const newUserToken = JwtVerify.genarateUserToken(newUser);
          return newUserToken;  
        }
      } else {
        const newUserToken = JwtVerify.genarateUserToken(user);
        return newUserToken;
      }
    }
  } catch (error) {
    console.log("error from user service", error);
  }
}

export default GoogleAuthuserLogin;