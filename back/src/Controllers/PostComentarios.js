const { Comentario } = require('../db');

const CreateComentario = async (req, res) => {
  try {
    const { nombre, contenido, puntuacion } = req.body;

    if (!nombre || !contenido || !puntuacion) {
      return res.status(400).json({ error: 'Faltan campos requeridos' });
    }

    const newcomentario = await Comentario.create({
      nombre,
      contenido,
      puntuacion
    });

    return res.status(201).json({ message: 'Comentario creado exitosamente', newcomentario });

  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { CreateComentario };
