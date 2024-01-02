const { Comentario } = require('../db');


const TodosLosComentarios= async ()=>{

    try {
        const ComentariosTotal= await Comentario.findAll()

return ComentariosTotal
    } catch (error) {
       return ({ error: error.message });
    }

}

module.exports={TodosLosComentarios}