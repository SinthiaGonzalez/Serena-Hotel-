const nodemailer = require("nodemailer");
const { transporter } = require("./NodeMailerTransporter");

const EnvioMailContactenos = async (req, res) => {
  const { nombre, correo, telefono, mensaje } = req.body;

  try {
    const mailOptions = {
      from: '"Serena Hotel" <serenahotel25@gmail.com>',
      to: "serenahotel25@gmail.com",
      subject: "Consulta del formulario de contacto",
      html: `
        <p><strong>Nombre:</strong> ${nombre}</p>
        <p><strong>Correo:</strong> ${correo}</p>
        <p><strong>Teléfono:</strong> ${telefono}</p>
        <p><strong>Mensaje:</strong> ${mensaje}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: "Consulta enviada correctamente" });
  } catch (error) {
    console.error("Error durante el envío del correo:", error);
    res.status(500).json({ error: "Error al enviar la consulta" });
  }
};

module.exports = { EnvioMailContactenos };
