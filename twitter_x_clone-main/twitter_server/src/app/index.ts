import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { user } from "../user";
import cors from "cors";
import { GraphqlContext } from "../types/User_types";
import JwtVerify from "../auth/jwt";

export async function initialServer() {
  const app = express();

  app.use(bodyParser.json());
  app.use(cors());

  const server = new ApolloServer<GraphqlContext>({
    typeDefs: `
     ${user.types}
    type Query{
      ${user.queries} 
    }

    `,
    resolvers: {
      Query: {
        ...user.resolvers,
      },
    },
  });

  await server.start();

  // Use expressMiddleware with the ApolloServer instance
  app.use(
    "/graphql",
    expressMiddleware(server, {
      context: async ({ req, res }) => {
        return {
          user: req.headers.authorization
            ? JwtVerify.verifyToken(req.headers.authorization)
            : undefined,
        };
      },
    })
  );

  return app;
}
