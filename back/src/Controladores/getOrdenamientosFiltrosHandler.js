const { Habitaciones } = require("../db");

const getOrdenamientosFiltrosHandler = async (req, res) => {
  try {
    const { ordenarPor, direccion } = req.query;

    const ordenValido = ["nombre", "precio", "createdAt"].includes(ordenarPor);
    const direccionValida = ["asc", "desc"].includes(direccion.toLowerCase());

    if (!ordenValido || !direccionValida) {
      return res
        .status(400)
        .json({ error: "Parámetros de ordenamiento no válidos" });
    }

    // Construir la consulta de Sequelize con orden y dirección
    const consulta = {
      order: [[ordenarPor, direccion]],
    };

    const habitacionesOrdenadas = await Habitaciones.findAll(consulta);

    res.status(200).json(habitacionesOrdenadas);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getOrdenamientosFiltrosHandler };
