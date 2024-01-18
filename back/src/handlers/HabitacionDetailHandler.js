const { DetailHabitacion  } = require('../Controladores/HabitacionesDetail');

// Manejador para buscar una habitación por su ID en la base de datos
const HanlderHabitacionDetail = async (req,res) => {
  try {
    const habitacion = await DetailHabitacion(req, res);
    return habitacion;
  } catch (error) {
    throw new Error("Error al obtener los detalles de la habitación");
  }
};

module.exports = { HanlderHabitacionDetail };