const { CreateUsuario } = require('../../Controllers/controllers_Usuaruios/PostUsuario');

const HandlerPostUsuario = async (req, res) => {
  try {
    await CreateUsuario(req, res);
  } catch (error) {
    res.status(500).json({ error: 'Error al crear el usuario' });
  }
};

module.exports = { HandlerPostUsuario };
