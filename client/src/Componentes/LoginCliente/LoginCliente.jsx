/*COMPONENTE PARA LOGUEARSE INGRESANDO MANUALMENTE MAIL Y CONTRASEÑA*/
import { useDispatch, useSelector } from "react-redux";
import LoginTemplate from "../Login/Login";
import { useState } from "react";
import {
  estadoLogeo,
  verificacionLogeoUsuarioAction,
} from "../../redux/Actions/actions";
import { useNavigate } from "react-router-dom";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";
import Swal from "sweetalert2";

const LoginCliente = () => {
  const dispatch = useDispatch();
  const [email, setemail] = useState("");
  const [contraseña, setContraseña] = useState("");
  const navigate = useNavigate();
  const handleemailChange = (event) => {
    setemail(event.target.value);
  };

  const handleContraseñaChange = (event) => {
    setContraseña(event.target.value);
  };

  const handleVerificarUsuario = async () => {
    await dispatch(verificacionLogeoUsuarioAction({ email, contraseña }));
    let estado = localStorage.getItem("estado"); 
    //alert (estado)
      estado = localStorage.getItem("estado"); 
  
      if(estado==='"activo"') {
        //alert("linea 31 activo")
        const isAdmin = localStorage.getItem("isAdmin"); 
        //alert("verificacion 33"+isAdmin+ "estado" + estado)
        if(isAdmin === "true") navigate("/admin-usuarios")
        if(isAdmin === "false") navigate("/")
      }else if(estado === '"eliminar"'){
       
        Swal.fire("Su Cuenta no se encuentra activa, lo redireccionaremos para que pueda recuperarla.", "", "warning");
        /* LINEA PARA Q SI se CAMBIA A OTRA RUTA NO ESTË LOGUEADO */
        localStorage.removeItem("token");     
        navigate("/recuperar-usuario") 
      }else if(estado === '"inactivo"'){
        Swal.fire("Su Usuario se encuentra inactivo, por favor comuníquese con serenahotel25@gmail.com ¡Muchas gracias!", "", "warning")
       /* LINEA PARA Q SI se CAMBIA A OTRA RUTA NO ESTË LOGUEADO */
        localStorage.removeItem("token");      
      }  
   };

  useVerificarToken();

  const [showPassword, setShowPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-4 lg:p-8 h-full md:h-[100vh] lg:h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="flex-col lg:flex lg:flex-row w-full lg:w-4/5">
        <div className="flex flex-col text-gris bg-blanco shadow-md bg-clip-border justify-center w-full lg:w-[70%] p-2 rounded-lg lg:rounded-r-none">
          <div className="flex flex-col gap-4 p-6 ">
            <a
              href="/"
              className="ml-[8%] text-left block font-inter text-base antialiased font-bold text-naranja text-inter hover:scale-105 lg:w-1/6"
            >
              🡰 Volver
            </a>
            <p className="flex mt-2 lg:mt-4 mb-4 lg:mb-10 font-inter text-xl lg:text-3xl antialiased leading-normal text-center justify-center">
              Te damos la Bienvenida nuevamente!
            </p>

            <div className="w-full lg:w-2/3 ml-0 lg:ml-[18%] justify-center text-center rounded-lg">
              <LoginTemplate />
            </div>

            <p className="flex font-inter text-xl antialiased font-base leading-normal justify-center my-2">
              ó
            </p>

            <div className="flex flex-row w-full lg:w-2/3 bg-verde ml-0 lg:ml-[18%] relative rounded-lg">
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
                className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                placeholder="Correo"
                type="mail"
                value={email}
                onChange={handleemailChange}
              />
            </div>

            <div className="flex flex-row w-full lg:w-2/3 bg-verde ml-0 lg:ml-[18%] relative rounded-lg">
              <div className="items-center">
                <svg
                  className="w-[80px] h-11 p-2 border-r-4 border-naranja"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 512 512"
                >
                  <path
                    fill="#ffffff"
                    d="M144 144v48H304V144c0-44.2-35.8-80-80-80s-80 35.8-80 80zM80 192V144C80 64.5 144.5 0 224 0s144 64.5 144 144v48h16c35.3 0 64 28.7 64 64V448c0 35.3-28.7 64-64 64H64c-35.3 0-64-28.7-64-64V256c0-35.3 28.7-64 64-64H80z"
                  />
                </svg>
              </div>

              <input
                className="w-full h-11 font-inter text-center pr-24 text-base font-normal text-white bg-verde rounded-lg"
                placeholder="Contraseña"
                type={showPassword ? "text" : "password"}
                value={contraseña}
                onChange={handleContraseñaChange}
              />
              <button
                className="absolute material-symbols-outlined text-blanco right-4 top-3 text-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleTogglePassword}
                type="button"
              >
                {showPassword ? "visibility_off" : "visibility"}
              </button>
            </div>
          </div>

          <a href="/recuperar-contraseña" className="mb-2 text-naranja">
            ¿Has olvidado tu contraseña?
          </a>

          <div className="p-6 pt-2">
            <button
              onClick={handleVerificarUsuario}
              className="w-3/4 lg:w-2/4 mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
              type="button"
            >
              INICIAR SESIÓN
            </button>
          </div>
        </div>

        <div className="block flex flex-col text-blanco w-full px-0 lg:w-[40%] bg-verde pt-[5%] lg:px-[3%] rounded-lg lg:rounded-l-none mt-4 lg:mt-0">
          <div className="p-6 pt-0">
            <h1 className="lg:ml-[20%] lg:flex mt-6 font-inter text-xl lg:text-2xl antialiased font-extrabold  leading-normal text-center lg:text-left">
              ¿NO TIENES <br className="hidden lg:block" /> UNA CUENTA?
            </h1>
            <p className="lg:ml-[20%] my-8 lg:mt-[20%] lg:mb-[15%] text-base lg:text-2xl antialiased font-extrabold text-inter text-center lg:text-left">
              Regístrate para <br className="hidden lg:block" /> acceder a lo{" "}
              <br /> mejor de <br className="hidden lg:block" /> SERENA HOTELS
            </p>
            <a href="/recuperar-usuario" className="mb-[20%] text-naranja">
            ¿Quieres recuperar tu cuenta?
          </a>

            <div className="p-6">
              <a
                href="/registrarse"
                className="w-5/6 mb-0 mt-2 lg:mb-4 select-none rounded-lg py-3.5 lg:px-7 text-center align-middle font-inter text-base font-bold uppercase text-naranja transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
                type="button"
              >
                REGÍSTRATE AHORA
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginCliente;