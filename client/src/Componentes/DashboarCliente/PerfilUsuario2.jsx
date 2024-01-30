import React, { useState } from "react";
//import { getReservasPorUsuarioId } from "../../../../back/src/Controladores/getReservasPorUsuarioId"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservas_usuario } from "../../redux/Actions/actions";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/solid";
import Paginacion from "../Paginacion/Paginacion";

//a
export const PerfilUsuario2 = () => {
  const dispatch = useDispatch();

  const userId = localStorage.getItem("userId");
  const idUsuario = userId; // tomar el id de donde corresponda, x ejemplo: useSelector((state) => state.idUsuario)
  console.log("idUsuario:", idUsuario);
  const reservasUsuario = useSelector((state) => state.reservasUsuario);
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPerPage] = useState(5);

  // const reservasUsuario = [
  //   {
  //     "id_reserva": "45e38d8d-8a8e-41e2-aef1-0df6418548b7",
  //     "nombre_habitacion": "f",
  //     "fecha_entrada": "2008-12-31",
  //     "fecha_salida": "2008-12-31"
  //   },
  //   {
  //     "id_reserva": "45e38d8d-8a8e-41e2-aef1-0df6418548b7",
  //     "nombre_habitacion": "c",
  //     "fecha_entrada": "2008-12-31",
  //     "fecha_salida": "2008-12-31"
  //   }
  // ]

  useEffect(() => {
    console.log("se montó el componente Reservas por Cliente - Perfilusuario2");
    if (idUsuario) {
      dispatch(
        getReservas_usuario(idUsuario, { page: paginaActual, itemsPerPage })
      );
    }
  }, [dispatch, idUsuario, paginaActual, itemsPerPage]);

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const ReservasUsuariosPaginadas = reservasUsuario.slice(
    (paginaActual - 1) * itemsPerPage,
    paginaActual * itemsPerPage
  );

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8 pt-20"
      // style={{
      //   backgroundImage:
      //     'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      // }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="bg-verde p-6 rounded-md">
          <h2 className="text-center text-2xl font-bold my-2">
            Historial de Reservas
          </h2>
          <div className="p-5 rounded-md shadow-md mb-4 overflow-x-auto w-[200px] md:w-[600px] lg:w-[1000px] xl:w-full">
            <table className="w-full">
              <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
                <tr>
                  <th className="py-5 px-12 tex-center ">Id de Reserva</th>
                  <th className="py-5 px-12 text-center">Check-In</th>
                  <th className="py-5 px-12 text-center">Check-Out</th>
                  <th className="py-5 px-12 text-center">Habitación</th>
                  <th className="py-5 px-12 text-center">Total ($)</th>
                </tr>
              </thead>
              <tbody>
                {ReservasUsuariosPaginadas?.map((linea) => (
                  <tr className="border-b" key={linea.id_reserva}>
                    <td className="py-6 px-12 text-center">
                      {linea.id_reserva}
                    </td>
                    <td className="py-6 px-12 text-center">
                      {linea.fecha_entrada}
                    </td>
                    <td className="py-6 px-12 text-center">
                      {linea.fecha_salida}
                    </td>
                    <td className="py-6 px-12 text-center">
                      {linea.nombre_habitacion}
                    </td>
                    <td className="py-6 px-12 text-center">
                      {linea.precioTotalReserva.toLocaleString("es-AR", {
                        style: "currency",
                        currency: "ARS",
                        minimumFractionDigits: 0,
                      })}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className="bg-blanco rounded-lg mt-4 text-center items-center justify-center">
          <Paginacion
            className="mt-12 w-1/2"
            active={paginaActual}
            setActive={handlePaginaChange}
            totalItems={reservasUsuario.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};
export default PerfilUsuario2;
