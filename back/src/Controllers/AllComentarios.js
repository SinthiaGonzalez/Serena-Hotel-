const { Comentario } = require('../db');


const TodosLosComentarios= async ()=>{

    try {
        const ComentariosTotal= await Comentario.findAll()

return ComentariosTotal
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }

}

module.exports={TodosLosComentarios}