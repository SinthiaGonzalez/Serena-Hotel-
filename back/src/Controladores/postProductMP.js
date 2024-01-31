const Sequelize = require("sequelize");
const { Usuarioauxiliar } = require("../db.js");
require("dotenv").config();
const { MercadoPagoConfig, Preference } = require("mercadopago");

const CreatePreferenceMP = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken: process.env.YOUR_ACCESS_TOKEN,
  });
  const idusuario = req.body.userId;
  const fecha_entrada = req.body.fecha_entrada;
  const fecha_salida = req.body.fecha_salida;

  if (idusuario && fecha_entrada && fecha_salida) {
    try {
      const usuarioExistente = await Usuarioauxiliar.findOne({
        where: { iduser: idusuario },
      });

      if (usuarioExistente) {
        // El usuario ya existe, maneja la lógica según tus requisitos
        await Usuarioauxiliar.update(
          {
            fecha_entrada: fecha_entrada,
            fecha_salida: fecha_salida,
          },
          {
            where: {
              iduser: idusuario,
            },
          }
        );
      } else {
        // El usuario no existe, puedes proceder a crearlo
        await Usuarioauxiliar.create({
          iduser: idusuario,
          fecha_entrada: fecha_entrada,
          fecha_salida: fecha_salida,
        });
      }
    } catch (error) {
      console.error("Error:", error);
      // Puedes manejar el error de alguna manera aquí, como registrar el error o enviar una respuesta de error genérica.
    }
  }

  try {
    const body = {
      items: [
        {
          title: req.body.title,
          unit_price: Number(req.body.price),
          picture_url: req.body.picture_url,
          quantity: Number(req.body.quantity),
          currency_id: "ARS",
        },
      ],
      back_urls: {
        success: `${process.env.URL_NGROK_TEMPORAL}/success`,
        failure: `${process.env.URL_NGROK_TEMPORAL}/failure`,
        pending: `${process.env.URL_NGROK_TEMPORAL}/pending`,
      },
      // webhooks: [
      //   {
      //     url: `${process.env.URL_NGROK_TEMPORAL}/confirmaciondelpago`,
      //   },
      // ],
      // auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    res.status(500).send("Error al crear la preferencia");
  }
};

module.exports = { CreatePreferenceMP };
