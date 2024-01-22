
const { MercadoPagoConfig, Preference, } = require("mercadopago");

const CreatePreferenceMP = async (req, res) => {
  const client = new MercadoPagoConfig({ accessToken: "TEST-7280768752766794-122809-47a53b66d4aff3b7fad1a49fdd6d753e-1611759187" });
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
        success:
          "https://b9f0-207-188-179-12.ngrok-free.app/success",
        failure:
         "https://b9f0-207-188-179-12.ngrok-free.app/failure",
        pending:
        "https://b9f0-207-188-179-12.ngrok-free.app/pending",
      },
      notification_url: "https://b9f0-207-188-179-12.ngrok-free.app/confirmaciondelpago",

    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    res.status(500).send("Error al crear la preferencia");
  }
};


const respuestaConfirmacionPago = async (req, res) => {
  const { query } = req;
  const topic = query.topic || query.type;
console.log("topic",topic);
  try {
    if (topic === "payment") {
      const paymentId = query.id || query['data.id'];
      console.log("paymentId",paymentId);
      if (!paymentId) {
        console.error("ID del pago no encontrado en req.query");
        return res.status(400).json({ error: "ID del pago no encontrado en req.query" });
      }


      res.status(200).send("OK");
    } else {
      res.status(400).json({ error: "Topic no válido" });
    }
  } catch (error) {
    console.error(error);
    const errorMessage = error.message || "Error desconocido";
    res.status(500).json({ error: errorMessage });
  }
};


module.exports = { respuestaConfirmacionPago, CreatePreferenceMP };
