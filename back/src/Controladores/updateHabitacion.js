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
        id: nombreId,
      }
    });
    console.log("este", habitacion);

    if (!habitacion) {
      return 'No existe una habitacion con ese nombre' ;
    }
    
    if (nombre !== "") {
      habitacion.nombre = nombre;
    }
    if (precio !== "") {
      habitacion.precio = precio;
    }
    if (imagenes !== "") {
      habitacion.imagenes = imagenes;
    }
    if (servicios !== "") {
      habitacion.servicios = servicios;
    }
  
    if (descripcion !== "") {
      habitacion.descripcion = descripcion;
    }

    if (estado !== "") {
      habitacion.estado = estado;
    }
    await habitacion.save();

    return habitacion;

}

module.exports = { updateHabitacion };