import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginacion from "../Paginacion/Paginacion";
import { getUsuarios } from "../../redux/Actions/actions";

const AdminUsuariosTabla = () => {
  const dispatch = useDispatch();
  const TodosLosUsuario = useSelector((state) => state.usuarios);
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => {
    dispatch(getUsuarios());
  }, []);

  const handlePaginaChange = (nuevaPagina) => {
    setPaginaActual(nuevaPagina);
  };

  const totalActivos = TodosLosUsuario.filter(
    (usuario) => usuario.estado === "activo"
  ).length;
  const totalInactivos = TodosLosUsuario.filter(
    (usuario) => usuario.estado === "inactivo"
  ).length;

  const UsuariosPaginados = TodosLosUsuario.slice(
    (paginaActual - 1) * itemsPerPage,
    paginaActual * itemsPerPage
  );

  const [nuevoEstado, setNuevoEstado] = useState("");

  const handleEstadoChange = (event, usuarioId, estadoActual) => {
    const nuevoEstado = event.target.value;
    if (nuevoEstado !== estadoActual) {
      dispatch(cambiarEstadoUsuario(usuarioId, nuevoEstado));
    }
  };

  return (
    <div className="flex flex-col items-center justify-center mb-8">
      <div className="border-2 border-verde h-[15%] w-[55%] rounded-3xl flex p-6 m-10">
        <div className="flex-1 border-r-2 border-verde flex items-center justify-center">
          <span className="material-symbols-outlined bg-black rounded-full h-16 w-16 flex items-center justify-center text-white mr-4">
            group
          </span>

          <div className="mr-4">
            <p className="text-verde text-center font-bold text-2xl ">
              Total usuarios
            </p>
            <p className="text-verde font-extrabold text-center text-4xl">
              {TodosLosUsuario.length}
            </p>
          </div>
        </div>

        <div className="flex-1 border-r-2 border-verde flex items-center justify-center mr-4">
          <span className="material-symbols-outlined bg-black rounded-full h-16 w-16 flex items-center justify-center text-white mr-4">
            Person_check
          </span>

          <div>
            <p className="text-verde text-center font-bold text-2xl">
              Total activos
            </p>
            <p className="text-verde font-extrabold text-center text-4xl">
              {totalActivos}
            </p>
          </div>
        </div>
        <div className="flex-1  flex items-center justify-center">
          <span className="material-symbols-outlined bg-black rounded-full h-16 w-16 flex items-center justify-center text-white mr-4">
            Person_Cancel
          </span>

          <div>
            <p className="text-verde text-center font-bold text-2xl">
              Total inactivos
            </p>
            <p className="text-verde font-extrabold text-center text-4xl">
              {totalInactivos}
            </p>
          </div>
        </div>
      </div>
      <div className="bg-verde p-6 rounded-md">
        <h2 className="text-center text-2xl font-bold my-2">Usuarios</h2>
        <div className="p-5 rounded-md shadow-md mb-4 overflow-x-auto">
          <table className="w-full">
            <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
              <tr>
                <th className="py-5 px-12 tex-center ">Id Usuario</th>
                <th className="py-5 px-12 text-center">Nombre y Apellido</th>
                <th className="py-5 px-12 text-center">Correo</th>
                <th className="py-5 px-12 text-center">Teléfono</th>
                <th className="py-5 px-12 text-center">Estado</th>
              </tr>
            </thead>
            <tbody>
              {UsuariosPaginados?.map((linea) => (
                <tr className="border-b" key={linea.id_reserva}>
                  <td className="py-6 px-12 text-center">{linea.id}</td>
                  <td className="py-6 px-12 text-center">
                    {linea.name + " " + linea.apellido}
                  </td>
                  <td className="py-6 px-12 text-center">{linea.email}</td>
                  <td className="py-6 px-12 text-center">{linea.telefono}</td>
                  <td className="py-6 px-12 text-center">
                    <select
                      key={linea.id}
                      value={nuevoEstado || linea.estado}
                      onChange={(e) => setNuevoEstado(e.target.value)}
                      className={`py-2 px-4 rounded text-center ${
                        nuevoEstado === "activo"
                          ? "bg-green-500"
                          : nuevoEstado === "inactivo"
                          ? "bg-gray-500"
                          : nuevoEstado === "eliminar"
                          ? "bg-red-500"
                          : ""
                      }`}
                    >
                      <option value="activo" className="bg-green-500">Activo</option>
                      <option value="inactivo" className="bg-gray-500" >Inactivo</option>
                      <option value="eliminar" className="bg-red-500">Eliminar</option>
                    </select>
                  </td>
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
        totalItems={TodosLosUsuario.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

{
  /* <td className="py-4 px-2 text-left">
                      <div className="bg-green-800 text-white py-2 px-4 rounded border border-green-500 text-center">
                        Activo
                      </div>
                    </td> */
}

export default AdminUsuariosTabla;
