const { Habitaciones } = require("../db.js");
const getHabitaciones = async () => {
  // const habitaciones = [
  //   {
  //     id: 13,
  //     nombre: "Refugio Bosque Silencioso",
  //     imagen: "https://picsum.photos/200",
  //     precio: 299,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "2 cuarto" },
  //       { icono: "person", descripcion: "4 pers" },
  //       { icono: "bed", descripcion: "King" },
  //       { icono: "home", descripcion: "45 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  //   {
  //     id: 14,
  //     nombre: "Refugio Bosque Místico",
  //     imagen: "https://picsum.photos/200",
  //     precio: 299,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "2 cuarto" },
  //       { icono: "person", descripcion: "4 pers" },
  //       { icono: "bed", descripcion: "King" },
  //       { icono: "home", descripcion: "45 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  //   {
  //     id: 15,
  //     nombre: "Refugio Bosque Sereno",
  //     imagen: "https://picsum.photos/200",
  //     precio: 299,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "2 cuarto" },
  //       { icono: "person", descripcion: "4 pers" },
  //       { icono: "bed", descripcion: "King" },
  //       { icono: "home", descripcion: "45 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  //   {
  //     id: 16,
  //     nombre: "Refugio Bosque Esmeralda",
  //     imagen: "https://picsum.photos/200",
  //     precio: 399,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "3 cuarto" },
  //       { icono: "person", descripcion: "6 pers" },
  //       { icono: "bed", descripcion: "King" },
  //       { icono: "home", descripcion: "60 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  //   {
  //     id: 17,
  //     nombre: "Refugio Bosque Dorado",
  //     imagen: "https://picsum.photos/200",
  //     precio: 399,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "3 cuarto" },
  //       { icono: "person", descripcion: "6 pers" },
  //       { icono: "bed", descripcion: "King" },
  //       { icono: "home", descripcion: "60 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  //   {
  //     id: 18,
  //     nombre: "Alojamiento Forestal",
  //     imagen: "https://picsum.photos/200",
  //     precio: 599,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "4 cuarto" },
  //       { icono: "person", descripcion: "8 pers" },
  //       { icono: "bed", descripcion: "King Size" },
  //       { icono: "home", descripcion: "120 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  //   {
  //     id: 19,
  //     nombre: "Alojamiento Verde Lodge",
  //     imagen: "https://picsum.photos/200",
  //     precio: 599,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "4 cuarto" },
  //       { icono: "person", descripcion: "8 pers" },
  //       { icono: "bed", descripcion: "King Size" },
  //       { icono: "home", descripcion: "120 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  //   {
  //     id: 20,
  //     nombre: "Alojamiento Tranquilo del Roble",
  //     imagen: "https://picsum.photos/200",
  //     precio: 599,
  //     servicios: [
  //       { icono: "sensor_door", descripcion: "4 cuarto" },
  //       { icono: "person", descripcion: "8 pers" },
  //       { icono: "bed", descripcion: "King Size" },
  //       { icono: "home", descripcion: "120 m²" },
  //       { icono: "local_bar", descripcion: "Minibar" },
  //       { icono: "wifi", descripcion: "WIFI" },
  //     ],
  //   },
  // ];
  const habitaciones = Habitaciones.findAll();
  return habitaciones;
};

module.exports = { getHabitaciones };
