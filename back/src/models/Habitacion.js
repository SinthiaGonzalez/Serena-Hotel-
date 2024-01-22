const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Habitaciones", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    precio: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    imagenes: {
      type: DataTypes.JSONB,
      allowNull: false,
      defaultValue: [],
    },
    servicios: {
      type: DataTypes.JSONB,
      defaultValue: [],
    },
    descripcion: {
      type: DataTypes.STRING,
      type: DataTypes.STRING(2000),
      allowNull: false,
    },
    estado: {
      type: DataTypes.ENUM("Disponible", "No Disponible"),
      allowNull: false,
      defaultValue: "Disponible",
    },
  }
  );
};
