const { Comentario } = require('../db');

const EliminarComentario = async (id) => { 
  try {
    if (!id) {
      throw new Error('El ID del comentario es inválido');
    }

    const comentarioEliminado = await Comentario.destroy({ where: { id } });

    if (comentarioEliminado === 0) {
      throw new Error('No se encontró ningún comentario con el ID proporcionado');
    }

    return 'Comentario eliminado exitosamente';
  } catch (error) {
    console.error('Error al eliminar el comentario:', error);
    throw new Error('No se pudo eliminar el comentario');
  }
};

module.exports = { EliminarComentario };
