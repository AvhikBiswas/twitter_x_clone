
import axios from "axios";

const TweetSuggestion = async (tweetText: string) => {
  console.log("TweeText----------->", tweetText);

  const data = {
    text: tweetText,
  };

  console.log("data------------>",data );

  try {
    const response = await axios.post(
      "http://localhost:9000/api/v1/suggestion",
      data,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );

    return response.data.createdTweets.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error:", error);
    throw error;
  }
};

export default TweetSuggestion;
