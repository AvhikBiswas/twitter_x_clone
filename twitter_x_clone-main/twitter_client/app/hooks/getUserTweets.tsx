import { graphqlClientHeder } from "@/clients/api";
import { getTweets } from "@/graphql/quary/tweet";
import { useQuery } from "@tanstack/react-query";

type GetUserTweetsPayload = {
  params: string;
  skipValue: number; // Fixed typo in skipValue
  currUserId?: string | undefined;
};

export type GetAllTweetsByIdQuery = {
  getAllTweetsById: GetAllTweetsById[];
};

export type GetAllTweetsById = {
  content: string;
  id: string;
  imageURL?: string;
  author: {
    firstName: string;
    lastName?: string;
    profileUrl: string;
  };
};

export const getUserTweets = ({ params, skipValue }: GetUserTweetsPayload) => {
  const { isLoading, data } = useQuery<GetAllTweetsByIdQuery>({ // Corrected type and destructuring
    queryKey: ["Get-Tweets"],
    queryFn: async () => {
      const tweets = await graphqlClientHeder.request(getTweets, {
        userId: params,
        skipValue,
      });
      return tweets as GetAllTweetsByIdQuery; // Corrected return type
    },
  });
  return { isLoading, tweets: data?.getAllTweetsById }; // Corrected return object
};
