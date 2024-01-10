const {CreateDesarrollador}= require ('../..//Controladores/controllers_Desarrolladores/PostDesarrollador')
const HandlerPostDesarrollador = async (req, res) => {
    try {
      const newUser = await CreateDesarrollador(req, res);
      res.status(201).json(newUser); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  };
  
module.exports = { HandlerPostDesarrollador };