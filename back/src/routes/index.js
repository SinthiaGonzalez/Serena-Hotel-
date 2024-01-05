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
const { getHabitacionHandler } = require("../handlers/HabitacionHandler");

const { postHabitacionHandler } = require("../handlers/HabitacionHandler");
4;
const {
  addHabitacionToCarrito,
  getCarrito,
} = require("../Controladores/carritoControlador");
const router = express.Router(); // importamos el metodo Router de express para poder crear rutas

router.post("/usuario", HandlerPostUsuario);

router.get("/comentarios", AllComentariosdHandler);
router.put("/comentarios/:id", ActualizarComentarioHandler);
router.post("/comentar", CreateComentario);
router.delete("/comentario/:id", EliminarComentariosHandler);
router.get("/", (req, res) => {
  res.send("Soy el server activo");
});

router.post("/mercadopago/create_preference", CreatePreferenceMP);

router.get("/habitaciones", getHabitacionHandler);

router.post("/post/habitaciones", postHabitacionHandler);
router.post("/carrito", addHabitacionToCarrito);
router.get("/carrito", getCarrito);
module.exports = router;
