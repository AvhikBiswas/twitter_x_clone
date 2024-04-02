import { GraphQLClient } from "graphql-request";


export const graphqlClientHeder = new GraphQLClient(
  process.env.NEXT_PUBLIC_SERVER_URL!,
  {
    headers: () => ({
      Authorization: `${localStorage.getItem("_Autherization")}`,
    }),
  }
);
