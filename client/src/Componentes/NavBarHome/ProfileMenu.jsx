/* eslint-disable no-unused-vars */
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/24/solid";

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  const navigate = useNavigate();
  const handlerSesion = (e) => {
    localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("imagen");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    navigate("/logearse");
  };

  const imagenUsuario = JSON.parse(localStorage.getItem("imagen"));
  const name = JSON.parse(localStorage.getItem("name"));
  const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));

  // const formattedName =
  //   name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();

  return (
    <Menu open={isMenuOpen} handler={setIsMenuOpen} placement="bottom-end">
      <MenuHandler>
        <Button
          variant="text"
          color="blue-gray"
          className="flex items-center gap-1 rounded-full py-0.5 pr-2 pl-0.5"
        >
          <Avatar
            variant="circular"
            size="sm"
            alt="tania andrew"
            className="border border-gray-900 p-0.5"
            src={imagenUsuario}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>

      <MenuList className="text-lg text-white bg-verde border-0 w-60 flex flex-col items-center p-1">
        <p className="p-1 font-medium focus:outline-none text-xl my-3">
          ¡Hola, {name}!
        </p>
        <Link to="/clientePerfil">
          <img
            className="h-36 w-36 mb-3 object-cover rounded-full focus:outline-none"
            src={imagenUsuario}
            alt="https://res.cloudinary.com/de2jgnztx/image/upload/v1705619360/habitaciones/dsqhjd0wd9xqe9anigxj.png"
          />
        </Link>

        <MenuItem
          key="Mi Perfil"
          onClick={closeMenu}
          className="border-0 my-1 gap-2 rounded-xm focus:bg-naranja focus:text-white"
        >
          <Typography
            onClick={() => {
              navigate("/clientePerfil");
            }}
            className="flex flex-row items-center gap-2 justify-center font-medium w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M224 256A128 128 0 1 0 224 0a128 128 0 1 0 0 256zm-45.7 48C79.8 304 0 383.8 0 482.3C0 498.7 13.3 512 29.7 512H418.3c16.4 0 29.7-13.3 29.7-29.7C448 383.8 368.2 304 269.7 304H178.3z"
              />
            </svg>
            Mi Perfil
          </Typography>
        </MenuItem>

        {isAdmin ? (
          <MenuItem
            key="Tablero Admin."
            onClick={closeMenu}
            className="border-0 my-1 gap-2 rounded-xm focus:bg-naranja focus:text-white"
          >
            <Typography
              onClick={() => {
                navigate("/admin-reservas");
              }}
              className="flex flex-row items-center gap-2 justify-center font-medium w-full"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="20"
                viewBox="0 0 448 512"
              >
                <path
                  fill="#ffffff"
                  d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm64 192c17.7 0 32 14.3 32 32v96c0 17.7-14.3 32-32 32s-32-14.3-32-32V256c0-17.7 14.3-32 32-32zm64-64c0-17.7 14.3-32 32-32s32 14.3 32 32V352c0 17.7-14.3 32-32 32s-32-14.3-32-32V160zM320 288c17.7 0 32 14.3 32 32v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V320c0-17.7 14.3-32 32-32z"
                />
              </svg>
              Tablero Admin
            </Typography>
          </MenuItem>
        ) : (
          ""
        )}

        <MenuItem
          key="Cerrar Sesión"
          onClick={closeMenu}
          className="border-0  items-center my-1 justify-center gap-2 rounded-xm focus:bg-naranja focus:text-white"
        >
          <Typography
            onClick={handlerSesion}
            className="flex flex-row items-center gap-2 justify-center font-medium w-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="20"
              viewBox="0 0 448 512"
            >
              <path
                fill="#ffffff"
                d="M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z"
              />
            </svg>
            Cerrar Sesión
          </Typography>
        </MenuItem>
      </MenuList>
    </Menu>
  );
}
export default ProfileMenu;
