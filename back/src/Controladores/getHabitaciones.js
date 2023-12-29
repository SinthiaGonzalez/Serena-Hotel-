const Habitaciones = require("../models/Habitaciones");
const getHabitaciones = async (req, res) => {
  try {
    const habitaciones = await Habitaciones.create();
    console.log(habitaciones);
    return res.status(200).json(habitaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getHabitaciones };
