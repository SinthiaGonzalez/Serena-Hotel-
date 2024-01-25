import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const NavBarCliente = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const handlerSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("imagen");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    navigate("/logearse");
  };
  const navList = (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="text-blanco h-12 hover:bg-naranja rounded-xl flex items-center gap-x-2 p-2 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            fill="#ffffff"
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
        <a href="/ClientePerfil" className="font-medium flex items-center">
          USUARIO
        </a>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="text-blanco h-12 hover:bg-naranja rounded-xl flex items-center gap-x-2 p-2 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="14"
          viewBox="0 0 448 512"
        >
          <path
            fill="#ffffff"
            d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
          />
        </svg>

        <a href="/clienteReservas" className="font-medium flex items-center">
          RESERVAS
        </a>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="!bg-verde opacity-100 border-0 mx-auto max-w-screen-3xl rounded-xs p-7 p-7 lg:pl-10">
      <div className="container mx-auto flex items-center justify-between text-blanco">
        <Typography
          as="a"
          href="/"
          className="mr-4 text-blanco -cursor-pointer py-1.5 font-medium"
        >
          SERENA HOTEL
        </Typography>
        <div className="hidden lg:block">{navList}</div>
        <div className="flex items-center gap-x-1">
          <Button
            size="sm"
            className="border-2 border-naranja hover:border-blanco bg-naranja hidden lg:inline-block"
            onClick={handlerSesion}
          >
            <span>Salir</span>
          </Button>
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          <div className="flex items-center">
            <Button fullWidth size="sm" className="bg-naranja">
              <span>Salir</span>
            </Button>
          </div>
        </div>
      </Collapse>
    </Navbar>
  );
};
export default NavBarCliente;
