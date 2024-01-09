const { postReservas } = require("../Controladores/postReservas");

const postReservasHandler = async (req, res) => {
  try {
    const { fecha_entrada, fecha_salida, estado, habitaciones } = req.body;
    const respuesta = await postReservas(
      fecha_entrada,
      fecha_salida,
      estado,
      habitaciones
    );
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { postReservasHandler };
