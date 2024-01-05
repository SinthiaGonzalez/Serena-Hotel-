const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define("Carrito", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
  });
};
