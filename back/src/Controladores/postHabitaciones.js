const Sequelize = require("sequelize");
const { Habitaciones } = require("../db.js");

const postHabitaciones = async (
  nombre,
  precio,
  imagen,
  servicios,
  descripcion
) => {
  console.log("aqui", nombre, precio, imagen, servicios, descripcion);
  if (!nombre || !precio || !imagen || !servicios || !descripcion) {
    return "faltan datos";
  }
  const [habitacion, creado] = await Habitaciones.findOrCreate({
    where: { nombre },
    defaults: { precio, imagen, servicios, descripcion },
  });

  if (!creado) {
    return "La habitacion ya existe";
  }
  return habitacion;
};
module.exports = { postHabitaciones };
