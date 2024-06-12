const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("my_app", "user", "password", {
  host: "db",
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });
