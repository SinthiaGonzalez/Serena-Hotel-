import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { recuperarContraseñaAction } from "../../redux/Actions/actions";

const RecuperarContraseña = () => {
  const dispatch = useDispatch();
  const [correo, setCorreo] = useState("");

  const handleCorreoChange = (event) => {
    setCorreo(event.target.value);
  };

  const handleRecuperarContraseña = () => {
    dispatch(recuperarContraseñaAction(correo));
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8 h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="relative text-gris bg-blanco shadow-md bg-clip-border justify-center md:w-2/3 h-auto lg:p-2 rounded-lg">
        <div className="flex flex-col gap-4 p-6 mt-8 ">
          <a
            href="/logearse"
            class="font-inter text-base  antialiased font-bold text-naranja text-inter hover:scale-105 md:w-1/6 lg:mt-6 pl-4 mb-8 md:pl-0 mr-auto"
          >
            🡰 Volver
          </a>
          <p className="flex font-inter text-3xl antialiased leading-normal text-center font-bold text-gris justify-center mb-10">
            Recuperar Contraseña
          </p>
          <p className="font-inter mb-4">
            Vamos a enviarte un email con tu nueva clave.
          </p>

          <div className="flex flex-row lg:w-2/3 bg-verde lg:ml-[18%] relative rounded-lg mb-12">
            <div className="items-center">
              <svg
                className="w-[80px] h-11 p-2 border-r-4 border-naranja"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  fill="#ffffff"
                  d="M64 112c-8.8 0-16 7.2-16 16v22.1L220.5 291.7c20.7 17 50.4 17 71.1 0L464 150.1V128c0-8.8-7.2-16-16-16H64zM48 212.2V384c0 8.8 7.2 16 16 16H448c8.8 0 16-7.2 16-16V212.2L322 328.8c-38.4 31.5-93.7 31.5-132 0L48 212.2zM0 128C0 92.7 28.7 64 64 64H448c35.3 0 64 28.7 64 64V384c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V128z"
                />
              </svg>
            </div>

            <input
              className="w-full h-11 font-inter text-center pr-12 lg:pr-16 xl:pr-24 text-base font-normal text-white bg-verde rounded-lg"
              placeholder="Correo"
              type="mail"
              value={correo}
              onChange={handleCorreoChange}
            />
          </div>
        </div>

        <div className="p-6 pt-2">
          <button
            onClick={handleRecuperarContraseña}
            className="md::w-2/4 mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
          >
            RECUPERAR CONTRASEÑA
          </button>
        </div>
      </div>
    </div>
  );
};
export default RecuperarContraseña;
