const { Comentario } = require('../db');

const ActualizarComentario = async (id, contenido) => { 
  try {
    const comentario = await Comentario.findByPk(id);

    if (!comentario) {
      return { error: 'Comentario no encontrado' }; 
    }

    await Comentario.update(
      { contenido },
      { where: { id } }
    );

    return { mensaje: 'Comentario actualizado exitosamente' }; 
  } catch (error) {
    throw new Error(error.message); 
  }
};

module.exports = { ActualizarComentario };
