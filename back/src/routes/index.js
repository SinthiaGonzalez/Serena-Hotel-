const express = require("express");
const { CreateComentario } = require("../Controladores/PostComentarios");
const { AllComentariosdHandler } = require("../handlers/AllComentariosHandler");
const {
  ActualizarComentarioHandler,
} = require("../handlers/ActualizarComentarioHnadler");
const {
  EliminarComentariosHandler,
} = require("../handlers/EliminarComentaiosHandler");
const {
  HandlerPostUsuario,
} = require("../handlers/HandlersUsuarios/PostHandlerUsuario");
const { CreatePreferenceMP } = require("../Controladores/postProductMP"); // importamos el metodo CreatePreferenceMP del archivo postProductMP.js

const { EnvioMailContactenos } = require("../handlers/EnvioMailContactenos");
const { getHabitacionHandler } = require("../handlers/HabitacionHandler");
const {
  addHabitacionToCarrito,
  getCarrito,
} = require("../Controladores/carritoControlador");
const { postHabitacionHandler } = require("../handlers/HabitacionHandler");
const { eliminarHabitacionHandler } = require("../handlers/HabitacionHandler");
const { postReservasHandler } = require("../handlers/ReservasHandler");
const { getReservas } = require("../Controladores/getReservas");
const {
  getOrdenamientosFiltrosHandler,
} = require("../Controladores/getOrdenamientosFiltrosHandler");
const { HandlerPostDesarrollador } = require('../handlers/HandlersDesarrolladores/PostHandlersDesarrolladores');
const { GetHandlerDesarrolladores } = require('../handlers/HandlersDesarrolladores/GetHandlerDesarrolladores');
const { EliminarDesarrolladorHandler } = require('../handlers/HandlersDesarrolladores/EliminarDesarrolladorHandler');
const { getHandlerUsuarios } = require("../handlers/HandlersUsuarios/GetHandlerUsuarios");
const { updateHabitacionHandler } = require("../handlers/HabitacionHandler");
const router = express.Router(); // importamos el metodo Router de express para poder crear rutas

router.post("/usuario", HandlerPostUsuario);
router.get("/usuarios", getHandlerUsuarios);

router.post("/desarrollador", HandlerPostDesarrollador);
router.delete("/desarrollador/:id", EliminarDesarrolladorHandler);
router.get("/desarrolladores", GetHandlerDesarrolladores);

router.get("/comentarios", AllComentariosdHandler);
router.put("/comentarios/:id", ActualizarComentarioHandler);
router.post("/comentar", CreateComentario);
router.delete("/comentario/:id", EliminarComentariosHandler);
router.get("/", (req, res) => {
  res.send("Soy el server activo");
});

router.post("/mercadopago/create_preference", CreatePreferenceMP);

router.get("/habitaciones", getHabitacionHandler);

router.post("/contactenos", EnvioMailContactenos);

router.post("/post/habitaciones", postHabitacionHandler);
router.delete("/habitaciones/:id", eliminarHabitacionHandler);
router.post("/carrito", addHabitacionToCarrito);
router.get("/carrito", getCarrito);
router.post("/reservas", postReservasHandler);
router.get("/reservas", getReservas);

router.get("/ordenamientos&filtros", getOrdenamientosFiltrosHandler);

router.put("/update/habitaciones", updateHabitacionHandler);
module.exports = router;
