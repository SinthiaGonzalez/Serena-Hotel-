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

const {
  EnvioMailContactenos,
} = require("../handlers/HandlerMailer/EnvioMailContactenos");
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
const { verifyToken } = require("../Controladores/verify-token");
const { loginCreateToken } = require("../Controladores/login-token");
const {
  HandlerPostDesarrollador,
} = require("../handlers/HandlersDesarrolladores/PostHandlersDesarrolladores");
const {
  GetHandlerDesarrolladores,
} = require("../handlers/HandlersDesarrolladores/GetHandlerDesarrolladores");
const {
  EliminarDesarrolladorHandler,
} = require("../handlers/HandlersDesarrolladores/EliminarDesarrolladorHandler");

const {
  LoginUsuario,
} = require("../Controladores/controllers_Usuaruios/logionUsuario");
const {
  getHandlerUsuarios,
} = require("../handlers/HandlersUsuarios/GetHandlerUsuarios");
const { updateHabitacionHandler } = require("../handlers/HabitacionHandler");
const { EnvioMailNotificaciones } = require("../handlers/HandlerMailer/EnvioMailNotificaciones");
const { RecuperarContraseña } = require("../handlers/HandlerMailer/RecuperarContraseña/RecuperarContraseña");


const router = express.Router(); // importamos el metodo Router de express para poder crear rutas
router.post("/login", loginCreateToken);
router.get("/verify", verifyToken, (req, res) => {
  const userId = req.userId;
  res.status(200).json({ message: "acceso correcto", userId });
});
router.post("/usuario", HandlerPostUsuario);
router.get("/usuarios", getHandlerUsuarios);
router.put("/login", LoginUsuario);
router.put("/recuperarContrasena", RecuperarContraseña);

router.post("/desarrollador", HandlerPostDesarrollador);
router.delete("/desarrollador/:id", EliminarDesarrolladorHandler);
router.get("/desarrolladores", GetHandlerDesarrolladores);

router.get("/comentarios",verifyToken, AllComentariosdHandler);
router.put("/comentarios/:id", ActualizarComentarioHandler);
router.post("/comentar", CreateComentario);
router.delete("/comentario/:id", EliminarComentariosHandler);
router.get("/", (req, res) => {
  res.send("Soy el server activo");
});

router.post("/mercadopago/create_preference", CreatePreferenceMP);

router.get("/habitaciones", getHabitacionHandler);

router.post("/contactenos", EnvioMailContactenos);
router.post("/notificaciones", EnvioMailNotificaciones);

router.post("/post/habitaciones", postHabitacionHandler);
router.delete("/habitaciones/:id", eliminarHabitacionHandler);
router.post("/carrito", addHabitacionToCarrito);
router.get("/carrito", getCarrito);
router.post("/reservas", postReservasHandler);
router.get("/reservas", getReservas);

router.get("/ordenamientos&filtros", getOrdenamientosFiltrosHandler);

router.put("/update/habitaciones", updateHabitacionHandler);
module.exports = router;
