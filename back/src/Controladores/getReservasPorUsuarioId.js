const { Reservas, Habitaciones } = require("../db.js");
/* 
**Si en la ruta ingreso ID del usuario: trae las Reservas de ese Usuario.
**Si en la ruta NO ingreso un ID: trae TODAS las Reservas existentes.
*/
const getReservasPorUsuarioId = async (req, res) => {
  try{    
    const { id } = req.query;  
    if (id){ //traigo las reservas de ese usuario
      const reservasPorUsuarioId = await Reservas.findAll({
        include: Habitaciones,
        where: { usuarioId:id } 
      });
      if (reservasPorUsuarioId == 0) {
        throw new Error('No se encontró ninguna Reserva con el ID de Usuario proporcionado');
      }
      /*
    let fecha1 = new Date("01/01/2022");
    let fecha2 = new Date("12/24/2022");
    let diferencia = fecha2.getTime() - fecha1.getTime();
    let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
    console.log(diasDeDiferencia); // resultado: 357
      */
      let objToResponse = []
      reservasPorUsuarioId.forEach(reserva => {
        console.log(reserva.fecha_entrada)
        let precioTotalReserva = 0
        reserva.Habitaciones.forEach(habitacion => {   
          let fecha1 = new Date(reserva.fecha_entrada);
          let fecha2 = new Date(reserva.fecha_salida);
          let diferencia = fecha2.getTime() - fecha1.getTime();
          //console.log(diasDeDiferencia); // resultado: 357
          let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
          precioTotalReserva += habitacion.precio * diasDeDiferencia
        });  
        reserva.Habitaciones.forEach(habitacion => {   
          objToResponse.push(
          {
            "id_reserva": reserva.id,
            "nombre_habitacion": habitacion.nombre, 
            "fecha_entrada": reserva.fecha_entrada,
            "fecha_salida": reserva.fecha_salida,
            "precioTotalReserva": precioTotalReserva,
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
        throw new Error('No se encontró ninguna Reserva con el ID de Usuario proporcionado');
      }
      res.status(200).json(todasLasReservas);
    }
  } catch (error) {    
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getReservasPorUsuarioId };

