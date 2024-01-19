const { Reservas, Habitaciones } = require("../db.js");
/* 
**Si en la ruta ingreso ID del usuario: trae las Reservas de ese Usuario.
**Si en la ruta NO ingreso un ID: trae TODAS las Reservas existentes.
*/
const getReservasPorUsuarioId = async (req, res) => {
  try{    
    const { id } = req.query;  
    console.log("id de getreservas por id",id)
    if (id){ //traigo las reservas de ese usuario
      const reservasPorUsuarioId = await Reservas.findAll({
        include: Habitaciones,
        where: { usuarioId:id } 
      });
      if (reservasPorUsuarioId == 0) {
        return res.status(404).json({ error: 'No se encontró ninguna Reserva con el ID de Usuario proporcionado' });
      }
      let objToResponse = []
      reservasPorUsuarioId.forEach(reserva => {
        console.log(reserva.fecha_entrada)
        reserva.Habitaciones.forEach(habitacion => {
          
          objToResponse.push(
          {
            "id_reserva": reserva.id,
            "nombre_habitacion": habitacion.nombre, 
            "fecha_entrada": reserva.fecha_entrada,
            "fecha_salida": reserva.fecha_salida,
            
          })
        });
      });
      //res.status(200).json(reservasPorUsuarioId);
      res.status(200).json(objToResponse);
    }else{ ////traigo TODAS las reservas 
      const todasLasReservas = await Reservas.findAll({
        include: Habitaciones,
      });
      if (todasLasReservas == 0) {
        return res.status(404).json({ error: 'No se encontró ninguna Reserva' });
      }
      res.status(200).json(todasLasReservas);
    }
  } catch (error) {    
    console.error("Error en getReservasPorUsuarioId:", error);
    return res.status(500).json({ error: 'Error interno del servidor' });
  }
};

module.exports = { getReservasPorUsuarioId };
