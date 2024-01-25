// LoginTemplate.js
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useGoogle } from "./useGoogle.jsx";
import { useDispatch } from "react-redux";
import { postUsuarioGoogle } from "../../redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken.jsx";
export default function LoginTemplate() {
  const { onSuccess, onFailure, clientId } = useGoogle();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useVerificarToken();
  const respuestaExitosa = (respuesta) => {
    //console.log(respuesta);
    // console.log(respuesta.profileObj);
    // console.log(respuesta.profileObj.givenName);
    //console.log(respuesta.profileObj.familyName);
    // Despacha la acción putUsuario para crear o actualizar el usuario en la base de datos
    dispatch(
      postUsuarioGoogle({
        name: respuesta.profileObj.givenName,
        apellido: respuesta.profileObj.familyName,
        email: respuesta.profileObj.email,
      })
    );
    navigate("/");
  };
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
  console.log("Login", isAdmin);
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
