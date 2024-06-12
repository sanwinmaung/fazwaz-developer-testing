"use strict";

const faker = require("faker");

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const properties = await queryInterface.sequelize.query(
      "SELECT id from Properties;"
    );

    const propertyRows = properties[0];

    const images = [];

    const randImages = [
      "https://loremflickr.com/320/240/city",
      "https://picsum.photos/320/240",
    ];

    propertyRows.forEach((property) => {
      for (let i = 0; i < 3; i++) {
        images.push({
          // url: randImages[Math.floor(Math.random() * 2)],
          url: `https://picsum.photos/seed/${faker.random.word()}/320/240`,
          property_id: property.id,
          createdAt: new Date(),
          updatedAt: new Date(),
        });
      }
    });

    await queryInterface.bulkInsert("Images", images, {});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Images", null, {});
  },
};
