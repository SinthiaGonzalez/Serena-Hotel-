
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
     

    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    res.status(500).send("Error al crear la preferencia");
  }
};






module.exports = { CreatePreferenceMP };
