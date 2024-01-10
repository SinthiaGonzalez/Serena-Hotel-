const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "desarrollador",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      image: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      github: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      linkedin: {
        type: DataTypes.STRING,
        allowNull: false,
      },
    },
    {
      timestamps: false,
    }
  );
};