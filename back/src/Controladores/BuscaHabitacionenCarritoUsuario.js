const Sequelize = require("sequelize");
const { Carrito } = require("../db.js");
const { CarritoHabitacion } = require("../db.js");
const { postReservasPagos } = require("../Controladores/postReservaspago.js");

const buscarHabitacionenCarritoUsuario = async (
  statusPago,
  idusuario,
  fecha_entrada,
  fecha_salida
) => {
  const estado = true;
  const statusPago1 = statusPago;
  const usuarioId = idusuario;
  const fecha_entrada1 = fecha_entrada;
  const fecha_salida1 = fecha_salida;
  if (statusPago1 === "approved") {
    // Tu lógica actual para el caso de pago aprobado
    if (Carrito && typeof Carrito.findOne === "function") {
      try {
        const carritoUsuario = await Carrito.findOne({
          where: { usuarioId: usuarioId },
        });
        if(!carritoUsuario){
return console.error("No se encontro el carrito del usuario");
        }else{
          const carritoId = carritoUsuario.dataValues.id;
          const carritohabitaciones = await CarritoHabitacion.findAll({
            where: { CarritoId: carritoId },
          });
          const habitacionesIds = carritohabitaciones.map(
            (carritoHabitacion) => carritoHabitacion.dataValues.HabitacioneId
          );
          if (
            fecha_entrada1 &&
            fecha_salida1 &&
            estado &&
            habitacionesIds &&
            usuarioId
          ) {
            postReservasPagos(
              fecha_entrada1,
              fecha_salida1,
              estado,
              habitacionesIds,
              usuarioId
            );
          }
          await Carrito.destroy({ where: { usuarioId: usuarioId } });
        }
       
      } catch (error) {
        console.error(
          "Error al buscar habitaciones en el carrito del usuario:",
          error
        );
        
      }
    }
  }
};

module.exports = { buscarHabitacionenCarritoUsuario };

