import Filtrocheckbox from "../Filtros/Filtrocheckbox";
import BuscarPorNombre from "../ordenamientosyBusqueda/busqueda";
import Ordenamiento from "../ordenamientosyBusqueda/ordenamientos";
import FechaSelectCheckin from "../Filtros/filtro-Checkin";
import Checkout from "../Filtros/filtro-Checkout";
import NavBarHome from "../NavBarHome/NavBarHome";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getHabitaciones } from "../../redux/Actions/actions";
import CardsShopHabitaciones from "../CardsShopHabitaciones/CardsShopHabitaciones";

const HabitacionesShintia = () => {
  const dispatch = useDispatch();
  const habitacionesShop = useSelector((state) => state.habitaciones);
  useEffect(() => {
    dispatch(getHabitaciones());  
  }, [dispatch]); 

  return (
    <>
      <NavBarHome />
      <div className="flex flex-row bg-white py-7 h-full">
        <div className="ml-8 bg-verde  w-2/5 rounded-xl">
          <BuscarPorNombre />
          <Ordenamiento />
          <FechaSelectCheckin />
          <Checkout />
          <div>
            <span className="pl-5">Filtros</span>
            <Filtrocheckbox />
          </div>
        </div>
        <CardsShopHabitaciones habitacionesShop={habitacionesShop} />
      </div>
    </>
  );
};
export default HabitacionesShintia;
