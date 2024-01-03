const {CreateUsuario}= require ('../../Controllers/controllers_Usuaruios/PostUsuario')

const HandlerPostUsuario = async (req, res) => {
    try {
      const newUser = await CreateUsuario(req, res);
      res.status(201).json(newUser); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  };
  
module.exports = { HandlerPostUsuario };