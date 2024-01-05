const Sequelize = require('sequelize');
const { Habitaciones } = require("../db.js");
const cloudinary = require('../utils/cloudinary');


const postHabitaciones = async ( nombre, precio, imagen, servicios, descripcion) => {

        console.log("aqui",nombre,precio,imagen,servicios, descripcion);

        const result = [];
        for (let i = 0; i < imagen.length; i++) {
          result[i] = await cloudinary.uploader.upload(imagen[i], {
          folder: "habitaciones"
        })
      }
        if (!nombre || !precio || !imagen || !servicios || !descripcion) {
            return 'faltan datos'
        }
        const prueba = await Habitaciones.findOne(({ where: { nombre: nombre } }))
        if (prueba) return "La habitacion ya existe";
        else {
          arrayImagen = [];
          for (let x = 0; x < imagen.length; x++) {
            arrayImagen[x] = {
              public_id: result[x].public_id,
              url: result[x].secure_url
            }
          }
          const habitacion = await Habitaciones.create({
            nombre,
            precio,
            imagen: arrayImagen,
            servicios,
            descripcion
          })
          return habitacion;
        } 
}
module.exports = { postHabitaciones };
