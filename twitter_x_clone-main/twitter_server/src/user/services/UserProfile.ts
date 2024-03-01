import User_repository from "../repository/User_repository";

async function UserProfile(id: string) {
  const user_repository = new User_repository();
  try {
    if (id === "" || id === undefined) {
      return { err: "Id Can't Be Null" };
    } else {
      const UserData = await user_repository.findUseById(id);
      return UserData;
    }
  } catch (error) {
    return { err: error };
  }
}

export default UserProfile;
