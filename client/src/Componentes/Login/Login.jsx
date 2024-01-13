// LoginTemplate.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useGoogle } from "./useGoogle";
import { useDispatch, useSelector } from 'react-redux';
import { estadoLogeo, putUsuario } from '../../redux/actions/actions';


export default function LoginTemplate() {
  const { onSuccess, onFailure, clientId } = useGoogle();
  const dispatch = useDispatch();
  const EstadoDeLogeo = useSelector((state) => state.estadoDeLogeo);
  console.log("Logeado antes de boton google", EstadoDeLogeo)
  

  
  const respuestaExitosa = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
    console.log(respuesta.profileObj.givenName);
    console.log(respuesta.profileObj.familyName);

    // Despacha la acción putUsuario para crear o actualizar el usuario en la base de datos
    dispatch(
      putUsuario({
        name: respuesta.profileObj.givenName,
        apellido: respuesta.profileObj.familyName,
        email: respuesta.profileObj.email,
      })
    );

    // Despacha la acción estadoLogeo para cambiar el estado de logeo
    dispatch(estadoLogeo(true));
  };
  console.log("Logeado despues de boton google", EstadoDeLogeo)

  

  const respuestaFallida = (error) => {
    console.log(error);
  }

  return (
    <div>
      <section>
        <div>
          <GoogleLogin
          className='w-full items-center justify-center'
            clientId={clientId}
            buttonText="Continúa Con Google"
            onSuccess={respuestaExitosa}
            onFailure={respuestaFallida}
            cookiePolicy={'single_host_origin'}
          />
        </div>
      </section>
    </div>
  );
}
