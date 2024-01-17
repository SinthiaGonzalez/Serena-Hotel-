const Sequelize = require("sequelize");
const { Habitaciones } = require("../db.js");
const cloudinary = require("../utils/cloudinary");

const postHabitaciones = async (
  nombre,
  precio,
  imagenes,
  servicios,
  descripcion,
  estado
) => {
  console.log("aqui", nombre, precio, imagenes, servicios, descripcion, estado);

  const result = [];
  for (let i = 0; i < imagenes.length; i++) {
    result[i] = await cloudinary.uploader.upload(imagenes[i], {
      folder: "habitaciones",
    });
  }
  if (
    !nombre ||
    !precio ||
    !imagenes ||
    !servicios ||
    !descripcion ||
    !estado
  ) {
    return "faltan datos";
  }
  const prueba = await Habitaciones.findOne({ where: { nombre: nombre } });
  if (prueba) return "La habitacion ya existe";
  else {
    const habitacion = await Habitaciones.create({
      nombre,
      precio,
      imagenes: imagenes,
      servicios,
      descripcion,
      estado,
    });
    return habitacion;
  }
};

module.exports = { postHabitaciones };
