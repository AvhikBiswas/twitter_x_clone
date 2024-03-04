import { graphqlClientHeder } from "@/clients/api";
import { UserDataWithId } from "@/gql/graphql";
import { getProfileQuary } from "@/graphql/quary/user";
import { useQuery } from "@tanstack/react-query";

export default function useUserByID(Id: string) {
  const { data, isLoading, isError } = useQuery<UserDataWithId, Error>({
    queryKey: ["current_Profile", Id],
    queryFn: async () => {
      const UserData:any = await graphqlClientHeder.request(getProfileQuary, {
        getUserDetailsId: Id,
      });
      console.log("data", UserData);
      return UserData;
    },
  });

  return {
    profileData: (data?.GetUserDetails) || null,
    isLoading,
    isError,
  };
}
