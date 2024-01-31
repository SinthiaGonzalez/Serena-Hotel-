// Importar el modelo de Usuario
const { Usuario } = require("../../../db");
const { EnviarNuevaClave } = require("./EnviarNuevaClave");

const generarNuevaContraseña = () => {
  const nuevaContraseña = Math.random().toString(36).slice(-8);
  return nuevaContraseña;
};

const RecuperarUsuario = async (req, res) => {
  const { correo } = req.body;

  try {
    if (!correo) {
      return res.status(400).json({ error: "Correo no proporcionado" });
    }

    const usuario = await Usuario.findOne({ where: { email: correo } });

    if (usuario) {
      if (usuario.estado === "eliminar") {
        const nuevaContraseña = generarNuevaContraseña();

        usuario.estado = "activo"; // Debes utilizar una cadena de texto para comparar con "activo"
        usuario.contraseña = nuevaContraseña;
        await usuario.save();

        const mailDeNotificacion = {
          destinatario: correo,
          asunto: "Recuperación de Usuario",
          mensaje: `
            <html>
                  <h1>Recuperación de Usuario</h1>
                  <p>¡Felicitaciones! Has recuperado tu usuario ${correo}.</p>
                  <p>Tu nueva contraseña es: ${nuevaContraseña}</p>
            </html>
          `,
        };

        const envioDeClave = await EnviarNuevaClave(mailDeNotificacion);

        if (envioDeClave.success) {
          return res
            .status(200)
            .json({ message: "Nueva contraseña enviada con éxito" });
        } else {
          console.error(envioDeClave.error);
          return res
            .status(500)
            .json({ error: "Error al enviar la notificación por correo" });
        }
      } else {
        return res
          .status(400)
          .json({ error: "El usuario no está marcado como eliminado" });
      }
    } else {
      return res.status(404).json({ error: "Usuario no encontrado" });
    }
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al procesar la solicitud" });
  }
};

module.exports = { RecuperarUsuario };
