const apolloServer = require("../../../apolloServer");
const sequelize = require("./assets/sequelize");

const startServer = apolloServer.start();

export default async function handler(req, res) {
  await sequelize.sync();
  await startServer;
  await apolloServer.createHandler({ path: "/api/graphql" })(req, res);
}

export const config = {
  api: {
    bodyParser: false,
  },
};
