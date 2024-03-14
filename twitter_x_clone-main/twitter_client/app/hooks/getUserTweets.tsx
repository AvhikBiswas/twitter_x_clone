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

export const getUserTweets = ({ params, pageParam }: GetUserTweetsPayload) => {
  const fetchTweets = async ({ pageParam }: { pageParam: number }) => {
    const tweets = await graphqlClientHeder.request(getTweets, {
      userId: params,
      skipValue: (pageParam - 1) * 6,
    });
    return tweets;
  };

  const query = useInfiniteQuery<any, Error>({
    queryKey: ["Get-Tweets", params],
    queryFn: fetchTweets,
    initialPageParam: 1,
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length + 1;
    },
  });

  return { ...query, fetchNextPage: query.fetchNextPage };
};
