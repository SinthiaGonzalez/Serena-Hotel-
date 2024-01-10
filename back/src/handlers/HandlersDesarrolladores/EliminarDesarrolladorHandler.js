const { EliminarDesarrollador } = require('../../Controladores/controllers_Desarrolladores/EliminarDesarrollador');

const EliminarDesarrolladorHandler = async (req, res) => {
  try {
    const { id } = req.params;
    const respuesta = await EliminarDesarrollador(id);
    return res.status(200).json({ mensaje: 'Desarrollador eliminado exitosamente' });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

module.exports = { EliminarDesarrolladorHandler };
