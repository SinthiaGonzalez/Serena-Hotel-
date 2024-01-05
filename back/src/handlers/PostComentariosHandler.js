const { CreateComentario } = require('../Controladores/PostComentarios');

const HandlerPostComentarios = async (req, res) => {
  try {
    const respuesta = await CreateComentario(req, res); 
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { HandlerPostComentarios };
