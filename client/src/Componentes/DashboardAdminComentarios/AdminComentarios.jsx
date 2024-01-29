import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllcomentarios,
  eliminarComentario,
} from "../../redux/Actions/actions";
import { Link } from "react-router-dom";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AdminCardComentarios from "./AdminCardComentarios";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import Paginacion from "../Paginacion/Paginacion";
import { useVerificarIsAdmin } from "../AutenticadorToken/autenticadorLocalStIsAdmin";
import Swal from 'sweetalert2'

const AdminComentarios = () => {
  useVerificarIsAdmin()
  const dispatch = useDispatch();
  const comentarios = useSelector((state) => state.comentarios);
  const itemsPerPage = 3;
  const [activePage, setActivePage] = useState(1);

  useEffect(() => {
    dispatch(getAllcomentarios());
  }, [dispatch]);

  const handleEliminarComentario = (id) => {
    dispatch(eliminarComentario(id));
  };

  const handleLinkClick = () => {
    // Verificar si hay un token en el localStorage
    const token = localStorage.getItem("token");

    // Si hay un token, permitir la navegación a la ruta "/comentar"
    if (token) {
      window.location.href = "/comentar"; // Redirigir a la ruta "/comentar"
    } else {
      // Si no hay un token, mostrar un alert y realizar otras acciones según sea necesario
      Swal.fire({
        title:"Necesita iniciar Sesion para dejar comentarios en la pagina",
        icon:"error",
        confirmButtonColor:"#FB350C",
        iconColor: "#FB350C"
      });
      // Puedes realizar otras acciones aquí, como redirigir a otra ruta, mostrar un modal, etc.
    }
  };

  const paginatedComentarios = comentarios.slice(
    (activePage - 1) * itemsPerPage,
    activePage * itemsPerPage
  );

  return (
    <div>
      <NavBarAdmin />

      <div className="bg-blanco items-center justify-center pt-12 pb-6">
        <div className="contenedor bg-verde w-3/4 rounded-lg p-8 mx-auto">
          <h2 className="text-center text-2xl font-bold mb-8">Comentarios</h2>
          <div className="">
            {paginatedComentarios.map((comentario, index) => (
                <AdminCardComentarios
                  key={index}
                  comentario={comentario}
                  onDelete={handleEliminarComentario}
                />
              ))}
          </div>
        </div>
      </div>
      <Paginacion
        active={activePage}
        setActive={setActivePage}
        totalItems={comentarios.length}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default AdminComentarios;
