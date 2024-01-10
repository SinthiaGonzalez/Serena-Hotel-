const {Desarrollador}= require('../../db')

const EliminarDesarrollador = async (id) => { 
  try {
    if (!id) {
      throw new Error('El ID del desarrollador es inválido');
    }

    const desarrolladorEliminado = await Desarrollador.destroy({ where: { id } });

    if (desarrolladorEliminado === 0) {
      throw new Error('No se encontró ningún desarrollador con el ID proporcionado');
    }

    return 'Desarrollador eliminado exitosamente';
  } catch (error) {
    console.error('Error al eliminar Desarrollador:', error);
    throw new Error('No se pudo eliminar el Desarrollador');
  }
};

module.exports = { EliminarDesarrollador };
