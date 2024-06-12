"use strict";

const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const properties = [];

    const roomCount = [1, 2, 3];

    for (let i = 0; i < 10; i++) {
      properties.push({
        name: faker.commerce.department(),
        short_title: faker.commerce.productName(),
        price: faker.commerce.price(),
        room_count: roomCount[Math.floor(Math.random() * 3)],
        createdAt: new Date(),
        updatedAt: new Date(),
      });
    }
    // room_count: faker.string.numeric(),

    return queryInterface.bulkInsert("Properties", properties, {});
  },

  down: async (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Properties", null, {});
  },
};
