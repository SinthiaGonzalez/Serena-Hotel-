const { Habitaciones } = require("../db.js");
const getHabitaciones = async () => {
 
  const habitaciones = Habitaciones.findAll();

  return habitaciones;
};

module.exports = { getHabitaciones };
