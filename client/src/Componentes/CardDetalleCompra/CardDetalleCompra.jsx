import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch, useSelector } from "react-redux";
import { eliminarDelCarrito } from "../../redux/Actions/actions";
import { useState } from "react";

const CardDetalleCompras = ({ imagenes, nombre, precio, id }) => {
  const dispatch = useDispatch();

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
          {fechaEntrada} / {fechaSalida}
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
