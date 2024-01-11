const nodemailer = require("nodemailer");
const { google } = require("googleapis");
require("dotenv").config();


const EnvioMailContactenos = async (req, res) => {
  const { nombre, correo, telefono, mensaje } = req.body;

  try {
    console.log("Estoy en el manejador de correo");
   

    // Crear un cliente OAuth2
    const oAuth2Client = new google.auth.OAuth2(
      process.env.client_id,
      process.env.client_secret,
      process.env.redirect_ur
    );

    // Configurar el token de acceso con las credenciales
    oAuth2Client.setCredentials(
      process.env.refresh_token
    );

    // Crear un transporte de nodemailer utilizando OAuth2
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        type: "OAuth2",
        user: "serenahotel25@gmail.com",
        clientId: process.env.client_id,
        clientSecret: process.env.client_secret,
        refreshToken: process.env.refresh_token,
        accessToken: process.env.access_token,
      },
    });

    console.log("Transporter creado");

    // Configuración del correo
    const mailOptions = {
      from: `${correo}`,
      to: "serenahotel25@gmail.com",
      subject: "Consulta del formulario de contacto",
      text: `
      Nombre: ${nombre}
      Correo: ${correo}
      Teléfono: ${telefono}
      Mensaje: ${mensaje}`,
    };

    console.log("MailOptions configurado");

    // Envío del correo
    await transporter.sendMail(mailOptions);

    console.log("Correo enviado");

    res.status(200).json({ message: "Consulta enviada correctamente" });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Error al enviar la consulta" });
  }
};

module.exports = { EnvioMailContactenos };
