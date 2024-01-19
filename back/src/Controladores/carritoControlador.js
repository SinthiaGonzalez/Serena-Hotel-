const { Carrito, Habitaciones } = require("../db");

const addHabitacionToCarrito = async (req, res) => {
  try {
    const id = req.params.id;

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

    res.status(200).json({
      message: "Habitación añadida al carrito con éxito.",
      carrito: carrito,
      habitacion: habitacion,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: "Error al añadir la habitación al carrito.",
      details: error.message,
    });
  }
};
const getCarrito = async (req, res) => {
  try {
    const carrito = await Carrito.findAll({
      include: [{ model: Habitaciones, through: "CarritoHabitacion" }],
    });

    const habitacionesEnCarrito = carrito.flatMap((item) => item.Habitaciones);

    res.status(200).json(habitacionesEnCarrito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el carrito." });
  }
};
const deleteCarrito = async (req, res) => {
  const id = req.params.id;

  try {
    const carrito = await Carrito.findOne({
      include: [{ model: Habitaciones, through: "CarritoHabitacion" }],
    });

    if (!carrito) {
      return res.status(404).json({ error: "Carrito no encontrado." });
    }

    const rowsDeleted = await carrito.removeHabitaciones([id]);

    if (rowsDeleted === 0) {
      return res
        .status(404)
        .json({ error: "Habitación no encontrada en el carrito." });
    }

    const habitacionesRestantes = await carrito.getHabitaciones();

    res.status(200).json(habitacionesRestantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al borrar del carrito." });
  }
};

module.exports = { addHabitacionToCarrito, getCarrito, deleteCarrito };
