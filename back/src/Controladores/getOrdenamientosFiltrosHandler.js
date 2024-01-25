const { Habitaciones, Reservas } = require("../db");
const { Op } = require("sequelize");

const getOrdenamientosFiltrosHandler = async (req, res) => {
  try {
    const {
      ordenarPor,
      direccion,
      filtroPersonas,
      filtroCuarto,
      fecha_entrada,
      fecha_salida,
    } = req.query;
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

    const habitacionesReservadas = reservasSuperpuestas.flatMap((reserva) =>
      reserva.Habitaciones.map((habitacion) => habitacion.id)
    );

    const todasLasHabitaciones = await Habitaciones.findAll();

    let habitacionesFiltradas = todasLasHabitaciones.filter(
      (habitacion) => !habitacionesReservadas.includes(habitacion.id)
    );

    if (filtroPersonas) {
      habitacionesFiltradas = habitacionesFiltradas.filter((habitacion) => {
        const servicios = habitacion.servicios || [];
        const personas = servicios.find(
          (servicio) => servicio.descripcion === `${filtroPersonas} pers`
        );
        return personas;
      });
    }
    if (filtroCuarto) {
      habitacionesFiltradas = habitacionesFiltradas.filter((habitacion) => {
        const servicios1 = habitacion.servicios || [];
        const cuartos = servicios1.find(
          (servicio) => servicio.descripcion === `${filtroCuarto} cuartos`
        );
        return cuartos;
      });
    }

    // Aplica la ordenación a los resultados filtrados
    const ordenValido = ["nombre", "precio"].includes(ordenarPor);
    const direccionValida = ["asc", "desc"].includes(
      direccion ? direccion.toLowerCase() : ""
    );

    if (!ordenValido || !direccionValida) {
      return res
        .status(400)
        .json({ error: "Parámetros de ordenamiento no válidos" });
    }

    const consulta = {
      order: [[ordenarPor, direccion]],
    };

    const habitacionesDisponibles = await Habitaciones.findAll({
      where: {
        id: habitacionesFiltradas.map((habitacion) => habitacion.id),
      },
      ...consulta,
    });

    res.status(200).json(habitacionesDisponibles);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getOrdenamientosFiltrosHandler };
