import CardShopHabitaciones from "../CardShopHabitaciones/CardShopHabitaciones";
const CardsShopHabitaciones = ({ habitacionesShop }) => {
  return (
    <div className="flex flex-col gap-4 mx-8 w-full">
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
