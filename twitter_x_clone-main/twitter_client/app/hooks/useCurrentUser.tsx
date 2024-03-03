import { graphqlClientHeder } from "@/clients/api";
import { getCurrentUserQuary } from "@/graphql/quary/user";
import { useQuery } from "@tanstack/react-query";
import useUserStore from "../zustand/store";
import { useRouter } from "next/navigation";
import { GetCurrentUserQuery } from "@/gql/graphql";


export const useCurrentUser = () => {
  const { setUser, removeUser } = useUserStore();
  const router = useRouter();
  const quary = useQuery<GetCurrentUserQuery>({
    queryKey: ["current_user"],
    queryFn: async () => {
      const response = await graphqlClientHeder.request(getCurrentUserQuary);
      const user = response.getCurrentUser;
      if (user) {
        setUser(user);
      } else {
       
        removeUser();
        router.push("/");
      }

      return user;
    },
  });

  return { ...quary, user: quary.data };
};