import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Paginacion from "../Paginacion/Paginacion";
import { getUsuarios } from "../../redux/Actions/actions";
import  Linea  from "./LineaTablaAdminUsuarios.jsx"

const AdminUsuariosTabla = () => {
  const dispatch = useDispatch();
  const TodosLosUsuario = useSelector((state) => state.usuarios); 
  const [paginaActual, setPaginaActual] = useState(1);
  const [itemsPerPage] = useState(5);

  useEffect(() => { //montado del comp.
    dispatch(getUsuarios());    
   
  }, []);

  useEffect(() => { //actualizacion del comp.
  console.log("Re montado del componente")
  console.log("TodosLosUsuario LENGTH", TodosLosUsuario.length)
  }, [TodosLosUsuario]);

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
                <th className="py-5 px-12 text-center">Telefono</th>
                <th className="py-5 px-12 text-center">Estado</th>              
              </tr>
            </thead>
            <tbody>   
                {UsuariosPaginados?.map((linea) => (
                <Linea linea={linea} key={linea.id}/>  
                ))}   
            </tbody>

            <tbody>   
                {UsuariosPaginados?.map((linea) => (
                <Linea linea={linea} key={linea.id}/>  
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


export default AdminUsuariosTabla;
