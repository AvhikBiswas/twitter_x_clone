import { graphqlClientHeder } from "@/clients/api";
import { getCurrentUserQuary } from "@/graphql/quary/user";
import { useQuery } from "@tanstack/react-query";
import useUserStore from "../zustand/store";


export const useCurrentUser = () => {
  const { setUser, removeUser } = useUserStore();

  const quary = useQuery({
    queryKey: ["current_user"],
    queryFn: async () => {
      const response = await graphqlClientHeder.request(getCurrentUserQuary);
      const user = response.getCurrentUser;

      if (user) {
        setUser(user);
      } else {
        removeUser();
      }

      return user;
    },
  });

  return { ...quary, user: quary.data };
};