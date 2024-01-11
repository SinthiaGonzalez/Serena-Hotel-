const {Desarrollador}= require('../../db')

const CreateDesarrollador = async (req, res) => {
    try {
      const { nombre, ocupacion, imagen, imagenFondo, linkedin, github } = req.body;
  
    
      if (!nombre || !ocupacion || !imagen || !imagenFondo || !linkedin || !github) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }
  
      const newDesarrollador = await Desarrollador.create({
        nombre,
        ocupacion,
        imagen,
        imagenFondo,
        linkedin,
        github,      
      });
  
      return newDesarrollador; 
    } catch (error) {
      console.log(error);
      throw new Error(error.message); 
    }
  };
  
module.exports = { CreateDesarrollador };
