const { Habitaciones } = require("../db");

const getOrdenamientosFiltrosHandler = async (req, res) => {
  try {
    const { ordenarPor, direccion, filtroPersonas } = req.query;
    console.log("Parámetros de ordenamiento:", req.query);
    console.log("Parámetros direccion:", direccion);

    const ordenValido = ["nombre", "precio"].includes(ordenarPor);
    const direccionValida = ["asc", "desc"].includes(direccion.toLowerCase());

    if (!ordenValido || !direccionValida) {
      return res
        .status(400)
        .json({ error: "Parámetros de ordenamiento no válidos" });
    }

    const consulta = {
      order: [[ordenarPor, direccion]],
    };

    let habitacionesOrdenadas = await Habitaciones.findAll(consulta);

    if (filtroPersonas) {
      habitacionesOrdenadas = habitacionesOrdenadas.filter((habitacion) => {
        const servicios = habitacion.servicios || [];
        const personas = servicios.find(
          (servicio) => servicio.descripcion === `${filtroPersonas} pers`
        );
        return personas;
      });
    }

    console.log("Habitaciones filtradas:", habitacionesOrdenadas);
    res.status(200).json(habitacionesOrdenadas);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getOrdenamientosFiltrosHandler };
