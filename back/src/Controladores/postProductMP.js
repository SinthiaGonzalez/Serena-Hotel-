const Sequelize = require("sequelize");
require("dotenv").config();
const { MercadoPagoConfig, Preference } = require("mercadopago");

const CreatePreferenceMP = async (req, res) => {
  const client = new MercadoPagoConfig({
    accessToken:
      "APP_USR-7280768752766794-122809-ca1be86a4bec57c675e7d576e6313452-1611759187",
  });
  const idusuario = req.body.userId;
  const fecha_entrada = req.body.fecha_entrada;
  const fecha_salida = req.body.fecha_salida;

  if (!idusuario || !fecha_entrada || !fecha_salida)
    return res.status(400).send("Faltan datos para crear la preferencia");

  try {
    const body = {
      external_reference: {
        idusuario: idusuario,
        fecha_entrada: fecha_entrada,
        fecha_salida: fecha_salida,
      },
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
      notification_url: `${process.env.URL_NGROK_TEMPORAL}/confirmaciondelpago`,
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    res.status(500).send("Error al crear la preferencia");
  }
};

module.exports = { CreatePreferenceMP };
