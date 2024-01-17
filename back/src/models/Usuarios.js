const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
  sequelize.define(
    "usuario",
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
      apellido: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.INTEGER,
        allowNull: true,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      logueado:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: false,
      },
      isAdmin:{
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue: false,
      }
    },
    {
      timestamps: false,
    }
  );
};

