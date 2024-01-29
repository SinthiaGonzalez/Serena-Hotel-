import { Link} from "react-router-dom";
import { useDispatch } from "react-redux";
import { añadirAlCarrito } from "../../redux/Actions/actions";
import Swal from "sweetalert2";
import { useState } from "react";
/* eslint-disable react/prop-types */
const CardShopHabitaciones = ({
  id,
  imagenes,
  nombre,
  precio,
  servicios,
  tipo,
}) => {
  const dispatch = useDispatch();

  const userId = JSON.parse(localStorage.getItem("userId"));
  const idHabitacion = id;

  const handlerAddToCart = () => {
    dispatch(añadirAlCarrito(userId, idHabitacion));

    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title:"Necesita iniciar sesion para añadir al carrito", 
        icon:"info",
        confirmButtonColor:"#FB350C",
        iconColor: "#FB350C"
      });
    } else {
      notificacion();
    }
  };

  const handlerReserva = () => {
    window.location.href = "/pasareladePago"
    // dispatch(añadirAlCarrito(userId, idHabitacion));

    // const token = localStorage.getItem("token");
    // if (!token) {
    //   alert("Necesita iniciar sesión para añadir productos al carrito");
    // } else {
    //   notificacion();
    // }
  };

  const notificacion = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#1D2828",
      color: "#fff",
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
     Toast.fire({
      icon: "success",
      title: "Agregado al carrito"
    });
  };

  return (
    <>
      <div
        key={id}
        className="flex w-full h-auto 2xl:h-60 py-2 flex-col md:flex-row items-center justify-between rounded-xl bg-verde bg-clip-border text-blanco"
      >
        <div className="h-44 mx-8 my-8 w-60 overflow-hidden text-white  rounded-xl bg-verde bg-clip-border  hover:scale-105">
          <Link to={`/habitacion/${id}`}>
            <img
              className="w-full h-full object-cover"
              src={imagenes[0]}
              alt={nombre}
            />
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center gap-2 2xl:gap-6 text-center">
          <Link
            to={`/habitacion/${id}`}
            className="block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blanco hover:scale-105"
          >
            {nombre}
          </Link>
          <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blanco">
            {tipo}
          </h5>
          <div className=" grid grid-cols-3 lg:flex xl:flex-row gap-4">
            {servicios.map(({ icono, descripcion }, index) => (
              <div key={`${icono}-${descripcion}-${index}`}>
                <span className="material-symbols-outlined cursor-pointer rounded-full border border-verde bg-gray-900/5 p-3 text-blanco transition-colors hover:border-blanco hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  {icono}
                </span>
                <p className="text-blanco text-sm text-center">{descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 pt-3 flex flex-col items-center justify-center gap-4 text-center">
          <p className="text-2xl font-bold text-blanco py-4 md:py-0">
            {precio.toLocaleString("es-AR", {
              style: "currency",
              currency: "ARS",
              minimumFractionDigits: 0,
            })}{" "}
            / Noche
          </p>

          <button
            className="block w-full mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
            onClick={handlerAddToCart}
          >
            AÑADIR AL CARRITO
          </button>
          <button
            className="block w-full select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
            onClick={handlerReserva}
          >
            IR A PAGAR
          </button>
        </div>
      </div>
    </>
  );
};
export default CardShopHabitaciones;
