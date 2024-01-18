const Sequelize = require("sequelize");
const { Usuario } = require("../../db");

const updateUsuario = async (  id, name, apellido, email, telefono, contraseña,isadmin) => {
        console.log("aqui", id, name, apellido, email, telefono, contraseña)
       
        
        let user = await Usuario.findByPk(id);
        if (!user) return "No se encontro el usuario"

          user.name = name;
          user.apellido = apellido;
          user.email = email;
          user.telefono = telefono;
          user.contraseña = contraseña;
          user.isadmin = isadmin;
        
        await user.save();

        return user;
        
      
    };
    
  module.exports = { updateUsuario };