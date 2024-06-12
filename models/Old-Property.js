const { DataTypes } = require("sequelize");
const sequelize = require("../old-sequelize");

const User = sequelize.define("Property", {
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
    allowNull: false,
  },
  room_count: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  created_at: {
    type: DataTypes.DATE,
  },
  updated_at: {
    type: DataTypes.DATE,
  },
});

module.exports = User;
