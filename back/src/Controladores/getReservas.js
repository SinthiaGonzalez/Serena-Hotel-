const { Reservas, Habitaciones } = require("../db");
const { Op } = require("sequelize");

const getReservas = async (req, res) => {
  try {
    const { fecha_entrada, fecha_salida } = req.query;
    console.log("Fechas:", fecha_entrada, fecha_salida);

    const fechaEntrada = new Date(fecha_entrada);
    const fechaSalida = new Date(fecha_salida);

    const reservasSuperpuestas = await Reservas.findAll({
      include: Habitaciones,
      where: {
        [Op.and]: [
          {
            fecha_entrada: {
              [Op.lt]: fechaSalida,
            },
            fecha_salida: {
              [Op.gt]: fechaEntrada,
            },
          },
        ],
      },
    });

    console.log("Reservas superpuestas:", reservasSuperpuestas);

    const habitacionesReservadas = reservasSuperpuestas.flatMap((reserva) =>
      reserva.Habitaciones.map((habitacion) => habitacion.id)
    );

    console.log("Habitaciones reservadas:", habitacionesReservadas);

    const todasLasHabitaciones = await Habitaciones.findAll();

    const habitacionesDisponibles = todasLasHabitaciones.filter(
      (habitacion) => !habitacionesReservadas.includes(habitacion.id)
    );

    console.log("Habitaciones disponibles:", habitacionesDisponibles);

    res.status(200).json(habitacionesDisponibles);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getReservas };
