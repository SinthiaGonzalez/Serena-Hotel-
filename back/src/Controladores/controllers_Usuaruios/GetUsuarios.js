const { Usuario } = require("../../db.js");
const getUsuarios = async () => {
 
  const usuarios = Usuario.findAll({
    order: ['id'],
  });
  console.log(usuarios)

  return usuarios;
};

module.exports = { getUsuarios };
