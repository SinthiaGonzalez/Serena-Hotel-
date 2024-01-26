const Sequelize = require("sequelize");
const { Carrito } = require('../db.js');
const { CarritoHabitacion } = require('../db.js');
const { postReservasPagos } = require('../Controladores/postReservaspago.js');
const { Usuarioauxiliar } = require('../db.js');

const buscarHabitacionenCarritoUsuario = async (statusPago) => {
    const estado = true;
    const statusPago1 = statusPago;
    const usuarioauxiliar = await Usuarioauxiliar.findAll();
    const usuarioId = usuarioauxiliar[0].dataValues.iduser;
    const fecha_entrada = usuarioauxiliar[0].dataValues.fecha_entrada;
    const fecha_salida = usuarioauxiliar[0].dataValues.fecha_salida;
console.log("statusPago1",statusPago1); 
    if (statusPago1 === "approved") {
        // Tu lógica actual para el caso de pago aprobado
        if (Carrito && typeof Carrito.findOne === 'function') {
            try {
                const carritoUsuario = await Carrito.findOne({ where: { usuarioId: usuarioId } });
                const carritoId = carritoUsuario.dataValues.id;
                const carritohabitaciones = await CarritoHabitacion.findAll({ where: { CarritoId: carritoId } });
                const habitacionesIds = carritohabitaciones.map((carritoHabitacion) => carritoHabitacion.dataValues.HabitacioneId);
                if (fecha_entrada && fecha_salida && estado && habitacionesIds && usuarioId) {
                    postReservasPagos(fecha_entrada, fecha_salida, estado, habitacionesIds, usuarioId);
                };
                await Carrito.destroy({ where: { usuarioId: usuarioId } });
            } catch (error) {
                console.error("Error al buscar habitaciones en el carrito del usuario:", error);
            }
        }
    } 
};

module.exports = { buscarHabitacionenCarritoUsuario };


module.exports = { buscarHabitacionenCarritoUsuario };
