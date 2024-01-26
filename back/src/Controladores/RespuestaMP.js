const axios = require("axios");
const {manejoRespuestaMP} = require('./ManejoRespuestaMP');
const respuestaConfirmacionPago = async (req, res) => {
    const { query, body } = req;
    const topic = query.topic || query.type; 
    try {
      if (topic === "payment") {
        const paymentId = query.id || (body.data && body.data.id);
    
  
        if (!paymentId) {
          console.error("ID del pago no encontrado en req.query o req.body");
          return res.status(400).json({ error: "ID del pago no encontrado en req.query o req.body" });
        }
  
        // Configura el token de acceso en el encabezado de la solicitud
        const accessToken = process.env.YOUR_ACCESS_TOKEN ;
        const headers = {
          'Authorization': `Bearer ${accessToken}`,
          'Content-Type': 'application/json',
        };
  
        /// Realiza la petición GET para obtener el estado del pago
  axios.get(`https://api.mercadopago.com/v1/payments/${paymentId}`, { headers })
  .then(response => {
    const { status, id } = response.data;
    manejoRespuestaMP(status,id);//falta pasarle el id del usuario y las fechas de reserva
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