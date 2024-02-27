import { GraphQLClient } from "graphql-request";
export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql");

export const graphqlClientHeder = new GraphQLClient(
  "http://localhost:8000/graphql",
  {
    headers: () => ({
      Authorization: `${localStorage.getItem("_Autherization")}`,
    }),
  }
);
