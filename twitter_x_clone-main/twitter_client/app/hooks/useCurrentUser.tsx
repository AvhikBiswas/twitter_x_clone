import {  graphqlClientHeder } from "@/clients/api";
import { getCurrentUserQuary } from "@/graphql/quary/user";
import { useQuery } from "@tanstack/react-query";

export const useCurrentUser = () => {
  const quary = useQuery({
    queryKey: ["current_user"],
    queryFn:async () => await graphqlClientHeder.request(getCurrentUserQuary),
  });
  
  return { ...quary, user: quary.data?.getCurrentUser };
};
