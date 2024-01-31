const { Carrito, Habitaciones, Usuario } = require("../db");

const addHabitacionToCarrito = async (req, res) => {
  try {
    const { idUser, idHabitacion } = req.body;

    console.log("ID del usuario:", idUser);
    console.log("ID de la habitación recibido:", idHabitacion);

    let carrito = await Carrito.findOne({
      where: { usuarioId: idUser },
      include: [{ model: Habitaciones }],
    });

    if (!carrito) {
      carrito = await Carrito.create({});
      await carrito.setUsuario(idUser);
    }

    console.log("Carrito actual:", carrito);

    const habitacion = await Habitaciones.findByPk(idHabitacion);

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
    const { id } = req.params;

    const carrito = await Carrito.findOne({
      where: { usuarioId: id },
      include: [{ model: Habitaciones, through: "CarritoHabitacion" }],
    });

    if (!carrito) {
      return res.status(404).json({ error: "Carrito no encontrado." });
    }

    const habitacionesEnCarrito = carrito.Habitaciones;

    res.status(200).json(habitacionesEnCarrito);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al obtener el carrito." });
  }
};
const deleteCarrito = async (req, res) => {
  const { id, userId } = req.query;
  console.log("userId", userId, "id", id);
  try {
    const carritoUsuario = await Carrito.findOne({
      where: { usuarioId: userId },
      include: [{ model: Habitaciones, through: "CarritoHabitacion" }],
    });
    console.log(carritoUsuario);
    if (!carritoUsuario) {
      return res
        .status(404)
        .json({ error: "Carrito no encontrado para este usuario." });
    }

    const rowsDeleted = await carritoUsuario.removeHabitaciones(id);

    if (rowsDeleted === 0) {
      return res
        .status(404)
        .json({ error: "Habitación no encontrada en el carrito." });
    }

    const habitacionesRestantes = await carritoUsuario.getHabitaciones();

    res.status(200).json(habitacionesRestantes);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Error al borrar del carrito." });
  }
};

module.exports = { addHabitacionToCarrito, getCarrito, deleteCarrito };
