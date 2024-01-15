/* eslint-disable react/prop-types */
import CardShopHabitaciones from "../CardShopHabitaciones/CardShopHabitaciones";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/Actions/actions";
const CardsShopHabitaciones = ({ habitacionesShop }) => {
  const dispatch = useDispatch();
  const handlerAddToCart = (id) => {
    dispatch(addToCart(id));
  };
  return (
    <div className="flex flex-col gap-4 mx-8 w-full">
      {habitacionesShop.map(({ id, nombre, imagen, precio, servicios }) => {
        return (
          <CardShopHabitaciones
            key={id}
            id={id}
            nombre={nombre}
            imagen={imagen}
            precio={precio}
            servicios={servicios}
            handlerAddToCart={handlerAddToCart}
          />
        );
      })}
    </div>
  );
};
export default CardsShopHabitaciones;
