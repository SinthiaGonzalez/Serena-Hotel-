const { EliminarComentario } = require('../Controladores/EliminarComentarios');

const EliminarComentariosHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await EliminarComentario(id);
    return res.status(200).json({ mensaje: 'Comentario eliminado exitosamente' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { EliminarComentariosHandler };
