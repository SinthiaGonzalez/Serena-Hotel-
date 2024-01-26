const { DataTypes } = require("sequelize");
module.exports = (sequelize) => {
    sequelize.define("Usuarioauxiliar", {
      
        iduser:{
            type: DataTypes.INTEGER,
            primaryKey: true,
           
        } ,
        fecha_entrada: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          },
          fecha_salida: {
            type: DataTypes.DATEONLY,
            allowNull: false,
          }
    });
};