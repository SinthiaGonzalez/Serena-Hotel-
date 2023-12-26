const express = require('express');
const { CreateComentario } = require('../Controllers/PostComentarios');
const {AllComentariosdHandler}= require ('../handlers/AllComentariosHandler')
const {ActualizarComentarioHandler}= require('../handlers/ActualizarComentarioHnadler')
const {EliminarComentariosHandler}= require ('../handlers/EliminarComentaiosHandler')


const router = express.Router();

router.get('/comentarios', AllComentariosdHandler)
router.put('/comentarios/:id', ActualizarComentarioHandler)
router.post('/comentarios', CreateComentario);
router.delete('/comentarios/:id', EliminarComentariosHandler)

module.exports = router;
