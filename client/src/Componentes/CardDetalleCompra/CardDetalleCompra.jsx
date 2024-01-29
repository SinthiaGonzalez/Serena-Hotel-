import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { eliminarDelCarrito } from "../../redux/Actions/actions";
import { useState } from "react";

const CardDetalleCompras = ({ imagenes, nombre, precio, id }) => {
  const dispatch = useDispatch();
  const fechas = JSON.parse(localStorage.getItem("fechas"));
  console.log("fechas Card", fechas);
  const checkinDate = JSON.parse(localStorage.getItem("checkinDate"));
  const checkoutDate = JSON.parse(localStorage.getItem("checkoutDate"));
  const diferenciaEnMilisegundos =
    new Date(checkoutDate) - new Date(checkinDate);
  const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
  localStorage.setItem("estadia", JSON.stringify(diferenciaEnDias));
  const estadia = JSON.parse(localStorage.getItem("estadia"));
  const eliminarHabitacion = () => {
    dispatch(eliminarDelCarrito(id));
  };
  if (!imagenes || !nombre || !precio) {
    return <div>loading...</div>;
  }
  return (
    <div className="mx-auto bg-naranja rounded-md overflow-hidden shadow-md flex mb-4 p-2 flex-col md:felx md:flex-row justify-center">
      <div className="flex items-center justify-center px-4">
        <img
          src={imagenes[0]}
          alt="imagen"
          className=" w-[200px] h-28 object-cover rounded-md"
        />
      </div>

      <div className="lg:w-3/5 mt-4 px-2">
        <p className="mb-2 text-white text-2xl font-semibold text-center">
          {nombre}
        </p>
        <p className="mb-2 text-white text-base text-center">
          {checkinDate} - {checkoutDate}
        </p>
      </div>

      <div className="p-4 flex flex-col items-center justify-center lg:justify-between lg:w-1/5">
        <p className="text-white-700 font-bold text-2xl">
          {(precio * estadia).toLocaleString("es-AR", {
            style: "currency",
            currency: "ARS",
            minimumFractionDigits: 0,
          })}
        </p>
        <div>
          <button
            className="bg-red-500 text-white ml-2 px-12 py-3 mt-2 hover:bg-red-600 transition duration-300"
            onClick={eliminarHabitacion}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>

    </div>
  );
};

export default CardDetalleCompras;
