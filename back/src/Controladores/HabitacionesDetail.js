const { Habitaciones } = require('../db');

const DetailHabitacion = async (req, res) => {
  try {
    const habitacion = await Habitaciones.findByPk(req.params.id);

    if (!habitacion) {
      return res.status(404).json({ error: "Habitación no encontrada" });
    }

    res.json(habitacion);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { DetailHabitacion };