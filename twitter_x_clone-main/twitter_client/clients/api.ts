import { GraphQLClient } from "graphql-request";

export const graphqlClient = new GraphQLClient(process.env.API_ENDPOINT as string);
export const graphqlClientHeder = new GraphQLClient(
  process.env.NEXT_PUBLIC_SERVER_URL as string,
  {
    headers: () => ({
      Authorization: `${localStorage.getItem("_Autherization")}`,
    }),
  }
);
