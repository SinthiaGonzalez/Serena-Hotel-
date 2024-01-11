const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Pago", {
        id: {
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,
            allowNull: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.ENUM('aprobado', 'rechazado', 'pendiente'),
            defaultValue: null,
            allowNull: false,
        },
       
    });
};