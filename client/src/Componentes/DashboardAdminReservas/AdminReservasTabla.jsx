import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteReservas, envioNotificion, getReservas_Admin } from "../../redux/Actions/actions";
import Paginacion from "../Paginacion/Paginacion";
import { useVerificarIsAdmin } from "../AutenticadorToken/autenticadorLocalStIsAdmin";

const AdminReservasTabla = () => {
  useVerificarIsAdmin()
  const dispatch = useDispatch();
  const reservasTodasAdmin = useSelector((state) => state.reservasTodasAdmin);
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getReservas_Admin({ page: paginaActual, itemsPerPage }));
  }, [dispatch, paginaActual, itemsPerPage]);

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const ReservasTodasAdminPaginadas = reservasTodasAdmin.slice(
    (paginaActual - 1) * itemsPerPage,
    paginaActual * itemsPerPage
  );

  const handleDeleteReserva = async (idReserva, idMail,fechaEntrada, fechaSalida) => {
    try {
      await dispatch(deleteReservas(idReserva));
      dispatch(getReservas_Admin({ page: paginaActual, itemsPerPage }));
      dispatch(envioNotificion({
        destinatario: idMail,
        asunto: `Cancelación Reserva N° ${idReserva}`,
        mensaje:`<p>Queremos informarle que la reserva <strong>N° ${idReserva}</strong> para las fechas desde <strong>${fechaEntrada}</strong> al <strong>${fechaSalida}</strong>, ha sido cancelada.</p>
        <p>Para más información, contáctenos a través de nuestro correo <a href="mailto:serenahotel25@gmail.com">serenahotel25@gmail.com</a>.</p>
        <br/>
        <br/>
        <p>Equipo Serena Hotel.<p>`
      }
      ))
    } catch (error) {
    }
  };

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
            <table className=" w-full">
              <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
                <tr>
                  <th className="py-5 px-12 tex-center ">Id de Reserva</th>
                  <th className="py-5 px-12 text-center">Nombre y Apellido</th>
                  <th className="py-5 px-12 text-center">Correo</th>
                  <th className="py-5 px-12 text-center">Teléfono</th>
                  <th className="py-5 px-12 text-center">Check-In</th>
                  <th className="py-5 px-12 text-center">Check-Out</th>
                  <th className="py-5 px-12 text-center">Habitación</th>
                  <th className="py-5 pl-6 pr-8 text-center"></th>
                </tr>
              </thead>
              <tbody>
                {ReservasTodasAdminPaginadas?.map((linea) => (
                  <tr className="border-b" key={linea.id_reserva}>
                    <td className="py-6 px-12 text-center">
                      {linea.id_reserva}
                    </td>
                    <td className="py-6 px-12 text-center">
                      {linea.nombre_y_apellido}
                    </td>
                    <td className="py-6 px-12 text-center">{linea.email}</td>
                    <td className="py-6 px-12 text-center">{linea.telefono}</td>
                    <td className="py-6 px-12 text-center">
                      {linea.fecha_entrada}
                    </td>
                    <td className="py-6 px-12 text-center">
                      {linea.fecha_salida}
                    </td>
                    <td className="py-6 px-12 text-center">
                      {linea.nombre_habitacion}
                    </td>
                    <td className="py-6 pl-2 pr-6 text-center">
                      <span
                        className="material-symbols-outlined w-10 h-16 flex items-center justify-center text-blanco opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                        onClick={() => handleDeleteReserva(linea.id_reserva, linea.email, linea.fecha_entrada, linea.fecha_salida)}
                      >
                        Delete
                      </span>
                     
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
            totalItems={reservasTodasAdmin.length}
            itemsPerPage={itemsPerPage}
          />
        </div>
      </div>
    </div>
  );
};

export default AdminReservasTabla;
