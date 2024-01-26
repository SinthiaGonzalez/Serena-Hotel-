const {Pago} = require("../db");
const {buscarHabitacionenCarritoUsuario } = require("./BuscaHabitacionenCarritoUsuario");
const {Usuarioauxiliar} = require('../db.js');
const manejoRespuestaMP = async (status,id) => {
const statusPago = status;
const idPago = id;
const usuarioauxiliar = await Usuarioauxiliar.findAll();
const idUsuario = usuarioauxiliar[0].dataValues.iduser;


try{
    const pagoExistente = await Pago.findOne({
        where: {
            usuarioId: idUsuario,
            id_mp: idPago

        }
    });
    if(!pagoExistente){
        // si el pago no existe creamos uno asosiado al usuario
        const pago = await Pago.create({
            id_mp: idPago,
            estado: statusPago,
            usuarioId: idUsuario
        });
    }else{
        console.log("El pago ya existe, no se realiza ninguna modificación");
    }
    if(statusPago==="approved"){
buscarHabitacionenCarritoUsuario(statusPago);
        ;}else {
            // Bloque de código para el caso de pago no aprobado
            console.log("No se ha realizado el pago");
            // Elimina todos los registros en Usuarioauxiliar
            await Usuarioauxiliar.destroy({
                where: {},
                truncate: true,
            });
        }

}catch(error){
    console.log(error.message);
}

};

module.exports = { manejoRespuestaMP }