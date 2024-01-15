const {Usuario}= require('../../db')

const CreateUsuario = async (req, res) => {
    try {
      const { name, apellido, email, telefono, contraseña } = req.body;
  
    
      if (!name || !apellido || !email || !telefono || !contraseña) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }
  
      const newUser = await Usuario.create({
        name,
        apellido,
        email,
        telefono,
        contraseña,
        logueado: true,
      });
  
      return newUser; 
    } catch (error) {
      console.log(error);
      throw new Error(error.message); 
    }
  };
  
module.exports = { CreateUsuario };