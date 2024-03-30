import { UseInfiniteQueryResult, useInfiniteQuery, useQuery } from "@tanstack/react-query";
import { graphqlClientHeder } from "@/clients/api";
import { getAllTweets } from "@/graphql/quary/tweet";

export const useAllTweets = (skipValue: number) => {
  const fetchTweets = async ({ pageParam }: { pageParam: number }) => {
    const TweetsData = await graphqlClientHeder.request(getAllTweets, {
      skipValue: (pageParam-1)*10,
    });
    return TweetsData;
  };

  const query = useInfiniteQuery({
    queryKey: ["get-allTweets"],
    queryFn:fetchTweets,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
    
  });

  return { ...query,fetchNextPage: query.fetchNextPage };
};
