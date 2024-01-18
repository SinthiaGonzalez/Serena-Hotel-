import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservas_Admin } from "../../redux/Actions/actions";
import Paginacion from "../Paginacion/Paginacion";

const AdminReservasTabla = () => {

  const dispatch = useDispatch();
  const idUsuario = 5; // tomar el id de donde corresponda, x ejemplo: useSelector((state) => state.idUsuario)
  const reservasTodasAdmin = useSelector((state) => state.reservasTodasAdmin);
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPerPage] = useState(5);


  useEffect(() => {
    dispatch(
      getReservas_Admin(idUsuario, { page: paginaActual, itemsPerPage })
    );
  }, [dispatch, idUsuario, paginaActual, itemsPerPage]);

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const ReservasTodasAdminPaginadas = reservasTodasAdmin.slice(
    (paginaActual - 1) * itemsPerPage,
    paginaActual * itemsPerPage
  );

  return (
    <div className="flex flex-col items-center justify-center mt-20">
      <div className="bg-verde p-6 rounded-md">
        <h2 className="text-center text-2xl font-bold my-2">
          Historial de Reservas (Admin)
        </h2>
        <div className="p-5 rounded-md shadow-md mb-4 overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
              <tr>
                <th className="py-5 px-12 tex-center ">Id de Reserva</th>
                <th className="py-5 px-12 text-center">Nombre y Apellido</th>
                <th className="py-5 px-12 text-center">Correo</th>
                <th className="py-5 px-12 text-center">Teléfono</th>
                <th className="py-5 px-12 text-center">Check-In</th>
                <th className="py-5 px-12 text-center">Check-Out</th>
                <th className="py-5 px-12 text-center">Habitación</th>
              </tr>
            </thead>
            <tbody>
              {ReservasTodasAdminPaginadas?.map((linea) => (
                <tr className="border-b" key={linea.id_reserva}>
                  <td className="py-6 px-12 text-center">{linea.id_reserva}</td>
                  <td className="py-6 px-12 text-center">{linea.nombre_y_apellido}</td>
                  <td className="py-6 px-12 text-center">{linea.email}</td>
                  <td className="py-6 px-12 text-center">{linea.telefono}</td>
                  <td className="py-6 px-12 text-center">{linea.fecha_entrada}</td>
                  <td className="py-6 px-12 text-center">{linea.fecha_salida}</td>
                  <td className="py-6 px-12 text-center">{linea.nombre_habitacion}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <Paginacion
        className="mt-12 w-1/2"
        active={paginaActual}
        setActive={handlePaginaChange}
        totalItems={reservasTodasAdmin.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default AdminReservasTabla;
