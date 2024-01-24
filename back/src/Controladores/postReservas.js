const { Reservas, Habitaciones } = require("../db");

const postReservas = async (
  fecha_entrada,
  fecha_salida,
  estado,
  habitaciones,
   usuarioId
) => {
  try {
    const reserva = await Reservas.create({
      fecha_entrada,
      fecha_salida,
      estado,
      usuarioId
    });

    const habitacionesInstancias = await Habitaciones.findAll({
      where: {
        id: habitaciones.map((h) => h.id),
      },
    });

    await Promise.all(
      habitacionesInstancias.map(async (habitacion) => {
        await habitacion.update({ estado: "No Disponible" });
      })
    );

    await reserva.addHabitaciones(habitacionesInstancias);

    const habitacionesReserva = await reserva.getHabitaciones();

    const reservaConHabitaciones = {
      ...reserva.toJSON(),
      habitaciones: habitacionesReserva,
    };

    return reservaConHabitaciones;
  } catch (error) {
    return { error: error.message };
  }
};

module.exports = { postReservas };
