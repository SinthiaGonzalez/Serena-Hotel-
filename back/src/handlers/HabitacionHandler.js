const { getHabitaciones } = require("../Controladores/getHabitaciones");
const { postHabitaciones } = require("../Controladores/postHabitaciones");

const {
  EliminarHabitacion,
} = require("../Controladores/controllers_Usuaruios/EliminarHabitacion");

const { updateHabitacion } = require("../Controladores/updateHabitacion");

const postHabitacionHandler = async (req, res) => {
  try {
    const { nombre, precio, imagenes, servicios, descripcion, estado } =
      req.body;

    const respuesta = await postHabitaciones(
      nombre,
      precio,
      imagenes,
      servicios,
      descripcion,
      estado
    );
    if (respuesta === "La habitacion ya existe")
      res.status(400).json(respuesta);
    else res.status(201).json(respuesta);
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

const eliminarHabitacionHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await EliminarHabitacion(id);
    return res
      .status(200)
      .json({ mensaje: "Habitación eliminada exitosamente" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }}

const updateHabitacionHandler = async (req, res) => {
  try {
    const {
      nombreId,
      nombre,
      precio,
      imagenes,
      servicios,
      descripcion,
      estado,
    } = req.body;

    const respuesta = await updateHabitacion(
      nombreId,
      nombre,
      precio,
      imagenes,
      servicios,
      descripcion,
      estado
    );
    if (respuesta === "No existe una habitacion con ese nombre")
      res.status(400).json(respuesta);
    else res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getHabitacionHandler,
  postHabitacionHandler,
  eliminarHabitacionHandler,
  updateHabitacionHandler,
};
