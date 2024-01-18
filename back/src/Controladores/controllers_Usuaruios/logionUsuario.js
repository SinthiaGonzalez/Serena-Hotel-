// Importar el modelo de Usuario
const { Usuario } = require('../../db');

// Ruta PUT para cambiar el estado de logueo del usuario o crear un nuevo usuario
const LoginUsuario = async (req, res) => {
  try {
    const { email, name, apellido } = req.body;

    // Verificar si el usuario existe en la base de datos
    const usuario = await Usuario.findOne({ where: { email } });

    if (!usuario) {
      const telefono = null; // Definir el teléfono como nulo por defecto
      const contraseña = null; // Definir la contraseña como nula por defecto

      const newUser = await Usuario.create({
        name,
        apellido,
        email,
        telefono,
        contraseña: null,
        logueado: true, // Establecer el estado de logueo como true para el nuevo usuario
        isAdmin: false 
      });
console.log('usuario registrado exitosamente');
      return res.status(200).json({ message: 'Usuario registrado exitosamente', newUser });
    }

    if (usuario.logueado) {
      console.log('El usuario ya está logueado');
      return res.status(200).json({ message: 'El usuario ya está logueado' });
    }

    // Si el usuario es encontrado y no está logueado, cambiar el estado de logueo a true
    usuario.logueado = true;
    await usuario.save();


console.log('usuario logeado exitosamente');
     return res.status(200).json({ message: 'Usuario logueado exitosamente' });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { LoginUsuario };


