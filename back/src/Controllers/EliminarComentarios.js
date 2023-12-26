const { Comentario } = require('../db');

const EliminarComentario = async (id) => { 
  try {
    const eliminar = await Comentario.destroy({ where: { id } });
    return 'comentario eliminado exitosamente';
  } catch (error) {
    throw new Error(error.message); 
  }
};

module.exports = { EliminarComentario };
