import { useSelector, useDispatch } from "react-redux";
import { createPreferenceMercadopagoId } from "../../redux/Actions/actions";
import BotonMercadoPago from "../Boton-MercadoPago/BotonMP";
import { useEffect } from "react";

const DetalledelaCompra = () => {
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const estadia = JSON.parse(localStorage.getItem("estadia"));
  const subtotal = carrito.reduce(
    (total, producto) => total + producto.precio * estadia,
    0
  );
  const usuarioId = JSON.parse(localStorage.getItem("userId"));
  const iva = subtotal * 0.21;
  const total = subtotal + iva;
  const handlerpostMP = () => {
    dispatch(
      createPreferenceMercadopagoId({
        title: "Serena Hotel",
        price: total,
        quantity: 1,
        picture_url: "https://picsum.photos/200",
        userId: usuarioId,
        fecha_entrada: "2024-04-01",
        fecha_salida: "2024-04-12",
      })
    );
  };
  useEffect(() => {
    handlerpostMP();
  }, []);

  return (
    <div className="m-4 lg:w-1/3 text text-negro bg-verde rounded-md py-2 lg:py-0">
      {/* <div className="flex justify-center">
        <h1 className="text-2xl mt-2">Detalles de la compra</h1>
      </div>

      <div className="m-4 h-1/2 overflow-y-auto gap-4">
        <div className="m-2">
          <AddShoppingCart />
        </div>
      </div> */}
      <div className="mx-12 mt-16">
        <p className="text-3xl text-inter text-blanco font-bold text-center mb-28">
          TOTAL DE LA COMPRA
        </p>
        <div className="border-b-2 border-blanco text-inter text-blanco text-xl flex mb-8">
          <div className="w-1/2">
            <h2>Subtotal</h2>
          </div>
          <div className="w-1/2 text-end mb-2">
            <h2>
              {subtotal.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })}
            </h2>
          </div>
        </div>
        <div className="border-b-2 border-blanco text-inter text-blanco text-xl flex mb-8">
          <div className="w-1/2">
            <h2>Impuestos Iva 21%</h2>
          </div>
          <div className="w-1/2 text-end mb-2">
            <h2>
              {iva.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })}
            </h2>
          </div>
        </div>
        <div className="flex mb-4 text-inter text-blanco font-bold text-2xl">
          <div className="w-1/2">
            <h2>Total</h2>
          </div>
          <div className="w-1/2 text-end">
            <h2>
              {total.toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })}
            </h2>
          </div>
        </div>
        <div className="w-full mt-12">
          <BotonMercadoPago />
        </div>
      </div>
    </div>
  );
};

export default DetalledelaCompra;
