import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";
import { user } from "../user";


export async function initialServer() {
  const app = express();

  app.use(bodyParser.json());

  const server = new ApolloServer({
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
  app.use("/graphql", expressMiddleware(server));

  return app;
}
