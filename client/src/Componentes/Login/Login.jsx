// LoginTemplate.js
import React from 'react';
import { GoogleLogin } from 'react-google-login';
import { useGoogle } from "./useGoogle";
import { useDispatch } from 'react-redux';
import { putUsuario } from '../../redux/actions/actions';


export default function LoginTemplate() {
  const { onSuccess, onFailure, clientId } = useGoogle();
  const dispatch = useDispatch();

  
  const respuestaExitosa = (respuesta) => {
    console.log(respuesta);
    console.log(respuesta.profileObj);
    console.log(respuesta.profileObj.givenName);
    console.log(respuesta.profileObj.familyName);

    dispatch( putUsuario({
      name: respuesta.profileObj.givenName,
      apellido: respuesta.profileObj.familyName,
      email: respuesta.profileObj.email,
    }));
  };
  

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
