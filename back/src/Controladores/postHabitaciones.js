const Sequelize = require('sequelize');
const { Habitaciones } = require("../db.js");
const cloudinary = require('../utils/cloudinary');


const postHabitaciones = async ( nombre, precio, imagen, servicios, descripcion) => {

        console.log("aqui",nombre,precio,imagen,servicios, descripcion);

        const result = await cloudinary.uploader.upload(imagen, {
          folder: "habitaciones"
        })
        if (!nombre || !precio || !imagen || !servicios || !descripcion) {
            return 'faltan datos'
        }
        const prueba = await Habitaciones.findOne(({ where: { nombre: nombre } }))
        if (prueba) return "La habitacion ya existe";
        else {
          const habitacion = await Habitaciones.create({
            nombre,
            precio,
            imagen:{
              public_id: result.public_id,
              url: result.secure_url
            },
            servicios,
            descripcion
          })
          return habitacion;
        } 
}
module.exports = { postHabitaciones };
