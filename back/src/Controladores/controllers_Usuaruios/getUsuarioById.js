const { Usuario } = require("../../db.js");
const getUsuarioById = async (id) => {
 
  const usuario = Usuario.findByPk(id);
  console.log(usuario)

  if(!usuario) return "No se encontro el usuario"

  return usuario;
};

module.exports = { getUsuarioById };
