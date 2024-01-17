const nodemailer = require("nodemailer");
const { transporter } = require("../NodeMailerTransporter");

const EnviarNuevaClave = async (mailOptions) => {
  try {
    const { destinatario, asunto, mensaje } = mailOptions;

    if (!destinatario || !asunto || !mensaje) {
      throw new Error("Faltan campos requeridos para enviar el correo");
    }

    const options = {
      from: '"Serena Hotel" <serenahotel25@gmail.com>',
      to: destinatario,
      subject: asunto,
      html: `<p>${mensaje}</p>`,
    };

    await transporter.sendMail(options);

    return { success: true, message: "Notificación enviada correctamente" };
  } catch (error) {
    console.error("Error durante el envío del correo:", error);
    return { success: false, error: "Error al enviar la notificación por correo" };
  }
};

module.exports = { EnviarNuevaClave };
