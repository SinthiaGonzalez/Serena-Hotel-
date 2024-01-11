const { getHabitaciones } = require("../Controladores/getHabitaciones");
const { postHabitaciones } = require("../Controladores/postHabitaciones");
const { updateHabitacion } = require("../Controladores/updateHabitacion");
const postHabitacionHandler = async (req, res) => {
  try {
    
    const { nombre, precio, imagenes, servicios, descripcion, estado } = req.body;

    const respuesta = await postHabitaciones(
      nombre,
      precio,
      imagenes,
      servicios,
      descripcion,
      estado
    );
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getHabitacionHandler = async (req, res) => {
  try {
    const response = await getHabitaciones();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const updateHabitacionHandler = async (req, res) => {
  try {
    
    const { nombre, precio, imagenes, servicios, descripcion, estado } = req.body;

    const respuesta = await updateHabitacion(
      nombre,
      precio,
      imagenes,
      servicios,
      descripcion,
      estado
    );
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getHabitacionHandler,
  postHabitacionHandler,
  updateHabitacionHandler
};
