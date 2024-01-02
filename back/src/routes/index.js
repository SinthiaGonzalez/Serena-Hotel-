const { Router } = require('express');// importamos el metodo Router 
const {CreatePreferenceMP} = require('../Controladores/postProductMP');// importamos el metodo CreatePreferenceMP del archivo postProductMP.js
const { getHabitaciones } = require("../Controladores/getHabitaciones");
const router = Router(); // importamos el metodo Router de express para poder crear rutas


router.get('/', (req, res) => {
    res.send('Soy el server activo');
 });

router.post('/mercadopago/create_preference', CreatePreferenceMP);

router.get("/habitaciones", getHabitaciones);
module.exports = router;
