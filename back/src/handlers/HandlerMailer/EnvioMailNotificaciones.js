const nodemailer = require("nodemailer");
const { transporter } = require("./NodeMailerTransporter");

const EnvioMailNotificaciones = async (req, res) => {
  const { destinatario, asunto, mensaje } = req.body;
  
  try {
    

    if (!destinatario || !asunto || !mensaje) {
      return res.status(400).json({ error: "Faltan campos requeridos" });
    }

    const mailOptions = {
      from: '"Serena Hotel" <serenahotel25@gmail.com>',
      to: destinatario,
      subject: asunto,
      html: `
        <p></strong> ${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Notificación enviada correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al enviar la consulta" });
  }
};

module.exports = { EnvioMailNotificaciones };
