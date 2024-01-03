const Sequelize = require('sequelize');
const { Habitaciones } = require("../db.js");



const postHabitaciones = async (req, res) => {
    try {
        const { nombre, precio, imagen, servicios} = req.body;
        console.log("aqui",nombre,precio,imagen,servicios);
        if (!nombre || !precio || !imagen || !servicios) {
            return res.status(400).send('faltan datos')
        }
        const [habitacion, creado] = await Habitaciones.findOrCreate({
            where: { nombre },
            defaults: { precio, imagen, servicios }
          });
        
          if (!creado) {
            return "El perro ya existe";
          }
        return res.status(200).json(habitacion);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}
module.exports = { postHabitaciones };
