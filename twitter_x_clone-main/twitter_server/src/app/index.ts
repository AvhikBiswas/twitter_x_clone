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
    app.use(
      cors({
        origin: process.env.CLIENT_URL as string,
      })
    );

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
            if (!req.headers.authorization) {
              res.status(401).send("Unauthorized User");
              return { user: null };
            }

            const data: any = req.headers.authorization
              ? JwtVerify.verifyToken(req.headers.authorization)
              : "";

            if (data?.err) {
              res.status(401).send("Unauthorized User");
              return { user: null };
            }

            return {
              user: data,
            };
          } catch (error) {
            console.error("Error in authentication middleware:", error);
            res.status(500).send("Internal Server Error");
            return { user: null };
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
