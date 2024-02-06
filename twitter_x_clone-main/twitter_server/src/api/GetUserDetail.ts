import axios from "axios";
import AuthData, { UserData } from "../types/User_types";

async function GetUserDetail(token: string) {
  const endpointUrl = process.env.GOOGLE_AUTH;

  if (!endpointUrl) {
    console.error("GOOGLE_AUTH environment variable is not set");
    return false;
  }

  try {
    const { data } = await axios.get<AuthData>(endpointUrl, {
      params: {
        id_token: token,
      },
      responseType: "json",
    });
    const userData: UserData = {
      userName: data.name,
      firstName: data.given_name,
      lastName: data.family_name,
      email: data.email,
      profileImg: data.picture,
    };
    return userData;
  } catch (error) {
    console.error("Error from Google Auth Service", error);
    return false;
  }
}

export default GetUserDetail;
