require("dotenv").config();
const { YOUR_ACCESS_TOKEN } = process.env;
const { MercadoPagoConfig, Preference } = require("mercadopago");

const CreatePreferenceMP = async (req, res) => {
  const client = new MercadoPagoConfig({ accessToken: YOUR_ACCESS_TOKEN });
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
          "https://mediateca.educa.madrid.org/imagen.php?id=low1cq1ha42o6fcb&type=2",
        failure:
          "https://t4.ftcdn.net/jpg/00/06/32/33/360_F_6323356_UNMbB0uOmhkfPFC2JpzX5QX3Nnj9xMVI.webp",
        pending:
          "https://www.larepublica.net/storage/images/2019/01/03/20190103093814.pago.jpg",
      },
      auto_return: "approved",
    };

    const preference = new Preference(client);
    const result = await preference.create({ body });
    res.json({ id: result.id });
  } catch (error) {
    res.status(500).send("Error al crear la preferencia");
  }
};

module.exports = { CreatePreferenceMP };
