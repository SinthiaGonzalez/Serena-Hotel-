// LoginTemplate.js
import React from "react";
import { GoogleLogin } from "react-google-login";
import { useGoogle } from "./useGoogle";

export default function LoginTemplate() {
  const { onSuccess, onFailure, clientId } = useGoogle();

  const respuestaExitosa = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
    console.log(respuesta.profileObj.givenName);
    console.log(respuesta.profileObj.familyName);
  };

  const respuestaFallida = (error) => {
    console.log(error);
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
