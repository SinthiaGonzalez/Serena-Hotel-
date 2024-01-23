const { Habitaciones } = require("../db");

const getOrdenamientosFiltrosHandler = async (req, res) => {
  try {
    const { ordenarPor, direccion, filtroPersonas, filtroCuarto } = req.query;

    const ordenValido = ["nombre", "precio"].includes(ordenarPor);
    const direccionValida = ["asc", "desc"].includes(
      direccion ? direccion.toLowerCase() : ""
    );

    if (!ordenValido || !direccionValida) {
      return res
        .status(400)
        .json({ error: "Parámetros de ordenamiento no válidos" });
    }

    const consulta = {
      order: [[ordenarPor, direccion]],
    };

    let habitacionesFiltradas = await Habitaciones.findAll(consulta);

    if (filtroPersonas) {
      habitacionesFiltradas = habitacionesFiltradas.filter((habitacion) => {
        const servicios = habitacion.servicios || [];
        const personas = servicios.find(
          (servicio) => servicio.descripcion === `${filtroPersonas} pers`
        );
        return personas;
      });
    }
    if (filtroCuarto) {
      habitacionesFiltradas = habitacionesFiltradas.filter((habitacion) => {
        const servicios1 = habitacion.servicios || [];
        const cuartos = servicios1.find(
          (servicio) => servicio.descripcion === `${filtroCuarto} cuartos`
        );
        return cuartos;
      });
    }

    console.log("Habitaciones filtradas:", habitacionesFiltradas);
    res.status(200).json(habitacionesFiltradas);
  } catch (error) {
    console.error("Error:", error);
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getOrdenamientosFiltrosHandler };
