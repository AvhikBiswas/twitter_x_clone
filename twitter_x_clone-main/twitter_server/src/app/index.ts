import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { user } from "../user";
import cors from "cors";
import { GraphqlContext } from "../types/User_types";
import JwtVerify from "../auth/jwt";
import { tweet } from "../tweet/index";

export async function initialServer() {
  try {
    const app = express();

    app.use(bodyParser.json());
    app.use(cors({
      origin: 'http://localhost:3000'
    }));

    const server = new ApolloServer<GraphqlContext>({
      typeDefs: `
       ${user.types}
       ${tweet.types}
      type Query{
        ${user.queries} 
      }
      type Mutation {
       ${tweet.createNewTweetMutation}
      }
      

      `,
      resolvers: {
        Query: {
          ...user.resolvers,
        },
        Mutation: {
          ...tweet.resolver.mutations,
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
