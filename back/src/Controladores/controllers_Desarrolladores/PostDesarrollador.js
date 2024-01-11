const {Desarrollador}= require('../../db')

const CreateDesarrollador = async (req, res) => {
    try {
      const { name, image, linkedin, github } = req.body;
  
    
      if (!name || !image || !linkedin || !github) {
        return res.status(400).json({ error: 'Faltan campos requeridos' });
      }
  
      const newDesarrollador = await Desarrollador.create({
        name,
        image,
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
