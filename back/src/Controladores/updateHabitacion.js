const Sequelize = require("sequelize");
const { Habitaciones } = require("../db.js");

const updateHabitacion = async (  
  nombreId,
  nombre,
  precio,
  imagenes,
  servicios,
  descripcion,
  estado) => {

    console.log("aqui", nombreId, nombre, precio, imagenes, servicios, descripcion, estado);

    let habitacion = await Habitaciones.findOne({
      where: {
        nombre: nombreId,
      }
    });
    console.log("este", habitacion);

    if (!habitacion) {
      return 'No existe una habitacion con ese nombre' ;
    }
    
    if (nombre !== "") {
      user.nombre = nombre;
    }
    if (precio !== "") {
      user.precio = precio;
    }
    if (imagenes !== "") {
      user.imagenes = imagenes;
    }
    if (servicios !== "") {
      user.servicios = servicios;
    }
  
    if (descripcion !== "") {
      user.descripcion = descripcion;
    }

    if (estado !== "") {
      user.estado = estado;
    }
    await habitacion.save();

    return habitacion;

}

module.exports = { updateHabitacion };