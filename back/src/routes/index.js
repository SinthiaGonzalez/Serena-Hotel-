const { getHabitaciones } = require("../Controladores/getHabitaciones");
const { Router } = require("express"); // importamos el metodo Router
const router = Router(); // importamos el metodo Router de express para poder crear rutas
router.get("/habitaciones", getHabitaciones);
module.exports = router;
