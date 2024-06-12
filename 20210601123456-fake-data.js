"use strict";

const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const users = [];

    const images = [
      "https://loremflickr.com/320/240/city",
      "https://picsum.photos/320/240",
    ];

    for (let i = 0; i < 10; i++) {
      users.push({
        username: faker.internet.userName(),
        email: faker.internet.email(),
        // imageUrl: images[Math.floor(Math.random() * 2)],
        imageUrl: `https://picsum.photos/seed/${faker.random.word()}/320/240`,
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }

    return queryInterface.bulkInsert("Users", users, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
