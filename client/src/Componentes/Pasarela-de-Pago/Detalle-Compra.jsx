import { useSelector, useDispatch } from "react-redux";
import { createPreferenceMercadopagoId } from "../../redux/Actions/actions";
import BotonMercadoPago from "../Boton-MercadoPago/BotonMP";
import { useEffect, useState } from "react";

const DetalledelaCompra = () => {
  const preferenceIdMP = useSelector((state) => state.preferenceIdMP);
  const dispatch = useDispatch();
  const carrito = useSelector((state) => state.carrito);
  const fechaEntrada = JSON.parse(localStorage.getItem("fecha_entrada"));
  const fechaSalida = JSON.parse(localStorage.getItem("fecha_salida"));
  const fecha_entrada_str = localStorage.getItem("fecha_entrada");
  const fecha_salida_str = localStorage.getItem("fecha_salida");
  // Convierte las cadenas a objetos Date
  const fecha_entrada = new Date(fecha_entrada_str);
  const fecha_salida = new Date(fecha_salida_str);
  // Realiza la resta
  const estadiaEnMilisegundos = fecha_salida - fecha_entrada;
  // Convierte la diferencia a días
  const estadia = estadiaEnMilisegundos / (24 * 60 * 60 * 1000);
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
        fecha_entrada: fechaEntrada,
        fecha_salida: fechaSalida,
      })
    );
  };
  useEffect(() => {
    handlerpostMP();
  }, [carrito]);
  const [mostrarBotonLimpiar, setMostrarBotonLimpiar] = useState(true);

  const handleLimpiarFechas = () => {
    setTimeout(() => {
      localStorage.removeItem("fecha_entrada");
      localStorage.removeItem("fecha_salida");
      setFechas({ fechaEntrada: null, fechaSalida: null });
    }, 3000);
    setMostrarBotonLimpiar(false);
  };

  return (
    <div className="m-4 lg:w-1/3 py-6 text text-negro bg-verde rounded-md ">
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
        <div>
          {mostrarBotonLimpiar ? (
            <button
              className=" w-full bg-naranja text-blanco py-2 px-4 rounded-md mt-4"
              onClick={handleLimpiarFechas}
            >
              Pagar
            </button>
          ) : (
            <BotonMercadoPago id={preferenceIdMP} />
          )}
        </div>
      </div>
    </div>
  );
};

export default DetalledelaCompra;
