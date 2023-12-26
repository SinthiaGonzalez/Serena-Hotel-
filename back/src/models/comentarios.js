const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('comentario', {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
           
          },
          nombre: {
            type: DataTypes.STRING,
            allowNull: false,
          },
          contenido:{
            type: DataTypes.STRING,
            allowNull:false
          },
          fecha:{
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: DataTypes.NOW
          },
          puntuacion: {
            type: DataTypes.INTEGER,
            allowNull: false
           
          },
        }, {

        
            timestamps: false,

    });
    
};