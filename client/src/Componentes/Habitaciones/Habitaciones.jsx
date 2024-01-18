import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  getHabitacionesPrecio,
  getHabitacionesNombre,
  getHabitacionesFiltrosPersonas,
} from "../../redux/Actions/actions";
import { getHabitaciones } from "../../redux/Actions/actions";
import NavBarHome from "../NavBarHome/NavBarHome";
import CardsShopHabitaciones from "../CardsShopHabitaciones/CardsShopHabitaciones";
import {
  Checkbox,
  Card,
  List,
  ListItem,
  ListItemPrefix,
  Typography,
  Select,
  Option,
} from "@material-tailwind/react";
import Checkin from "../Filtros/filtro-Checkin";
import Checkout from "../Filtros/filtro-Checkout";
import { getReservas } from "../../redux/Actions/actions";
import { format } from "date-fns";
import BuscarPorNombre from "../ordenamientosyBusqueda/busqueda";
import Paginacion from "../Paginacion/Paginacion";
const Habitaciones = () => {
  const dispatch = useDispatch();
  const habitacionesShop = useSelector((state) => state.habitaciones);
  const habitacionfiltrada = useSelector(
    (state) => state.habitacionesfiltradas
  );
  const stringdelbuscar = useSelector((state) => state.string);
  const [filtros, setFiltros] = useState([]);
  const [ultimoOrdenamiento, setUltimoOrdenamiento] = useState({
    ordenado: "nombre",
    direccion: "asc",
  });
  const [checkinDate, setCheckinDate] = useState(new Date());
  const [checkoutDate, setCheckoutDate] = useState(new Date());
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPerPage] = useState(3);

  useEffect(() => {
    dispatch(getHabitaciones({ page: paginaActual, itemsPerPage }));
  }, [dispatch, itemsPerPage]);

  const handleNombreChange = (value, tipoOrdenamiento) => {
    setUltimoOrdenamiento({
      ordenado: tipoOrdenamiento,
      direccion: value === "asc" ? "asc" : "desc",
    });
    dispatch(
      getHabitacionesNombre({
        direccion: value,
        filtros,
        tipoOrdenamiento,
      })
    );
    setPaginaActual(1);
  };

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const handlePrecioChange = (value, tipoOrdenamiento) => {
    setUltimoOrdenamiento({
      ordenado: tipoOrdenamiento,
      direccion: value === "asc" ? "asc" : "desc",
    });
    dispatch(
      getHabitacionesPrecio({
        direccion: value,
        filtros,
        tipoOrdenamiento,
      })
    );
    setPaginaActual(1);
  };

  const aplicarFiltrosPersonas = (nuevosFiltros) => {
    dispatch(
      getHabitacionesFiltrosPersonas({
        ordenado: ultimoOrdenamiento.ordenado,
        direccion: ultimoOrdenamiento.direccion,
        personas: nuevosFiltros || filtros,
        page: paginaActual,
        itemsPerPage,
      })
    );
    setFiltros(nuevosFiltros || filtros);
    setPaginaActual(1);
  };

  const handleCheckinChange = (selectedDate) => {
    setCheckinDate(selectedDate);
    console.log(format(selectedDate, "yyyy-MM-dd"));
    setPaginaActual(1);
  };

  const handleCheckoutChange = (selectedDate) => {
    setCheckoutDate(selectedDate);
    dispatch(
      getReservas({
        fecha_entrada: format(checkinDate, "yyyy-MM-dd"),
        fecha_salida: format(selectedDate, "yyyy-MM-dd"),
      })
    );
    setPaginaActual(1);
  };

  const totalItems =
    stringdelbuscar.length > 0
      ? habitacionfiltrada.length
      : habitacionesShop.length;

  const habitacionesActuales =
    stringdelbuscar.length > 0
      ? habitacionfiltrada
      .slice(
          (paginaActual - 1) * itemsPerPage,
          paginaActual * itemsPerPage
        )
      : habitacionesShop.slice(
          (paginaActual - 1) * itemsPerPage,
          paginaActual * itemsPerPage
        );

  return (
    <>
      <NavBarHome />
      <div className="flex flex-row bg-white py-7">
        <div className="ml-8 bg-verde w-2/5 h-full rounded-xl p-2">
          <h2 className="text-3xl font-bold text-blanco p-4">Ordenamientos</h2>
          <BuscarPorNombre />
          <div className="flex flex-col w-full p-4">
            <h2 className="text-2xl font-bold text-blanco mb-2">Nombre</h2>
            <Select
              className="bg-verde w-full p-2 border border-gray-300 text-blanco text-sm rounded-lg"
              onChange={(value) => handleNombreChange(value, "nombre")}
              style={{ fontSize: "110%" }}
            >
              <Option value="asc">A-Z</Option>
              <Option value="desc">Z-A</Option>
            </Select>
          </div>

          <div className="flex flex-col w-full p-4">
            <h2 className="text-2xl font-bold text-blanco mb-2">Precio</h2>
            <Select
              className="bg-verde w-full p-2 border border-gray-300 text-blanco text-sm rounded-lg"
              onChange={(value) => handlePrecioChange(value, "precio")}
              style={{ fontSize: "110%" }}
            >
              <Option value="asc">menor precio</Option>
              <Option value="desc">mayor precio</Option>
            </Select>
          </div>
          <div>
            <Checkin onCheckinChange={handleCheckinChange} />
            <Checkout onCheckoutChange={handleCheckoutChange} />
          </div>
          <h2 className="text-3xl font-bold text-blanco p-4">Filtros</h2>

          <div className="flex flex-col w-full px-4 mb-10">
            <h2 className="text-2xl font-bold text-blanco p-4">
              Cantidad de Personas
            </h2>
            <Card className="w-6/7 mx-2">
              <List className="flex-row">
                {[2, 3, 4, 5, 6].map((persona) => (
                  <ListItem key={persona} className="p-0">
                    <label
                      htmlFor={`persona-${persona}`}
                      className="flex w-full cursor-pointer items-center px-3 py-2"
                    >
                      <ListItemPrefix className="mr-3">
                        <Checkbox
                          id={`persona-${persona}`}
                          ripple={false}
                          checked={filtros.includes(persona)}
                          onChange={() => {
                            const nuevosFiltros = filtros.includes(persona)
                              ? filtros.filter((p) => p !== persona)
                              : [persona];
                            aplicarFiltrosPersonas(nuevosFiltros);
                          }}
                          containerProps={{
                            className: "p-0",
                          }}
                        />
                      </ListItemPrefix>
                      <Typography color="blue-gray" className="font-medium">
                        {persona}
                      </Typography>
                    </label>
                  </ListItem>
                ))}
              </List>
            </Card>
          </div>
        </div>
        <div className="w-full mr-12">
          <CardsShopHabitaciones habitacionesShop={habitacionesActuales} />

          <Paginacion
            className="mt-12 w-1/2"
            active={paginaActual}
            setActive={handlePaginaChange}
            totalItems={totalItems}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </>
  );
};

export default Habitaciones;
