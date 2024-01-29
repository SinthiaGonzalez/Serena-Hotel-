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
    <div className="flex flex-col gap-4 2xl:mx-8 2xl:w-full py-8 2xl:py-0 ">
      {habitacionesShop.map(({ id, nombre, imagenes, precio, servicios }) => {
        return (
          <CardShopHabitaciones
            key={id}
            id={id}
            nombre={nombre}
            imagenes={imagenes}
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
