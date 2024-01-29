// Importar el modelo de Usuario
const { Usuario } = require("../../../db");
const { EnviarNuevaClave } = require("./EnviarNuevaClave");

const generarNuevaContraseña = () => {
  const nuevaContraseña = Math.random().toString(36).slice(-8);
  return nuevaContraseña;
};

const RecuperarContraseña = async (req, res) => {
  const { correo } = req.body;

  try {
    if (!correo) {
        return res.status(400).json({ error: "Correo no proporcionado" });
      }

    const usuario = await Usuario.findOne({ where: { email: correo } });

    if (usuario) {
      const nuevaContraseña = generarNuevaContraseña();

      usuario.contraseña = nuevaContraseña;
      await usuario.save();

      const mailDeNotificacion = {
        destinatario: correo,
        asunto: "Recuperación de Contraseña",
        mensaje: `Tu nueva contraseña es: ${nuevaContraseña}`,
      };

      const envioDeClave = await EnviarNuevaClave(mailDeNotificacion);

      if (envioDeClave.success) {
        return res.status(200).json({ message: "Nueva contraseña enviada con éxito" });
      } else {
        console.error(envioDeClave.error);
        return res.status(500).json({ error: "Error al enviar la notificación por correo" });
      }
    } else {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};

module.exports = { RecuperarContraseña };
