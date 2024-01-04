const { TodosLosComentarios } = require('../Controladores/AllComentarios');

const AllComentariosdHandler = async (req, res) => {
  try {
    const respuesta = await TodosLosComentarios();
    res.status(200).json(respuesta);
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { AllComentariosdHandler };
