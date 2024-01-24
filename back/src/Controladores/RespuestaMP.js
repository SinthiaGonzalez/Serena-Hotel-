const axios = require("axios");
const {manejoRespuestaMP} = require('./ManejoRespuestaMP');
const respuestaConfirmacionPago = async (req, res) => {
    const { query, body } = req;
    const topic = query.topic || query.type;
    console.log("topic", topic);
  
    try {
      if (topic === "payment") {
        const paymentId = query.id || (body.data && body.data.id);
        console.log("paymentId", paymentId);
  
        if (!paymentId) {
          console.error("ID del pago no encontrado en req.query o req.body");
          return res.status(400).json({ error: "ID del pago no encontrado en req.query o req.body" });
        }
  
        // Imprimir la solicitud completa
        console.log("Solicitud completa:", req);
  
        // Imprimir el cuerpo de la solicitud
        console.log("Cuerpo de la solicitud:", body);
  
        // Configura el token de acceso en el encabezado de la solicitud
        const accessToken = "TEST-7280768752766794-122809-47a53b66d4aff3b7fad1a49fdd6d753e-1611759187";
        const headers = {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        };
  
        /// Realiza la petición GET para obtener el estado del pago
  axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, { headers })
  .then(response => {
    const { status, id } = response.data;
    manejoRespuestaMP(status,id);
  })
  .catch(error => {
    console.error("Error al obtener el estado del pago:", error.response ? error.response.data : error.message);
  });
  
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

    module.exports = { respuestaConfirmacionPago}