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
  CreateUsuario,
} = require("../Controladores/controllers_Usuaruios/PostUsuario");
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
const {
  postReservasHandler,
  deleteReservasHandler,
} = require("../handlers/ReservasHandler");
const { getReservas } = require("../Controladores/getReservas");
const {
  getReservasPorUsuarioId,
} = require("../Controladores/getReservasPorUsuarioId");
const { getReservasTodas } = require("../Controladores/getReservasTodas");
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
const {
  putUsuarioHandler,
  putUsuarioEstadoHandler,
} = require("../handlers/HandlersUsuarios/PutAndDeleteUsuarios");
const {
  deleteUsuarioHandler,
} = require("../handlers/HandlersUsuarios/PutAndDeleteUsuarios");
//importamos el metodo Router de express para poder crear rutas
const {
  EnvioMailNotificaciones,
} = require("../handlers/HandlerMailer/EnvioMailNotificaciones");
const {
  RecuperarContraseña,
} = require("../handlers/HandlerMailer/RecuperarContraseña/RecuperarContraseña");
const {
  HanlderHabitacionDetail,
} = require("../handlers/HabitacionDetailHandler");

const { deleteCarrito } = require("../Controladores/carritoControlador");
const { respuestaConfirmacionPago } = require("../Controladores/RespuestaMP");
const {
  getUsuarioByIdHandler,
} = require("../handlers/HandlersUsuarios/GetHandlerUsuarios");
const {
  RecuperarUsuario,
} = require("../handlers/HandlerMailer/RecuperarContraseña/RecuperarUsuario");

const router = express.Router(); // importamos el metodo Router de express para poder crear rutas
router.post("/login", loginCreateToken);

//creamos una ruta para verificar el token es de prueba para ver si funciona
router.get("/verify", verifyToken, (req, res) => {
  const userId = req.userId;
  const isAdmin = req.isAdmin;

  console.log("userId", userId);
  res.status(200).json({ message: "acceso correcto", userId, isAdmin });
});

router.get("/usuario/:id", getUsuarioByIdHandler);
router.post("/usuario", CreateUsuario);
router.get("/usuarios", getHandlerUsuarios);
router.put("/login", LoginUsuario);
router.put("/recuperarContrasena", RecuperarContraseña);
router.put("/recuperarUsuario", RecuperarUsuario);

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
router.get("/success", (req, res) =>
  res.redirect("https://serena-hotel.vercel.app/pago-exitoso")
);
router.get("/failure", (req, res) =>
  res.redirect("https://serena-hotel.vercel.app/pago-rechazado")
);
router.get("/pending", (req, res) =>
  res.redirect("https://serena-hotel.vercel.app/pago-pendiente")
);
router.post("/confirmaciondelpago", respuestaConfirmacionPago);

router.get("/habitaciones", getHabitacionHandler);
router.get("/habitaciones/:id", HanlderHabitacionDetail);

router.post("/contactenos", EnvioMailContactenos);
router.post("/notificaciones", EnvioMailNotificaciones);

router.post("/post/habitaciones", postHabitacionHandler);
router.delete("/habitaciones/:id", eliminarHabitacionHandler);
router.delete("/carrito", deleteCarrito);
router.post("/carrito", addHabitacionToCarrito);
router.get("/carrito/:id", getCarrito);
router.post("/reservas", postReservasHandler);
router.get("/reservas", getReservas);
router.get("/reservas-por-usuario", getReservasPorUsuarioId); //trae por ID de usuario o todas (/reservas-por-usuario | http://localhost:3001/reservas-por-usuario?id=5)
router.get("/reservas-todas", getReservasTodas);
router.delete("/reservas/delete/:id", deleteReservasHandler);

router.get("/ordenamientos&filtros", getOrdenamientosFiltrosHandler);

router.put("/update/habitaciones", updateHabitacionHandler);
router.put("/update/usuarios/:id", putUsuarioHandler);
router.put("/update/usuarioEstado", putUsuarioEstadoHandler);
router.delete("/delete/usuarios/:id", deleteUsuarioHandler);
module.exports = router;
