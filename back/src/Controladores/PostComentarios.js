const { Comentario } = require('../db');

const CreateComentario = async (req, res) => {
  try {
    const { imagen, nombre, contenido, puntuacion, idUsuario } = req.body;
//const idUsuario = req.params.id;
console.log('log de params', idUsuario);

if (!imagen || !nombre || !contenido || !puntuacion || !idUsuario) {
  return res.status(400).json({ error: 'Faltan campos requeridos' });
}

    // Verificar si el usuario ya tiene un comentario en la base de datos
    const comentarioExistente = await Comentario.findOne({ where: { usuarioId: idUsuario } });
    if (comentarioExistente) {
      return res.status(404).json({ error: 'Ya has realizado un comentario' });
    }

const newcomentario = await Comentario.create({
  imagen,
  nombre,
  contenido,
  puntuacion,
  usuarioId: idUsuario
});

return res.status(201).json(newcomentario);

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { CreateComentario };
