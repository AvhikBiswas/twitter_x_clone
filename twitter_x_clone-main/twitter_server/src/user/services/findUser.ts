import User_repository from "../repository/User_repository"; 

const findUser = async (userId: string) => {
  const user_repository = new User_repository();
  try {
    const data = await user_repository.findUser(userId);
    return data;
  } catch (error) {
    throw new Error("Somthing Went Wrong");
  }
};

export default findUser;