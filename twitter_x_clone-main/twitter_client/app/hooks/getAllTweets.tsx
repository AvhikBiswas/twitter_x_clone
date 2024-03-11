import { useQuery } from "@tanstack/react-query";
import {  GetAllTweetsByIdQuery } from "./getUserTweets";
import { graphqlClientHeder } from "@/clients/api";
import { getAllTweets } from "@/graphql/quary/tweet";

export const GetAlltweet = ( skipValue: number ) => {
  const { data, isLoading } = useQuery<GetAllTweetsByIdQuery>({
    queryKey: ["get - allTweets"],
    queryFn: async () => {
      const TweetsData = graphqlClientHeder.request(getAllTweets, {
        skipValue,
      });
      return TweetsData as GetAllTweetsByIdQuery;
    },
  });


  return { isLoading, allTweets: data?.getAllTweets };
};
