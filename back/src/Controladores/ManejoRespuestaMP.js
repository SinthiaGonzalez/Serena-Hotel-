const {Pago} = require("../db");


const manejoRespuestaMP = async (status,id) => {
const idUsuario = 1; // esta harcodeado hay que traerlo 
const statusPago = status;
const idPago = id;
console.log("idUsuario: ",idUsuario,"statusPago: ",statusPago,"idPago: ",idPago);
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
        console.log("Nuevo pago creado y asociado al usuario en la base de datos");
    }else{
        console.log("El pago ya existe, no se realiza ninguna modificación");
    }
    if(statusPago==="approved"){
        ;}
// aca se ejecutaria la fucntion que busca las habitaciones que tiene el usuario en su carrito captura el id de ellas y las envia a la function post reservas que espera recibir por parametro este dato mas le fecha el id del usuario y el estado del mismo y todo esto solo ocure si el pago es aprobado


}catch(error){
    console.log(error.message);
}

};

module.exports = { manejoRespuestaMP }