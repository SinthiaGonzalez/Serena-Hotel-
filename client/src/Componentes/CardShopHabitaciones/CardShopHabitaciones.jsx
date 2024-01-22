import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { añadirAlCarrito } from "../../redux/Actions/actions";
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
  const handlerAddToCart = () => {
     // Verificar si hay un token en el localStorage
     const token = localStorage.getItem('token');
     if (!token) {
      alert('Necesita iniciar Sesion para añadir productos al carrito');
     }else{ console.log("handlerAddToCart", id);
     dispatch(añadirAlCarrito(id));}
   
  };
  const handlerReserva = () => {
     // Verificar si hay un token en el localStorage
     const token = localStorage.getItem('token');
     if (token) {
      dispatch(añadirAlCarrito(id));
       window.location.href = '/pasareladePago'; 

     } else {
       alert('Necesita iniciar Sesion para Reservar');
    
     }
  };
  console.log("imagen", imagenes);
  return (
    <>
      <div
        key={id}
        className="flex w-full h-60 flex-row items-center justify-between rounded-xl bg-verde bg-clip-border text-blanco"
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

        <div className="flex flex-col items-center justify-center gap-6">
          <Link
            to={`/habitacion/${id}`}
            className="block font-sans text-2xl antialiased font-bold leading-snug tracking-normal text-blanco hover:scale-105"
          >
            {nombre}
          </Link>
          <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blanco">
            {tipo}
          </h5>
          <div className="flex flex-row gap-4">
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

        <div className="p-6 pt-3 flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold text-blanco">${precio}/Noche</p>
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
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};
export default CardShopHabitaciones;
