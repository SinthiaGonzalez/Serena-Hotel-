const Sequelize = require("sequelize");
const { Usuario } = require("../../db");

const deleteUsuario = async ( id ) => {

        if (!id ) {
          return 'No se recibio el Id del Usuario';
        }
        
        let user = await Usuario.findByPk(id);
        if (!user) return "No se encontro el usuario"
        
        await Usuario.destroy({ where: { id } });

        return "Usuario eliminado exitosamente";
        
      
    };
    
  module.exports = { deleteUsuario };