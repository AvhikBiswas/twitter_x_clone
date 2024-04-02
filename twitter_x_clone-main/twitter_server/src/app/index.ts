import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { user } from "../user";
import { GraphqlContext } from "../types/User_types";
import JwtVerify from "../auth/jwt";
import { tweet } from "../tweet/index";

export async function initialServer() {
  try {
    const app = express();

    app.use(bodyParser.json());

    const server = new ApolloServer<GraphqlContext>({
      typeDefs: `
       ${user.types}
       ${tweet.types}
      type Query{
        ${user.queries}
        ${tweet.queries} 
      }
      type Mutation {
       ${tweet.createNewTweetMutation}
       ${user.mutations}
      }
      

      `,
      resolvers: {
        Query: {
          ...user.resolvers,
          ...tweet.AllTweetresolvers,
        },
        Mutation: {
          ...tweet.resolver.mutations,
          ...user.mutations_resolver,
        },
        ...tweet.resolver.extraResolvers,
        ...user.extraResolver,
      },
    });

    await server.start();

    // Use expressMiddleware with the ApolloServer instance

    app.use(
      "/graphql",
      expressMiddleware(server, {
        context: async ({ req, res }) => {
          try {
            if (!req.headers.authorization)
              return { err: "Unauth", user: null };
            const data = req.headers.authorization
              ? JwtVerify.verifyToken(req.headers.authorization)
              : "";

            return {
              user: data,
            };
          } catch (error) {
            return {
              user: "Unauthorized User",
              error,
            };
          }
        },
      })
    );

    return app;
  } catch (error) {
    console.error("Error setting up server:", error);
    throw error;
  }
}
