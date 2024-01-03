const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('comentario', {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    imagen: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    nombre: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    contenido: {
      type: DataTypes.STRING,
      allowNull: false
    },
    fecha: {
      type: DataTypes.DATE,
      allowNull: true,
    },
    puntuacion: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    timestamps: false,
  });
};
