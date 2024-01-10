const { getUsuarios } = require("../../Controladores/controllers_Usuaruios/GetUsuarios");


const getHandlerUsuarios = async (req, res) => {
  try {
    const response = await getUsuarios();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getHandlerUsuarios,
};