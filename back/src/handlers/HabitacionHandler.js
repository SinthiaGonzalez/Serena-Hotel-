const { getHabitaciones } = require("../Controladores/getHabitaciones");
const { postHabitaciones } = require("../Controladores/postHabitaciones");
const postHabitacionHandler = async (req, res) => {
  try {
    const { nombre, precio, imagenes, servicios, descripcion } = req.body;
    const respuesta = await postHabitaciones(
      nombre,
      precio,
      imagenes,
      servicios,
      descripcion
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

module.exports = {
  getHabitacionHandler,
  postHabitacionHandler,
};
