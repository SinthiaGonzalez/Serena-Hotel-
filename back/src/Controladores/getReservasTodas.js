const { Reservas, Habitaciones, Usuario } = require("../db.js");

const getReservasTodas = async (req, res) => {
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

      return reserva.Habitaciones.map((habitacion) => ({
        nombre_y_apellido: usuario_data.name + " " + usuario_data.apellido,
        email: usuario_data.email,
        telefono: usuario_data.telefono,
        id_reserva: reserva.id,
        nombre_habitacion: habitacion.nombre,
        fecha_entrada: reserva.fecha_entrada,
        fecha_salida: reserva.fecha_salida,
        estado_habitacion: habitacion.estado,
      }));
    }));

    const flattenedArray = [].concat(...objToResponse);

    res.status(200).json(flattenedArray);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getReservasTodas };
