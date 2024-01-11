//import NavBarHome from "../NavBarHome/NavBarHome";
//import { Link } from 'react-router-dom';

import LoginTemplate from "../Login/Login";

const LoginCliente = () => {
  //https://www.material-tailwind.com/docs/html/card#login-card
  return (
    <div
      className="relative bg-cover bg-center h-screen text-white text-center"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
        height: "auto",
        padding: "5% 8%",
        display: "flex",
      }}
    >
      <div className="relative flex flex-col text-gris bg-blanco shadow-md w-28 bg-clip-border justify-center w-[70%] p-2 rounded-l-lg">
        <div className="flex flex-col gap-4 p-6 ">
          <a 
            href="/"
            class="ml-[8%] text-left block font-inter text-base antialiased font-bold text-naranja text-inter hover:scale-105 w-1/6"
          >
            🡰 Volver
          </a>
          <p className="flex mt-4 mb-10 font-inter text-3xl antialiased leading-normal text-center justify-center">
            Te damos la Bienvenida nuevamente!
          </p>

          <div className="w-2/3 ml-[18%] justify-center text-center rounded-lg">
            <LoginTemplate />
          </div>

          <p className="flex font-inter text-xl antialiased font-base leading-normal justify-center my-2">
            ó
          </p>

          <div className="flex flex-row w-2/3 bg-verde ml-[18%] relative rounded-lg">
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
            />
          </div>

          <div className="flex flex-row w-2/3 bg-verde ml-[18%] relative rounded-lg">
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
              placeholder="password"
              type="password"
            />
          </div>

        </div>

        <div className="p-6 pt-2">
          <button
            className="w-2/4 mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
          >
            INICIAR SESIÓN
          </button>
        </div>
      </div>

      <div className="block flex flex-col text-blanco w-[40%] bg-verde pt-[5%] px-[3%] rounded-r-lg">
        <div className="p-6 pt-0">
          <h1 className="ml-[20%] flex mt-6 font-inter text-2xl antialiased font-extrabold  leading-normal text-left">
            ¿NO TIENES <br /> UNA CUENTA?
          </h1>
          <p className="ml-[20%] mt-[25%] mb-[30%] text-2xl antialiased font-extrabold text-inter text-left">
            Regístrate para <br /> acceder a lo <br /> mejor de <br /> SERENA
            HOTELS
          </p>

          <div className="p-6 pt-0">
            <a
              href="/registrarse"
              className="w-5/6 mb-4 select-none rounded-lg py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-naranja transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
              type="button"
            >
              REGÍSTRATE AHORA
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default LoginCliente;
/*
<a href="https://iconscout.com/icons/google" class="text-underline font-size-sm" target="_blank">Google</a> by <a href="https://iconscout.com/contributors/icon-mafia" class="text-underline font-size-sm">Icon Mafia</a> on <a href="https://iconscout.com" class="text-underline font-size-sm">IconScout</a>
    */
