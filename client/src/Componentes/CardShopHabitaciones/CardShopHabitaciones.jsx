import {
  Popover,
  PopoverHandler,
  PopoverContent,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { añadirAlCarrito } from "../../redux/Actions/actions";
import Swal from "sweetalert2";

const CardShopHabitaciones = ({
  id,
  imagenes,
  nombre,
  precio,
  servicios,
  tipo,
}) => {
  const dispatch = useDispatch();
  const fecha_entrada = JSON.parse(localStorage.getItem("fecha_entrada"));
  const fecha_salida = JSON.parse(localStorage.getItem("fecha_salida"));

  const fechaEntrada = new Date(fecha_entrada);
  const fechaSalida = new Date(fecha_salida);
  // Realiza la resta
  const estadiaEnMilisegundos = fechaSalida - fechaEntrada;

  // Convierte la diferencia a días
  const estadia = estadiaEnMilisegundos / (24 * 60 * 60 * 1000);
  const [mostrarpopover, setMostrarpopover] = useState(false);

  const handlerAddToCart = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const idHabitacion = id;
    const token = localStorage.getItem("token");
    if (!token) {
      Swal.fire({
        title: "Necesita iniciar sesion para añadir al carrito",
        icon: "info",
        confirmButtonColor: "#FB350C",
        iconColor: "#FB350C",
      });
    } else {
      if (!estadia || estadia <= 0) {
        setMostrarpopover(true);
      } else {
        setMostrarpopover(false);
        dispatch(añadirAlCarrito(userId, idHabitacion));
        notificacion();
      }
    }
  };

  const handlerReserva = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    const idHabitacion = id;
    const token = localStorage.getItem("token");

    if (!token) {
      Swal.fire({
        title: "Necesita iniciar sesion para reservar",
        icon: "info",
        confirmButtonColor: "#FB350C",
        iconColor: "#FB350C",
      });
    } else {
      if (!estadia || estadia <= 0) {
        setMostrarpopover(true);
      } else {
        dispatch(añadirAlCarrito(userId, idHabitacion));
        window.location.href = "/pasareladePago";
        console.log("mostrar popover", mostrarpopover);
        setMostrarpopover(false);
      }
    }
  };

  const notificacion = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "bottom-end",
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true,
      background: "#3E4747",
      color: "#fff",
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      },
    });
    Toast.fire({
      icon: "success",
      title: "Agregado al carrito",
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
          <div className="grid grid-cols-3 lg:flex xl:flex-row gap-4">
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
          <div>
            {mostrarpopover ? (
              <Popover
                animate={{
                  mount: { scale: 1, y: 0 },
                  unmount: { scale: 0, y: 25 },
                }}
              >
                <PopoverHandler>
                  <button
                    className="block w-full select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
                    type="button"
                    onClick={handlerAddToCart}
                  >
                    AÑADIR AL CARRITO
                  </button>
                </PopoverHandler>
                <PopoverContent>
                  Seleccione fechas válidas antes de añadir al carrito.
                </PopoverContent>
              </Popover>
            ) : (
              <button
                className="block w-full select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
                type="button"
                onClick={handlerAddToCart}
              >
                AÑADIR AL CARRITO
              </button>
            )}
          </div>

          {mostrarpopover ? (
            <Popover
              animate={{
                mount: { scale: 1, y: 0 },
                unmount: { scale: 0, y: 25 },
              }}
            >
              <PopoverHandler>
                <button
                  className="block w-full select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
                  type="button"
                  onClick={handlerReserva}
                >
                  RESERVAR
                </button>
              </PopoverHandler>
              <PopoverContent>
                Seleccione fechas válidas antes de hacer una reserva.
              </PopoverContent>
            </Popover>
          ) : (
            <button
              className="block w-full select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
              type="button"
              onClick={handlerReserva}
            >
              RESERVAR
            </button>
          )}
        </div>
      </div>
    </>
  );
};

export default CardShopHabitaciones;
