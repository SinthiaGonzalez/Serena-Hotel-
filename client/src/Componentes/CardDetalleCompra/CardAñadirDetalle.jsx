import { useSelector, useDispatch } from "react-redux";
import CardDetalleCompras from "./CardDetalleCompra";
import { getCarrito } from "../../redux/Actions/actions";
import { useEffect } from "react";

const AddCardDetalleCompra = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);

  useEffect(() => {
    dispatch(getCarrito());
  }, [dispatch]);
  

  return (
    <div>
      {carrito.map(({ imagenes, nombre, precio, id }) => (
        <CardDetalleCompras
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

export default AddCardDetalleCompra;
