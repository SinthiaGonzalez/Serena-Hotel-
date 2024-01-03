const { Comentario } = require('../db');

const CreateComentario = async (req, res) => {
  try {
    const { imagen, nombre, contenido, puntuacion } = req.body;

    if (!imagen || !nombre || !contenido || !puntuacion) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const newcomentario = await Comentario.create({
      imagen,
      nombre,
      contenido,
      puntuacion
    });

    return res.status(201).json( newcomentario );

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { CreateComentario };
