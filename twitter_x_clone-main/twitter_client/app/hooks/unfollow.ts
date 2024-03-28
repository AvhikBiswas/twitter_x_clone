import { graphqlClientHeder } from "@/clients/api";
import { unfollowUser } from "@/graphql/quary/mutations/user";
import {
  QueryClient,
  QueryClientProvider,
  useMutation,
  useQuery,
  useQueryClient,
} from "@tanstack/react-query";
import toast from "react-hot-toast";

const useUnFollow = () => {
  const queryClient = useQueryClient();
  const { mutate, isError } = useMutation({
    mutationKey: ["UnFollow"],
    mutationFn: async (toUnFollow: string) => {
      const response = await graphqlClientHeder.request(unfollowUser, {
        toUnFollow,
      });
      return response;
    },
    onSuccess: async (parent) => {
      await queryClient.invalidateQueries({ queryKey: ["current_Profile"] });
      return;
    },
    onError: () => {
      toast.error("Uable to UnFollow");
      return;
    },
  });
  return {
    unfollowUser: mutate,
    isError,
  };
};

export default useUnFollow;
