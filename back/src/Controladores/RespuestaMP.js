const axios = require("axios");
const { manejoRespuestaMP } = require("./ManejoRespuestaMP");
const respuestaConfirmacionPago = async (req, res) => {
  const { query, body } = req;
  const topic = query.topic || query.type;
  try {
    if (topic === "payment") {
      const paymentId = query.id || (body.data && body.data.id);

      if (!paymentId) {
        console.error("ID del pago no encontrado en req.query o req.body");
        return res
          .status(400)
          .json({ error: "ID del pago no encontrado en req.query o req.body" });
      }

      // Configura el token de acceso en el encabezado de la solicitud
      const accessToken =
        "APP_USR-7280768752766794-122809-ca1be86a4bec57c675e7d576e6313452-1611759187";
      const headers = {
        Authorization: `Bearer ${accessToken}`,
        "Content-Type": "application/json",
      };

      /// Realiza la petición GET para obtener el estado del pago
      axios
        .get(`https://api.mercadopago.com/v1/payments/${paymentId}`, {
          headers,
        })
        .then((response) => {
          const { status, id, external_reference } = response.data;
          manejoRespuestaMP(status, id, external_reference);
        })
        .catch((error) => {
          console.error(
            "Error al obtener el estado del pago:",
            error.response ? error.response.data : error.message
          );
        });

      return res.status(200).send("OK");
    } else {
      res.status(400).json({ error: "Topic no válido" });
    }
  } catch (error) {
    console.error(error);
    const errorMessage = error.message || "Error desconocido";
    res.status(500).json({ error: errorMessage });
  }
};

module.exports = { respuestaConfirmacionPago };
