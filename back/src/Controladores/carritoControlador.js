const { Carrito, Habitaciones } = require("../db");

const addHabitacionToCarrito = async (req, res) => {
  try {
    // Obtener el id de la habitación desde el cuerpo de la solicitud
    const id = req.body.id;

    // Mostrar en la consola el id recibido
    console.log("ID recibido:", id);

    // Obtener o crear el carrito actual
    let carrito = await Carrito.findOne({
      include: [{ model: Habitaciones }],
    });

    if (!carrito) {
      carrito = await Carrito.create({});
    }

    // Mostrar en la consola el carrito actual
    console.log("Carrito actual:", carrito);

    // Buscar la habitación por el id
    const habitacion = await Habitaciones.findByPk(id);

    // Mostrar en la consola la habitación encontrada
    console.log("Habitación encontrada:", habitacion);

    // Verificar si la habitación es null o undefined
    if (!habitacion) {
      return res.status(404).json({ error: "Habitación no encontrada." });
    }

    // Añadir la habitación al carrito
    await carrito.addHabitaciones(habitacion);

    // Enviar respuesta de éxito
    res
      .status(200)
      .json({ message: "Habitación añadida al carrito con éxito." });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Error al añadir la habitación al carrito." });
  }
};
const getCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findAll({
      include: [{ model: Habitaciones }],
    });
    res.status(200).json(carrito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el carrito." });
  }
};
module.exports = { addHabitacionToCarrito, getCarrito };
