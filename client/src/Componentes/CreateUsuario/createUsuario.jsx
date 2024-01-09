import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { postUsuario } from '../../redux/Actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';

import { GoogleLogin } from '@react-oauth/google';
import { gapi } from "gapi-script"

const CreateUsuario = () => {
  const dispatch = useDispatch();
  const [googleButtonClicked, setGoogleButtonClicked] = useState(false);

  const [user, setUser] = useState({
    name: '',
    apellido: '',
    email: '',
    telefono: '',
    contrasena: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postUsuario(user));
      // Limpiar el formulario restableciendo el estado
      setUser({
        name: '',
        apellido: '',
        email: '',
        telefono: '',
        contrasena: ''
      });
    } catch (error) {
      alert(error.message);
    }
  };

  const ClientID = "924967037695-3tbr2l92qj7l84sosjft20mt38hipt84.apps.googleusercontent.com";

  const handleGoogleButtonClick = () => {
    setGoogleButtonClicked(true);
  };

  useEffect(() => {
    if (googleButtonClicked) {
      const start = () => {
        window.gapi.load("auth2", () => {
          window.gapi.auth2
            .init({
              client_id: ClientID,
            })
            .then(() => {
              // La inicialización se completó correctamente
              console.log("La API de Google Sign-In se inicializó correctamente");
            })
            .catch((error) => {
              // Ocurrió un error durante la inicialización
              console.error("Error al inicializar la API de Google Sign-In:", error);
            });
        });
      };

      start();
    }
  }, [googleButtonClicked]);

  const onSuccess = (response) => {
    console.log(response);
  }

  const onFailure = () => {
    console.log("algo salió mal");
  }

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form onSubmit={handleSubmit} className="w-1/3 rounded-lg p-8" style={{ backgroundColor: 'white' }}>
        <h2 className="text-2xl mb-4">Crear Usuario</h2>

        <GoogleLogin
          clientid={ClientID}
          onSuccess={onSuccess}
          onFailure={onFailure}
          cookyepolicy={"single_host_policy"}
          onClick={handleGoogleButtonClick}
        />

        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={user.name}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={user.apellido}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faPhone} className="mr-2" />
            <input
              type="text"
              name="telefono"
              placeholder="Teléfono"
              value={user.telefono}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faLock} className="mr-2" />
            <input
              type="password"
              name="contrasena"
              placeholder="Contraseña"
              value={user.contrasena}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
        </div>
        <button type="submit" className="bg-[#FF3D00] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          REGISTRATE
        </button>
      </form>
    </div>
  );
};

export default CreateUsuario;






//validar que en comentario solo pueda comentar si o si para que solo comente si ya ha evho una reserva
//que sea que este logeado y haya