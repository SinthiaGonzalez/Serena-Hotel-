const Sequelize = require("sequelize");
const { Usuario } = require("../../db");

const updateUsuario = async (  id, name, apellido, email, telefono, contraseña) => {

        if (!id || !name || !apellido || !email || !telefono || !contraseña) {
          return 'Faltan campos requeridos';
        }
        
        let user = await Usuario.findByPk(id);
        if (!user) return "No se encontro el usuario"

          user.name === name;
          user.apellido === apellido;
          user.email === email;
          user.telefono === telefono;
          user.contraseña === contraseña;
          user.logueado === true,
        
        await user.save();

        return user;
        
      
    };
    
  module.exports = { updateUsuario };