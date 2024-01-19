import AddShoppingCart from "../cardCarrito/cardAñadirCarrito";
import { useSelector, useDispatch } from "react-redux";
import { createPreferenceMercadopagoId } from "../../redux/Actions/actions";
import BotonMercadoPago from "../Boton-MercadoPago/BotonMP";
import { useEffect } from "react";

const DetalledelaCompra = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const subtotal = carrito.reduce(
    (total, producto) => total + producto.precio,
    0
  );
  const iva = subtotal * 0.21;
  const total = subtotal + iva;
  const handlerpostMP = () => {
    dispatch(
      createPreferenceMercadopagoId({
        title: "Serena Hotel",
        price: total,
        quantity: 1,
        picture_url: "https://picsum.photos/200",
      })
    );
  };
  useEffect(() => {
    handlerpostMP();
  }, []);

  return (
    <div className="m-4 w-1/3 text text-negro bg-white rounded-md">
      <div className="flex justify-center">
        <h1 className="text-2xl mt-2">Detalles de la compra</h1>
      </div>

      <div className="m-4 h-1/2 overflow-y-auto gap-4">
        <div className="m-2">
          <AddShoppingCart />
        </div>
      </div>
      <div className="m-4">
        <div className="border-b-2 border-negro flex mb-4">
          <div className="w-1/2">
            <h2>Subtotal</h2>
          </div>
          <div className="w-1/2 text-end">
            <h2>${subtotal}</h2>
          </div>
        </div>
        <div className="border-b-2 border-negro flex  mb-4">
          <div className="w-1/2">
            <h2>Impuestos Iva 21%</h2>
          </div>
          <div className="w-1/2 text-end">
            <h2>${iva}</h2>
          </div>
        </div>
        <div className="flex  mb-4">
          <div className="w-1/2">
            <h2>Total</h2>
          </div>
          <div className="w-1/2 text-end">
            <h2>${total}</h2>
          </div>
        </div>
        <div className="w-full">
          <BotonMercadoPago />
        </div>
      </div>
    </div>
  );
};

export default DetalledelaCompra;
