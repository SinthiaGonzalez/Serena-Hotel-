const { ActualizarComentario } = require('../Controladores/ActualizarComentarios');

const ActualizarComentarioHandler = async (req, res) => {
  try {
    const { id } = req.params; 
    const { contenido } = req.body; 
    const respuesta = await ActualizarComentario(id, contenido);
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { ActualizarComentarioHandler };
