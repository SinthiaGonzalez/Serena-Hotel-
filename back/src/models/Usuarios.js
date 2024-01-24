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
        allowNull: true,
      },
      email: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      telefono: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      contraseña: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      isadmin: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
      },
      estado:{ 
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "activo", // "activo"|"inactivo"|"eliminado"
      },
      imagen:{
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "https://res.cloudinary.com/de2jgnztx/image/upload/v1705619360/habitaciones/dsqhjd0wd9xqe9anigxj.png"
      }
    },
    {
      timestamps: false,
    }
  );
};

