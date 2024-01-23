const Sequelize = require("sequelize");
const { Usuario } = require("../../db");

const updateUsuario = async (id, name, apellido, email, telefono, contraseña, isadmin, imagen) => {
  console.log("aqui en put usuario", id, name, apellido, email, telefono, contraseña, isadmin, imagen,)


  let user = await Usuario.findByPk(id);
  if (!user) return "No se encontro el usuario"

  if (name !== "") {
    user.name = name;
  }
  if (apellido !== "") {
    user.apellido = apellido;
  }
  if (email !== "") {
    user.email = email;
  }
  if (telefono !== "") {
    user.telefono = telefono;
  }

  if (contraseña !== "") {
    user.contraseña = contraseña;
  }
  user.isadmin = isadmin;
 
  if (imagen !== "") {
    user.imagen = imagen;
  }

  await user.save();

        return user;       
      
};



const updateEstadoUsuario = async (  id, estadoElegido) => {
  console.log("log argumentos upDateEstadoUsuarios", id, estadoElegido) 

  let user = await Usuario.findByPk(id);

  if (!user) return "No se encontro el usuario"

  user.estado = estadoElegido
  await user.save();

  return user;
};

  module.exports = { updateUsuario, updateEstadoUsuario };

