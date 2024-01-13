const {Habitaciones}= require('../../db')

const EliminarHabitacion = async (id) => { 
  try {
    if (!id) {
      throw new Error('El ID de la habitacion es inválido');
    }

    const habitacionEliminada = await Habitaciones.destroy({ where: { id } });

    if (habitacionEliminada === 0) {
      throw new Error('No se encontró ninguna habitación con el ID proporcionado');
    }

    return 'Habitación eliminada exitosamente';
  } catch (error) {
    console.error('Error al eliminar Habitación:', error);
    throw new Error('No se pudo eliminar la Habitación');
  }
};

module.exports = { EliminarHabitacion };
/*
untxt.js
{
  "nombre": "c",
  "precio": 199,
  "imagenes": [
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200",
    "https://picsum.photos/200"
  ],
  "servicios": [
    {
      "icono": "sensor_door",
      "descripcion": "1 cuarto"
    },
    {
      "icono": "person",
      "descripcion": "2 pers"
    },
    {
      "icono": "bed",
      "descripcion": "Queen"
    },
    {
      "icono": "home",
      "descripcion": "30 m²"
    },
    {
      "icono": "local_bar",
      "descripcion": "Minibar"
    },
    {
      "icono": "wifi",
      "descripcion": "WIFI"
    }
  ],
  "descripcion": "Habitacion comoda",
  "estado": "Disponible"
}
*/
