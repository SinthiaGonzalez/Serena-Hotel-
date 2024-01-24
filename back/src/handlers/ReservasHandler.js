const { postReservas } = require("../../src/Controladores/postReservas.js")
const { deleteReservas } = require("../../src/Controladores/deleteReservas.js")

const postReservasHandler = async (req, res) => {
  try {
    const { fecha_entrada, fecha_salida, estado, habitaciones, usuarioId } = req.body;
    const respuesta = await postReservas(
      fecha_entrada,
      fecha_salida,
      estado,
      habitaciones,
      usuarioId
    );
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const deleteReservasHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await deleteReservas(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}
module.exports = { 
  postReservasHandler,
  deleteReservasHandler
}