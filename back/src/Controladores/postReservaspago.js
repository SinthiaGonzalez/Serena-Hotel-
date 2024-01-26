const { Reservas, Habitaciones } = require("../db");
const {Usuarioauxiliar} = require('../db.js');
const postReservasPagos = async (
  fecha_entrada,
  fecha_salida,
  estado,
  habitacionesIds,
  usuarioId
) => {

  console.log("consollogeuode Post REservas", habitacionesIds,usuarioId,fecha_entrada,fecha_salida,estado);
  try {
    const reserva = await Reservas.create({
      fecha_entrada,
      fecha_salida,
      estado,
      usuarioId
    });

    const habitacionesInstancias = await Habitaciones.findAll({
      where: {
        id: habitacionesIds,
      },
    });

    await Promise.all(
      habitacionesInstancias.map(async (habitacion) => {
        await habitacion.update({ estado: "No Disponible" });
      })
    );

    await reserva.addHabitaciones(habitacionesInstancias);

     // Elimina todos los registros en Usuarioauxiliar
     await Usuarioauxiliar.destroy({
      where: {},
      truncate: true,
    });
 

    const reservaConHabitaciones = {
      ...reserva.toJSON(),
      habitaciones: habitacionesReserva,
    };

    return reservaConHabitaciones;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { postReservasPagos};
