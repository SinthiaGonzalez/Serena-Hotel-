const { Pago } = require("../db");
const {
  buscarHabitacionenCarritoUsuario,
} = require("./BuscaHabitacionenCarritoUsuario");
const manejoRespuestaMP = async (status, id, external_reference) => {
  const statusPago = status;
  const idPago = id;
  const external_reference1 = JSON.parse(external_reference);
  const idusuario = external_reference1.idusuario;
  const fecha_entrada = external_reference1.fecha_entrada;
  const fecha_salida = external_reference1.fecha_salida;
  try {
    const pagoExistente = await Pago.findOne({
      where: {
        usuarioId: idusuario,
        id_mp: idPago,
      },
    });
    if (!pagoExistente) {
      // si el pago no existe creamos uno asosiado al usuario
      const pago = await Pago.create({
        id_mp: idPago,
        estado: statusPago,
        usuarioId: idusuario,
      });
    } else {
      console.log("El pago ya existe, no se realiza ninguna modificación");
    }
    if (statusPago === "approved") {
      buscarHabitacionenCarritoUsuario(
        statusPago,
        idusuario,
        fecha_entrada,
        fecha_salida
      );
    } else {
      console.log("No se ha realizado el pago");
    }
  } catch (error) {
    console.log(error.message);
  }
};

module.exports = { manejoRespuestaMP };
