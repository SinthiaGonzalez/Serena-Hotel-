const { Usuario } = require("../db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginCreateToken = async (req, res) => {

    try {
      const { email, contraseña, name } = req.body;
      console.log('email', email,"nombre",name);
  
      if (!email) {
        res.status(400).json({ message: 'Debes proporcionar un correo electrónico' });
        return;
      }
  
      if (!contraseña && !name) {
        res.status(400).json({ message: 'Debes proporcionar al menos una credencial válida' });
        return;
      }
  
      let user;
  
      if (contraseña) {
        // Si se proporciona una contraseña, realiza la búsqueda por email y contraseña
        user = await Usuario.findOne({ where: { email, contraseña } });
      } else {
        // Si no se proporciona una contraseña, realiza la búsqueda por email y nombre
        user = await Usuario.findOne({ where: { email, name } });
      }
  
      if (!user) {
        res.status(400).json({ message: 'Usuario o contraseña inválidos' });
      } else {
        const userId = user.id;
        const isAdmin = user.isadmin;
        const imagen = user.imagen;
        const name = user.name;
        const estado = user.estado;
        const token = jwt.sign({ userId,isAdmin,imagen,name, estado}, process.env.ACCES_JWT, { expiresIn: '1h' });
        res.json({ message: 'Autenticación exitosa', token, userId, isAdmin, imagen,name, estado });
      }
    } catch (error) {
      console.error('Error al crear el token', error);
      res.status(500).json({ message: 'Error al crear el token' });
    }
  };
  
  module.exports = { loginCreateToken };
  