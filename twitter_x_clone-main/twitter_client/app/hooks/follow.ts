import { graphqlClientHeder } from "@/clients/api";
import { followUser } from "@/graphql/quary/mutations/user";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const useFollow = () => {
  const queryClient = useQueryClient();
  const { mutate } = useMutation({
    mutationKey: ["Follow"],
    mutationFn: async (toFollow: string) => {
      const response = await graphqlClientHeder.request(followUser, {
        toFollow,
      });
      return response;
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ["current_Profile"] });

    },
    onError: () => {
      toast.error("Unable to follow user");
    },
  });

  return mutate;
};

export default useFollow;
