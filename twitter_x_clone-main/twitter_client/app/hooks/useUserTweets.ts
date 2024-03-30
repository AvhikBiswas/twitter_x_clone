import { graphqlClientHeder } from "@/clients/api";
import { getTweets } from "@/graphql/quary/tweet";
import {
  useInfiniteQuery,
  UseInfiniteQueryResult,
} from "@tanstack/react-query";

type GetUserTweetsPayload = {
  params: string;
  pageParam: number;
  currUserId?: string | undefined;
};

export const useUserTweets = ({ params, pageParam }: GetUserTweetsPayload) => {
  const fetchTweets = async ({ pageParam }: { pageParam: any }) => {
    const tweets = await graphqlClientHeder.request(getTweets, {
      userId: params,
      skipValue: (pageParam - 1) * 10,
    });
    return tweets;
  };

  const query = useInfiniteQuery<any>({
    queryKey: ["Get-Tweets", params],
    queryFn: ({ pageParam }) => fetchTweets({ pageParam }),
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });

  return { ...query, fetchNextPage: query.fetchNextPage };
};
