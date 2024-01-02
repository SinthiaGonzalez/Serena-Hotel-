const express = require('express');
const { CreateComentario } = require('../Controllers/PostComentarios');
const {AllComentariosdHandler}= require ('../handlers/AllComentariosHandler')
const {ActualizarComentarioHandler}= require('../handlers/ActualizarComentarioHnadler')
const {EliminarComentariosHandler}= require ('../handlers/EliminarComentaiosHandler')
const {HandlerPostUsuario}= require('../handlers/HandlersUsuarios/PostHandlerUsuario')


const router = express.Router();

router.post('/usuario', HandlerPostUsuario )

router.get('/comentarios', AllComentariosdHandler)
router.put('/comentarios/:id', ActualizarComentarioHandler)
router.post('/comentar', CreateComentario);
router.delete('/comentario/:id', EliminarComentariosHandler)

module.exports = router;
