import { useSelector } from "react-redux";
import ShoppingCartCard1 from "./Card-Shop-Cart";

const AddShoppingCart = () => {
  const  habitaciones  = useSelector((state) => state.carrito);
  return (
    <div>
      {habitaciones.map((habitacion) => (
        <ShoppingCartCard1 key={habitacion.id} habitaciones={habitacion} />
      ))}
    </div>
  );
};

export default AddShoppingCart;
