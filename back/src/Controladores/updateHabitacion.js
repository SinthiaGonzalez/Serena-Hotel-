const Sequelize = require("sequelize");
const { Habitaciones } = require("../db.js");

const updateHabitacion = async (  
  nombre,
  precio,
  imagenes,
  servicios,
  descripcion,
  estado) => {

    console.log("aqui", nombre, precio, imagenes, servicios, descripcion, estado);

    let habitacion = await Habitaciones.findOne({
      where: {
        nombre: nombre,
      }
    });
    console.log("este", habitacion) 

    if (!habitacion) {
      return 'No existe una habitacion con ese nombre' ;
    }
    
    habitacion.nombre = nombre;
    habitacion.precio = precio;
    habitacion.imagenes = imagenes;
    habitacion.servicios = servicios;
    habitacion.descripcion = descripcion;
    habitacion.estado = estado;

    await habitacion.save();

    return habitacion;

}

module.exports = { updateHabitacion };