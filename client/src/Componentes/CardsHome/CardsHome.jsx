import CardHome from "../CardHome/CardHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHabitaciones } from "../../redux/Actions/actions";
const CardsHome = () => {
  const dispatch = useDispatch();
  const habitacionesHome = useSelector((state) => state.habitaciones);
  
  const primerasTresHabitaciones = habitacionesHome.slice(0, 3);
  useEffect(() => {
    dispatch(getHabitaciones());
  }, [dispatch]);

  return (
    <>
      <div id="habitaciones" className="px-14 pt-4 bg-blanco w-full">
        <div className="h-30 border-l-4 border-negro text-left p-6">
          <span className="text-3xl text-negro font-inter font-medium block">
            HABITACIONES
          </span>
        </div>
        <div className="hidden lg:flex lg:flex-row lg:items-center lg:justify-end lg:gap-2 lg:hover:scale-105 pr-10 w-1/6 ml-auto ">
          <a 
          href="/habitaciones"
          className="text-xl font-medium text-negro">Ver Todo</a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            height="16"
            width="20"
            viewBox="0 0 448 512"
          >
            <path
              fill="#ff3d00"
              d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z"
            />
          </svg>
        </div>
      </div>

      <div className="mt-8 items-center justify-center flex flex-col lg:flex lg:flex-row px-10 md:px-20 gap-6 lg:gap-8">
      {/* <div className="py-10 bg-blanco items-center justify-center grid grid-cols-1 md:grid-cols-3 gap-10"> */}
        {primerasTresHabitaciones.map(
          ({ nombre, imagenes, precio, servicios, id }) => (
            <CardHome
              key={id}
              id={id}
              imagenes={imagenes}
              nombre={nombre}
              precio={precio}
              servicios={servicios}
            />
          )
        )}
      </div>
    </>
  );
};

export default CardsHome;
