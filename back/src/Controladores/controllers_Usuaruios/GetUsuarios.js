const { Usuario } = require("../../db.js");
const getUsuarios = async () => {
 
  const usuarios = Usuario.findAll();
  console.log(usuarios)

  return usuarios;
};

module.exports = { getUsuarios };
