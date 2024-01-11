const {getDesarrolladores} = require('../../Controladores/controllers_Desarrolladores/GetDesarroladores')

const GetHandlerDesarrolladores = async (req, res) => {
  try {
    const response = await getDesarrolladores();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  GetHandlerDesarrolladores,
};