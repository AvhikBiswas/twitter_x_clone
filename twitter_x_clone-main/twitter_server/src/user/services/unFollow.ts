import User_repository from "../repository/User_repository";

export const Unfollow = async (userID: string, toUnFollow: string) => {
  const user_repository = new User_repository();
  try {
    const findFollower = await user_repository.findfollowUser(
      userID,
      toUnFollow
    );
    if (findFollower) {
      const followRes = await user_repository.unFollow(userID, toUnFollow);
      return true;
    } 
    return true;
   
  } catch (error) {
    throw new Error("Somthing Wrong");
  }
};
