import express from "express";
import { ApolloServer } from "@apollo/server";
import { expressMiddleware } from "@apollo/server/express4";
import bodyParser from "body-parser";

export async function initialServer() {
  const app = express();

  // Use express built-in middleware for parsing URL-encoded bodies
  app.use(bodyParser.json());

  const server = new ApolloServer({
    typeDefs: `
      type Query {
        sayHello: String
      }
    `,
    resolvers: {
      Query: {
        sayHello: () => "hello from graphql",
      },
    },
  });

  await server.start();

  // Use expressMiddleware with the ApolloServer instance
  app.use("/graphql", expressMiddleware(server));

  return app;
}
