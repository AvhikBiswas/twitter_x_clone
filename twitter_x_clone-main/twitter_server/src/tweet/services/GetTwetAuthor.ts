import Tweet from "../repository/tweet_repoitory";

const GettweetAuthor = async (authorID:string) => {
  const tweet_repository = new Tweet();
  try {
    const data = await tweet_repository.getAuthor(authorID);
    return data;
  } catch (error) {
    console.log("error from tweet services", error);
    throw new Error("Somthing Went Wrong");
  }
};

export default GettweetAuthor;
