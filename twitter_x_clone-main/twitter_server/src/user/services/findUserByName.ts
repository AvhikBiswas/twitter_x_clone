import User_repository from "../repository/User_repository";

export const findUsersByName = async (firstName: string,lastName?:string) => {
  const user_repository = new User_repository();
  try {
    const userData = await user_repository.findUsersByName(firstName,lastName);
    console.log('userData', userData)
    return userData;
  } catch (error) {
    throw new Error("Somthing Wrong");
  }
};
