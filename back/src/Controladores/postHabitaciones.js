const Sequelize = require("sequelize");
const { Habitaciones } = require("../db.js");
const cloudinary = require("../utils/cloudinary");

const postHabitaciones = async (
  nombre,
  precio,
  imagenes,
  servicios,
  descripcion,
  estado,
  tipo
) => {
  console.log(
    "aqui",
    nombre,
    precio,
    imagenes,
    servicios,
    descripcion,
    estado,
    tipo
  );

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
    arrayImagen = [];
    for (let x = 0; x < imagenes.length; x++) {
      arrayImagen[x] = {
        public_id: result[x].public_id,
        url: result[x].secure_url,
      };
    }
    const habitacion = await Habitaciones.create({
      nombre,
      precio,
      imagenes: arrayImagen,
      servicios,
      descripcion,
      estado,
      tipo,
    });
    return habitacion;
  }
};
module.exports = { postHabitaciones };
