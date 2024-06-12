"use strict";

const { DataTypes } = require("sequelize");
const sequelize = require("../src/pages/api/assets/sequelize");
const Property = require("./Property");

const Image = sequelize.define("Image", {
  url: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  property_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
  },
});

Image.associate = function (Property) {
  Image.belongsTo(Property, {
    foreignKey: "property_id",
    as: "property",
  });
};

module.exports = Image;
