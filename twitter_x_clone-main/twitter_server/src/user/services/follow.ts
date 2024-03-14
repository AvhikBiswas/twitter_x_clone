import User_repository from "../repository/User_repository";

export const Userfollow = async (userID: string, toFollow: string) => {
  const user_repository = new User_repository();
  try {
    const findFollower = await user_repository.findfollowUser(userID, toFollow);
    console.log("findFollower", findFollower);
    if (!findFollower) {
      const followRes = await user_repository.followUser(userID, toFollow);
      return true;
    }
    return true;
  } catch (error) {
    throw new Error("Somthing Wrong");
  }
};
