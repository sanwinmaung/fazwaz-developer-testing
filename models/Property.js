"use strict";

const { DataTypes } = require("sequelize");
// const sequelize = require("../sequelize");
const sequelize = require("../src/pages/api/assets/sequelize");
const Image = require("./Image");

const Property = sequelize.define("Property", {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  short_title: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  price: {
    type: DataTypes.INTEGER,
    allowNull: true,
    defaultValue: 0,
  },
  room_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
});

Property.associate = function (Image) {
  Property.hasMany(Image, {
    foreignKey: "property_id",
    as: "images",
  });
};

module.exports = Property;
