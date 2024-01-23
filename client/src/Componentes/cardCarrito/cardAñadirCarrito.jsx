import { useSelector, useDispatch } from "react-redux";
import ShoppingCartCard1 from "./Card-Shop-Cart";

const AddShoppingCart = () => {
  const carrito = useSelector((state) => state.carrito);

  return (
    <div>
      {carrito.map(({ imagenes, nombre, precio, id }) => (
        <ShoppingCartCard1
          key={id}
          nombre={nombre}
          precio={precio}
          imagenes={imagenes}
          id={id}
        />
      ))}
    </div>
  );
};

export default AddShoppingCart;
