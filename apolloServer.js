const { ApolloServer } = require("apollo-server-micro");
const typeDefs = require("./src/pages/api/assets/schema");
const resolvers = require("./src/pages/api/assets/resolvers");

const apolloServer = new ApolloServer({
  typeDefs,
  resolvers,
});

module.exports = apolloServer;
