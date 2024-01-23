import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const NavBarAdmin = () => {
  const [openNav, setOpenNav] = React.useState(false);
  const navigate = useNavigate();
  const handlerSesion = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("imagen");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    navigate("/logearse");
  };
  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

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
            d="M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z"
          />
        </svg>

        <a href="/admin-reservas" className="font-medium flex items-center">
          RESERVAS
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
            d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
          />
        </svg>
        <a href="/admin-usuarios" className="font-medium flex items-center">
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
          width="20"
          viewBox="0 0 640 512"
        >
          <path
            fill="#ffffff"
            d="M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z"
          />
        </svg>
        <a
          href="/admin-habitaciones"
          className="font-medium  flex items-center"
        >
          HABITACIONES
        </a>
      </Typography>
      {/* <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="text-blanco h-12 hover:bg-naranja rounded-xl flex items-center gap-x-2 p-2 font-medium"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="16"
          width="16"
          viewBox="0 0 512 512"
        >
          <path
            fill="#ffffff"
            d="M320 96H192L144.6 24.9C137.5 14.2 145.1 0 157.9 0H354.1c12.8 0 20.4 14.2 13.3 24.9L320 96zM192 128H320c3.8 2.5 8.1 5.3 13 8.4C389.7 172.7 512 250.9 512 416c0 53-43 96-96 96H96c-53 0-96-43-96-96C0 250.9 122.3 172.7 179 136.4l0 0 0 0c4.8-3.1 9.2-5.9 13-8.4zm84 88c0-11-9-20-20-20s-20 9-20 20v14c-7.6 1.7-15.2 4.4-22.2 8.5c-13.9 8.3-25.9 22.8-25.8 43.9c.1 20.3 12 33.1 24.7 40.7c11 6.6 24.7 10.8 35.6 14l1.7 .5c12.6 3.8 21.8 6.8 28 10.7c5.1 3.2 5.8 5.4 5.9 8.2c.1 5-1.8 8-5.9 10.5c-5 3.1-12.9 5-21.4 4.7c-11.1-.4-21.5-3.9-35.1-8.5c-2.3-.8-4.7-1.6-7.2-2.4c-10.5-3.5-21.8 2.2-25.3 12.6s2.2 21.8 12.6 25.3c1.9 .6 4 1.3 6.1 2.1l0 0 0 0c8.3 2.9 17.9 6.2 28.2 8.4V424c0 11 9 20 20 20s20-9 20-20V410.2c8-1.7 16-4.5 23.2-9c14.3-8.9 25.1-24.1 24.8-45c-.3-20.3-11.7-33.4-24.6-41.6c-11.5-7.2-25.9-11.6-37.1-15l0 0-.7-.2c-12.8-3.9-21.9-6.7-28.3-10.5c-5.2-3.1-5.3-4.9-5.3-6.7c0-3.7 1.4-6.5 6.2-9.3c5.4-3.2 13.6-5.1 21.5-5c9.6 .1 20.2 2.2 31.2 5.2c10.7 2.8 21.6-3.5 24.5-14.2s-3.5-21.6-14.2-24.5c-6.5-1.7-13.7-3.4-21.1-4.7V216z"
          />
        </svg>
        <a href="#" className="font-medium  flex items-center">
          FINANZAS
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
            d="M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z"
          />
        </svg>
        <a href="#" className="font-medium flex items-center">
          NOTIFICACIONES
        </a>
      </Typography> */}
    </ul>
  );

  return (
    <Navbar className="bg-verde opacity-85 border-0 mx-auto max-w-screen-3xl rounded-xs p-7 lg:pl-10">
      <div className="container mx-auto flex items-center justify-between text-blanco">
        <Typography
          as="a"
          href="/"
          className="mr-4 text-blanco  cursor-pointer py-1.5 font-medium"
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
export default NavBarAdmin;
