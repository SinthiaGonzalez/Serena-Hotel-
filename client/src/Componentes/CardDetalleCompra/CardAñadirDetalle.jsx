import { useSelector, useDispatch } from "react-redux";
import CardDetalleCompras from "./CardDetalleCompra";

const AddCardDetalleCompra = () => {
  const carrito = useSelector((state) => state.carrito);

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
