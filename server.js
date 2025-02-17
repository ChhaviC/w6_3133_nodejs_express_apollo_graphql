const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schema/schema");
const resolvers = require("./schema/resolvers");

const app = express();
const server = new ApolloServer({ typeDefs, resolvers });

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
  );
}

startServer();
