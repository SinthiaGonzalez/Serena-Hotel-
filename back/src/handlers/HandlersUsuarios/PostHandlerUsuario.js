const {CreateUsuario}= require ('../..//Controladores/controllers_Usuaruios/PostUsuario')
const HandlerPostUsuario = async (req, res) => {
    try {
      const newUser = await CreateUsuario(req, res);
      if (newUser==="Ya existe un usuario vinculado a ese correo") return res.status(400).json(newUser);
      res.status(201).json(newUser); 
    } catch (error) {
      res.status(500).json({ error: error.message }); 
    }
  };
  
module.exports = { HandlerPostUsuario };