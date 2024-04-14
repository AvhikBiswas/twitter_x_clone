import axios from "axios";

const TweetSuggestion = async (tweetText: string) => {
  console.log("TweeText----------->", tweetText);

  const data = {
    text: tweetText,
  };

  console.log("data------------>", data);

  try {
    const apiUrl = process.env.NEXT_PUBLIC_TWEET_SUGGESTION_AI;
    if (!apiUrl) {
      throw new Error("API URL is not defined");
    }

    console.log("API URL:", apiUrl);

    const response = await axios.post(apiUrl, data, {
      headers: {
        "Content-Type": "application/json",
      },
    });

    return response.data.createdTweets.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error:", error);
    throw new Error;
  }
};

export default TweetSuggestion;
