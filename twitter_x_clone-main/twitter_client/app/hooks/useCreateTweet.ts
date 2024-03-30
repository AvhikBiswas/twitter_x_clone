import { graphqlClientHeder } from "@/clients/api";
import { CreateTweetData, Tweet } from "@/gql/graphql";
import { createTweetMutation } from "@/graphql/quary/tweet";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

export const useCreateTweet = () => {
  const queryClient = useQueryClient();
  const mutation = useMutation({
    mutationKey: ["create-tweets"],
    mutationFn: async (payload: any) => {
      console.log("mutation function", payload.content);
      const response = await graphqlClientHeder.request(createTweetMutation, {
        payload,
      });
      return response;
    },
    onMutate: async (payload) => {
      toast.loading("Creating Tweet", { id: "1" });
      console.log("onmute---->", payload);
    },
    onSuccess: async (payload) => {
      toast.success("Created Success", { id: "1" });
      await queryClient.invalidateQueries({ queryKey:["get-allTweets"]});
    },
    onError:async(error)=>{
      toast.error("Somthing went Wrong",{id:"1"});
    },
  });
  return mutation;
};
