const { Reservas, Habitaciones } = require("../db");

const getReservas = async (req, res) => {
  try {
    const reservas = await Reservas.findAll({
      include: "Habitaciones",
    });

    // Mapear las reservas y añadir la propiedad "habitaciones" a cada una
    const reservasConHabitaciones = await Promise.all(
      reservas.map(async (reserva) => {
        // Obtener las habitaciones asociadas a cada reserva
        const habitacionesReserva = await reserva.getHabitaciones();

        // Crear un nuevo objeto de reserva con la propiedad "habitaciones"
        const reservaConHabitaciones = {
          ...reserva.toJSON(),
          habitaciones: habitacionesReserva,
        };

        return reservaConHabitaciones;
      })
    );

    res.status(200).json(reservasConHabitaciones);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getReservas };
