"use client"

import { GraphQLClient } from "graphql-request";
export const graphqlClient = new GraphQLClient("http://localhost:8000/graphql",
{
    headers:()=>({
        Authentication:`Bearer ${localStorage.getItem("Autherization")}`
    }),
}

);