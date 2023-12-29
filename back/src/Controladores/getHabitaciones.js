const Habitaciones = require("../models/Habitaciones");
const getHabitaciones = async (req, res) => {
  try {
    const habitaciones = [
      {
        nombre: "Habitación Bosque Sagrado",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Habitación Elegancia Natural",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Habitación Roble Real",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Habitación Serenidad Verde",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Habitación Tranquilidad Natural",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Habitación Tronco de Ensueño",
        precio: 159,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen" },
          { icono: "home", descripcion: "20 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },

      {
        nombre: "Suite Bosque Encantado",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Suite Naturaleza Exquisita",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Suite Ámbar Arbórea",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Suite Armonía Boscosa",
        precio: 199,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "2 personas" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "30 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Suite Aurora Verde",
        precio: 249,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "3 personas" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "35 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Suite Respiro del Bosque",
        precio: 249,
        servicios: [
          { icono: "sensor_door", descripcion: "1 cuarto" },
          { icono: "person", descripcion: "3 personas" },
          { icono: "bed", descripcion: "Queen Size" },
          { icono: "home", descripcion: "35 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },

      {
        nombre: "Refugio Bosque Silencioso",
        precio: 299,
        servicios: [
          { icono: "sensor_door", descripcion: "2 cuarto" },
          { icono: "person", descripcion: "4 personas" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "45 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Refugio Bosque Místico",
        precio: 299,
        servicios: [
          { icono: "sensor_door", descripcion: "2 cuarto" },
          { icono: "person", descripcion: "4 personas" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "45 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Refugio Bosque Sereno",
        precio: 299,
        servicios: [
          { icono: "sensor_door", descripcion: "2 cuarto" },
          { icono: "person", descripcion: "4 personas" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "45 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Refugio Bosque Esmeralda",
        precio: 399,
        servicios: [
          { icono: "sensor_door", descripcion: "3 cuarto" },
          { icono: "person", descripcion: "6 personas" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "60 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Refugio Bosque Dorado",
        precio: 399,
        servicios: [
          { icono: "sensor_door", descripcion: "3 cuarto" },
          { icono: "person", descripcion: "6 personas" },
          { icono: "bed", descripcion: "King" },
          { icono: "home", descripcion: "60 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Alojamiento Forestal",
        precio: 599,
        servicios: [
          { icono: "sensor_door", descripcion: "4 cuarto" },
          { icono: "person", descripcion: "8 personas" },
          { icono: "bed", descripcion: "King Size" },
          { icono: "home", descripcion: "120 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Alojamiento Verde Lodge",
        precio: 599,
        servicios: [
          { icono: "sensor_door", descripcion: "4 cuarto" },
          { icono: "person", descripcion: "8 personas" },
          { icono: "bed", descripcion: "King Size" },
          { icono: "home", descripcion: "120 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
      {
        nombre: "Alojamiento Tranquilo del Roble",
        precio: 599,
        servicios: [
          { icono: "sensor_door", descripcion: "4 cuarto" },
          { icono: "person", descripcion: "8 personas" },
          { icono: "bed", descripcion: "King Size" },
          { icono: "home", descripcion: "120 m²" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "WIFI" },
        ],
      },
    ];
    // const crearhabitaciones = await Habitaciones.create();
    console.log(habitaciones);
    return res.status(200).json(habitaciones);
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

module.exports = { getHabitaciones };
