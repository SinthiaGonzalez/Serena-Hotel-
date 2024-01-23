const { Reservas } = require("../db");

const deleteReservas = async (id) => {

    const reserva = Reservas.findByPk(id);

    if (!reserva) return "No se encontro la reserva"

    else await Reservas.destroy({ where: { id } });

    return "Reserva eliminada exitosamente"; 
}

module.exports = { deleteReservas };