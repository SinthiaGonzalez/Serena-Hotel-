const { Reservas, Habitaciones } = require("../db");
const { Op } = require("sequelize");

const getReservas = async (req, res) => {
  try {
    const { fecha_entrada, fecha_salida } = req.query;
    console.log(fecha_entrada, fecha_salida);
    const reservas = await Reservas.findAll({
      include: "Habitaciones",
      where: {
        [Op.or]: [
          {
            fecha_entrada: {
              [Op.gt]: fecha_salida, // Reservas después de la fecha de salida
            },
          },
          {
            fecha_salida: {
              [Op.lt]: fecha_entrada, // Reservas antes de la fecha de entrada
            },
          },
        ],
      },
    });
    res.status(200).json(reservas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getReservas };
