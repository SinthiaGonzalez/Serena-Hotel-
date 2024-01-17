const {Usuario}= require('../../db')

const CreateUsuario = async (req, res) => {
    try {
      const { name, apellido, email, telefono, contraseña, isAdmin } = req.body;
  
    
      if (!name || !apellido || !email || !telefono || !contraseña || !isAdmin) {
        return 'Faltan campos requeridos' ;
      }

      const prueba = await Usuario.findOne({ where: { email: email } });
  if (prueba) return "Ya existe un usuario vinculado a ese correo";
  
      const newUser = await Usuario.create({
        name,
        apellido,
        email,
        telefono,
        contraseña,
        logueado: true,
        isAdmin: false
      });
  
      return newUser; 
    } catch (error) {
      console.log(error);
      throw new Error(error.message); 
    }
  };
  
module.exports = { CreateUsuario };