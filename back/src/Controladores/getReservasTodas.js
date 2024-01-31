const { Reservas, Habitaciones, Usuario } = require("../db.js");

const getReservasTodas = async (req, res) => {
  console.log("entre a reservas")
  try {
    const reservas = await Reservas.findAll({
      include: Habitaciones
    });

    if (!reservas.length) {
      throw new Error('No se encontró ninguna Reserva');
    }

    const objToResponse = await Promise.all(reservas.map(async (reserva) => {
      const usuario_data = await Usuario.findByPk(reserva.usuarioId);

      if (!usuario_data) {
        throw new Error('No se encontraron los datos del Usuario correspondiente a esta Reserva');
      }

      let precioTotalReserva = 0
        reserva.Habitaciones.forEach(habitacion => {   
          let fecha1 = new Date(reserva.fecha_entrada);
          let fecha2 = new Date(reserva.fecha_salida);
          let diferencia = fecha2.getTime() - fecha1.getTime();
          //console.log(diasDeDiferencia); // resultado: 357
          let diasDeDiferencia = diferencia / 1000 / 60 / 60 / 24;
          precioTotalReserva += habitacion.precio * diasDeDiferencia
        });  


      return reserva.Habitaciones.map((habitacion) => (
        {
        nombre_y_apellido: usuario_data.name + " " + usuario_data.apellido,
        email: usuario_data.email,
        telefono: usuario_data.telefono,
        id_reserva: reserva.id,
        nombre_habitacion: habitacion.nombre,
        fecha_entrada: reserva.fecha_entrada,
        fecha_salida: reserva.fecha_salida,
        estado_habitacion: habitacion.estado,
        precio: precioTotalReserva,
      }));
    }));

    const flattenedArray = [].concat(...objToResponse);

    res.status(200).json(flattenedArray);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getReservasTodas };
