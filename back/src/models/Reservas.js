const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
  sequelize.define("Reservas", {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: true,
      primaryKey: true,
    },
    fecha_entrada: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    fecha_salida: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    estado: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false,
    },
  });
};
