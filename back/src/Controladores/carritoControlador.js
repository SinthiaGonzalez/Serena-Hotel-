const { Carrito, Habitaciones } = require("../db");

const addHabitacionToCarrito = async (req, res) => {
  try {
    const id = req.body.id;

    console.log("ID recibido:", id);

    let carrito = await Carrito.findOne({
      include: [{ model: Habitaciones }],
    });

    if (!carrito) {
      carrito = await Carrito.create({});
    }

    console.log("Carrito actual:", carrito);

    const habitacion = await Habitaciones.findByPk(id);

    console.log("Habitación encontrada:", habitacion);

    if (!habitacion) {
      return res.status(404).json({ error: "Habitación no encontrada." });
    }

    await carrito.addHabitaciones(habitacion);

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
