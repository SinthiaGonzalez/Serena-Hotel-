/*COMPONENTE PARA LOGUEARSE INGRESANDO VIA BOTON DE GOOGLE (crea usuario sin contraseña)*/
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useGoogle } from "./useGoogle.jsx";
import { useDispatch, useSelector } from "react-redux";
import { postUsuarioGoogle } from "../../redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken.jsx";
import Swal from "sweetalert2";
export default function LoginTemplate() {
  const { onSuccess, onFailure, clientId } = useGoogle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useVerificarToken();

  const respuestaExitosa = async (respuesta) => {
    //console.log(respuesta);
    // console.log(respuesta.profileObj.givenName);
    //console.log(respuesta.profileObj.familyName);
    // Despacha la acción putUsuario para crear o actualizar el usuario en la base de datos

    await dispatch(
      postUsuarioGoogle({
        name: respuesta.profileObj.givenName,
        apellido: respuesta.profileObj.familyName,
        email: respuesta.profileObj.email,
      })
    );
    //navigate("/");

    let estado = localStorage.getItem("estado");
    //alert (estado)
    estado = localStorage.getItem("estado");
    if (estado === '"activo"') {
      //alert("linea 31 activo")
      const isAdmin = localStorage.getItem("isAdmin");
      //alert("verificacion 33"+isAdmin+ "estado" + estado)
      if (isAdmin === "true") navigate("/admin-usuarios");
      if (isAdmin === "false") navigate("/");
    } else if (estado === '"eliminar"') {
      Swal.fire({
        title: "Si desea recuperar su cuenta, presione ACEPTAR.",
        icon: "error",
        confirmButtonColor: "#FB350C",
        iconColor: "#FB350C",
      });
      /* LINEA PARA Q SI se CAMBIA A OTRA RUTA NO ESTË LOGUEADO */
      localStorage.removeItem("token");
      navigate("/recuperar-usuario");
    } else if (estado === '"inactivo"') {
      Swal.fire({
        title:
          "Su cuenta se encuentra inactiva, por favor comuníquese con: serenahotel25@gmail.com. Muchas gracias.",
        icon: "error",
        confirmButtonColor: "#FB350C",
        iconColor: "#FB350C",
      });
      /* LINEA PARA Q SI se CAMBIA A OTRA RUTA NO ESTË LOGUEADO */
      localStorage.removeItem("token");
    }
  };

  const respuestaFallida = (error) => {
    console.log("Error en la autenticación de Google:", error);
    // Puedes agregar lógica adicional para manejar el error localmente
  };
  return (
    <div>
      <section>
        <div>
          <GoogleLogin
            className="w-full items-center justify-center"
            clientId={clientId}
            buttonText="Continúa Con Google"
            onSuccess={respuestaExitosa}
            onFailure={respuestaFallida}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </section>
    </div>
  );
}
