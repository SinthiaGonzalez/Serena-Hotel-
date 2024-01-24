const { DataTypes } = require("sequelize");

module.exports = (sequelize) => {
    sequelize.define("Pago", {
        id_mp: {
            type: DataTypes.NUMERIC,
            allowNull: true,
            primaryKey: true,
        },
        estado: {
            type: DataTypes.ENUM('approved', 'rejected', 'pending', 'in_process', 'in_mediation', 'cancelled', 'refunded', 'charged_back','authorized'),
            defaultValue: null,
            allowNull: false,
        },
       
    });
};