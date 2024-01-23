const { getUsuarios } = require("../../Controladores/controllers_Usuaruios/GetUsuarios");
const { getUsuarioById } =require("../../Controladores/controllers_Usuaruios/getUsuarioById") 

const getHandlerUsuarios = async (req, res) => {
  try {
    const response = await getUsuarios();
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getUsuarioByIdHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const response = await getUsuarioById(id);
    res.status(200).json(response);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getHandlerUsuarios,
  getUsuarioByIdHandler
};