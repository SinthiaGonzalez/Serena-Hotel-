const { getHabitaciones } = require("../Controladores/getHabitaciones");
const { postHabitaciones } = require("../Controladores/postHabitaciones");
<<<<<<< HEAD
const { EliminarHabitacion } = require("../Controladores/controllers_Usuaruios/EliminarHabitacion")
const { updateHabitacion } = require("../Controladores/updateHabitacion");
=======

const { EliminarHabitacion } = require("../Controladores/controllers_Usuaruios/EliminarHabitacion")

const { updateHabitacion } = require("../Controladores/updateHabitacion");

>>>>>>> cd8f1afbe656ad4b9e0adb979f9df61207c7a57c
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

<<<<<<< HEAD
=======

>>>>>>> cd8f1afbe656ad4b9e0adb979f9df61207c7a57c
const eliminarHabitacionHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await EliminarHabitacion(id);
    return res.status(200).json({ mensaje: 'Habitación eliminada exitosamente' });
<<<<<<< HEAD
  } catch (error) {
    res.status(400).json({ error: error.message });
  }}
=======
>>>>>>> cd8f1afbe656ad4b9e0adb979f9df61207c7a57c

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
<<<<<<< HEAD
=======

>>>>>>> cd8f1afbe656ad4b9e0adb979f9df61207c7a57c
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = {
  getHabitacionHandler,
  postHabitacionHandler,
<<<<<<< HEAD
  eliminarHabitacionHandler,
  updateHabitacionHandler
=======

  eliminarHabitacionHandler

  updateHabitacionHandler

>>>>>>> cd8f1afbe656ad4b9e0adb979f9df61207c7a57c
};
