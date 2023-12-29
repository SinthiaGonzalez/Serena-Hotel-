import CardShopHabitaciones from "../CardShopHabitaciones/CardShopHabitaciones";
const CardsShopHabitaciones = ({ habitacionesShop }) => {
  return (
    <div>
      {habitacionesShop.map(({ id, nombre, imagen, precio, servicios }) => {
        return (
          <CardShopHabitaciones
            key={nombre}
            nombre={nombre}
            imagen={imagen}
            precio={precio}
            servicios={servicios}
          />
        );
      })}
    </div>
  );
};
export default CardsShopHabitaciones;
