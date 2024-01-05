
const express = require('express');
const { CreateComentario } = require('../Controllers/PostComentarios');
const {AllComentariosdHandler}= require ('../handlers/AllComentariosHandler')
const {ActualizarComentarioHandler}= require('../handlers/ActualizarComentarioHnadler')
const {EliminarComentariosHandler}= require ('../handlers/EliminarComentaiosHandler')
const {HandlerPostUsuario}= require('../handlers/HandlersUsuarios/PostHandlerUsuario')
const {CreatePreferenceMP} = require('../Controladores/postProductMP');// importamos el metodo CreatePreferenceMP del archivo postProductMP.js
const { getHabitaciones } = require("../Controladores/getHabitaciones");
const { EnvioMailContactenos } = require('../handlers/EnvioMailContactenos');

const router = express.Router();

router.post('/usuario', HandlerPostUsuario )

router.get('/comentarios', AllComentariosdHandler)
router.put('/comentarios/:id', ActualizarComentarioHandler)
router.post('/comentar', CreateComentario);
router.delete('/comentario/:id', EliminarComentariosHandler)
router.get('/', (req, res) => {
    res.send('Soy el server activo');
 });

router.post('/mercadopago/create_preference', CreatePreferenceMP);

router.get("/habitaciones", getHabitaciones);

router.post('/contactenos', EnvioMailContactenos);


module.exports = router;


