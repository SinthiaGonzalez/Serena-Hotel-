const { Usuario } = require('../../db');

const CreateUsuario = async (req, res) => {
  try {
    const { name, apellido, email, contrasena } = req.body;
    console.log('log de back', name, apellido, email, contrasena);
    // Validar si la solicitud proviene de Google
    const isFromGoogle = req.headers['user-agent'].includes('Google');

    // Ajustar la lógica de validación para manejar las solicitudes de Google
    if (!name || !apellido || !email || !contrasena) {
      res.status(400).json({ error: 'Faltan campos obligatorios' });
      return; // Importante: detener la ejecución aquí para evitar más respuestas
    }

    // Resto del código para crear el usuario
    const newUser = await Usuario.create({
      name,
      apellido,
      email,
      contrasena
    });

    res.status(201).json(newUser);
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { CreateUsuario };
