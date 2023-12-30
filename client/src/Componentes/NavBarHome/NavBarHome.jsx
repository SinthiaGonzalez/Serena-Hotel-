/* eslint-disable no-unused-vars */
import React from "react";
import keanu from "../../../public/keanu.jpg";
import { useState } from "react";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Avatar,
  Card,
  IconButton,
} from "@material-tailwind/react";
import {
  Square3Stack3DIcon,
  ChevronDownIcon,
  RocketLaunchIcon,
  Bars2Icon,
} from "@heroicons/react/24/solid";

// profile menu component
const profileMenuItems = [
  {
    label: "Notificaciones",
    d: "M224 0c-17.7 0-32 14.3-32 32V51.2C119 66 64 130.6 64 208v18.8c0 47-17.3 92.4-48.5 127.6l-7.4 8.3c-8.4 9.4-10.4 22.9-5.3 34.4S19.4 416 32 416H416c12.6 0 24-7.4 29.2-18.9s3.1-25-5.3-34.4l-7.4-8.3C401.3 319.2 384 273.9 384 226.8V208c0-77.4-55-142-128-156.8V32c0-17.7-14.3-32-32-32zm45.3 493.3c12-12 18.7-28.3 18.7-45.3H224 160c0 17 6.7 33.3 18.7 45.3s28.3 18.7 45.3 18.7s33.3-6.7 45.3-18.7z",
  },
  {
    label: "Cerrar Sesión",
    d: "M377.9 105.9L500.7 228.7c7.2 7.2 11.3 17.1 11.3 27.3s-4.1 20.1-11.3 27.3L377.9 406.1c-6.4 6.4-15 9.9-24 9.9c-18.7 0-33.9-15.2-33.9-33.9l0-62.1-128 0c-17.7 0-32-14.3-32-32l0-64c0-17.7 14.3-32 32-32l128 0 0-62.1c0-18.7 15.2-33.9 33.9-33.9c9 0 17.6 3.6 24 9.9zM160 96L96 96c-17.7 0-32 14.3-32 32l0 256c0 17.7 14.3 32 32 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32l-64 0c-53 0-96-43-96-96L0 128C0 75 43 32 96 32l64 0c17.7 0 32 14.3 32 32s-14.3 32-32 32z",
  },
];

function ProfileMenu() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const closeMenu = () => setIsMenuOpen(false);
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
            src={keanu}
          />
          <ChevronDownIcon
            strokeWidth={2.5}
            className={`h-3 w-3 transition-transform ${
              isMenuOpen ? "rotate-180" : ""
            }`}
          />
        </Button>
      </MenuHandler>
      <MenuList className="flex text-lg text-blanco bg-verde border-0 w-60 flex flex-col items-center p-1">
        <p className="p-1 font-medium focus:outline-none">Perfil</p>
        <img
          className="h-36 w-36 object-cover rounded-full focus:outline-none"
          src={keanu}
          alt="Keanu"
        />
        <p className="p-1 font-medium focus:outline-none">¡Hola,Keanu!</p>
        {profileMenuItems.map(({ label, d }, key) => {
          // const isLastItem = key === profileMenuItems.length - 1;
          return (
            <MenuItem
              key={label}
              onClick={closeMenu}
              className="border-0 flex flex-row items-center my-1 justify-center gap-2 rounded-xm focus:bg-naranja focus:text-blanco"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                height="16"
                width="20"
                viewBox="0 0 448 512"
              >
                <path fill="#ffffff" d={d} />
              </svg>
              <Typography as="span" variant="small" className="font-normal">
                {label}
              </Typography>
            </MenuItem>
          );
        })}
      </MenuList>
    </Menu>
  );
}
const navListItems = [
  {
    label: "ACERCA DE",
    href: "#",
    xmlns: "http://www.w3.org/2000/svg",
    d: "M144 0a80 80 0 1 1 0 160A80 80 0 1 1 144 0zM512 0a80 80 0 1 1 0 160A80 80 0 1 1 512 0zM0 298.7C0 239.8 47.8 192 106.7 192h42.7c15.9 0 31 3.5 44.6 9.7c-1.3 7.2-1.9 14.7-1.9 22.3c0 38.2 16.8 72.5 43.3 96c-.2 0-.4 0-.7 0H21.3C9.6 320 0 310.4 0 298.7zM405.3 320c-.2 0-.4 0-.7 0c26.6-23.5 43.3-57.8 43.3-96c0-7.6-.7-15-1.9-22.3c13.6-6.3 28.7-9.7 44.6-9.7h42.7C592.2 192 640 239.8 640 298.7c0 11.8-9.6 21.3-21.3 21.3H405.3zM224 224a96 96 0 1 1 192 0 96 96 0 1 1 -192 0zM128 485.3C128 411.7 187.7 352 261.3 352H378.7C452.3 352 512 411.7 512 485.3c0 14.7-11.9 26.7-26.7 26.7H154.7c-14.7 0-26.7-11.9-26.7-26.7z",
  },
  {
    label: "HABITACIONES",
    href: "/habitaciones",
    xmlns: "http://www.w3.org/2000/svg",
    d: "M32 32c17.7 0 32 14.3 32 32V320H288V160c0-17.7 14.3-32 32-32H544c53 0 96 43 96 96V448c0 17.7-14.3 32-32 32s-32-14.3-32-32V416H352 320 64v32c0 17.7-14.3 32-32 32s-32-14.3-32-32V64C0 46.3 14.3 32 32 32zm144 96a80 80 0 1 1 0 160 80 80 0 1 1 0-160z",
  },
  {
    label: "CONTACTENOS",
    href: "#",
    xmlns: "http://www.w3.org/2000/svg",
    d: "M512 240c0 114.9-114.6 208-256 208c-37.1 0-72.3-6.4-104.1-17.9c-11.9 8.7-31.3 20.6-54.3 30.6C73.6 471.1 44.7 480 16 480c-6.5 0-12.3-3.9-14.8-9.9c-2.5-6-1.1-12.8 3.4-17.4l0 0 0 0 0 0 0 0 .3-.3c.3-.3 .7-.7 1.3-1.4c1.1-1.2 2.8-3.1 4.9-5.7c4.1-5 9.6-12.4 15.2-21.6c10-16.6 19.5-38.4 21.4-62.9C17.7 326.8 0 285.1 0 240C0 125.1 114.6 32 256 32s256 93.1 256 208z",
  },
];

function NavList() {
  return (
    <ul className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center">
      {navListItems.map(({ label, href, xmlns, d }, key) => (
        <Typography
          key={label}
          as="a"
          href={href}
          variant="small"
          color={`${location.pathname === href ? "blanco" : "gray"}`}
          className="font-medium"
        >
          <MenuItem
            className={`focus:bg-naranja flex items-center gap-2 lg:rounded-10 hover:bg-naranja ${
              location.pathname === href ? "bg-naranja text-blanco" : ""
            }`}
          >
            <svg xmlns={xmlns} height="16" width="20" viewBox="0 0 640 512">
              <path fill="#ffffff" d={d} />
            </svg>
            <span className="text-blanco"> {label}</span>
          </MenuItem>
        </Typography>
      ))}
    </ul>
  );
}

const NavBarHome = () => {
  const [isNavOpen, setIsNavOpen] = React.useState(false);
  const toggleIsNavOpen = () => setIsNavOpen((cur) => !cur);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  React.useEffect(() => {
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setIsNavOpen(false)
    );
  }, []);

  return (
    <Navbar className="bg-verde opacity-85 mx-auto rounded-xs max-w-screen-3xl p-7 lg:pl-10 border-0">
      <div className="relative mx-auto flex items-center justify-between text-blanco">
        <Typography
          as="a"
          href="/"
          className="mr-4 ml-2 cursor-pointer py-1.5 font-medium"
        >
          SERENA HOTEL
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          size="sm"
          color="white"
          variant="text"
          onClick={toggleIsNavOpen}
          className="ml-auto mr-2 lg:hidden"
        >
          <Bars2Icon className="h-6 w-6" />
        </IconButton>
        {/* <Button size="sm" variant="text">
          <span className="text-blanco">INICIAR SESIÒN</span>
        </Button> */}
        <div className="flex flex-row items-center justify-center gap-4">
          <button
            onClick={toggleCart}
            className={`bg-verde-0 w-14 text-white py-2 px-4 rounded-xl focus:outline-none ${
              isCartOpen ? "bg-naranja" : ""
            }`}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              height="16"
              width="18"
              viewBox="0 0 576 512"
            >
              <path
                fill="#ffffff"
                d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"
              />
            </svg>
          </button>
          <ProfileMenu />
        </div>
      </div>
      <Collapse open={isNavOpen} className="overflow-scroll">
        <NavList />
      </Collapse>
      <div className="relative ">
        {isCartOpen && (
          <div className="flex flex-col justify-between h-96 w-80 absolute top-12 right-0 bg-verde  p-6 rounded-md shadow-md">
            <div>
              <button
                onClick={toggleCart}
                className="absolute top-0 right-0 m-2 p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  height="16"
                  width="12"
                  viewBox="0 0 384 512"
                  className="transition-transform duration-300 ease-in-out transform fill-current text-blanco hover:fill-current hover:text-naranja"
                >
                  <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
                </svg>
              </button>

              <p className="text-blanco text-xm">TUS COMPRAS</p>
            </div>
            <div className="flex flex-col gap-2">
              <div className="flex flex-row justify-between">
                <p>Sub Total</p>
                <p>$300</p>
              </div>
              <Button
                className="bg-naranja cursor-pointer"
                size="sm"
                color="orange"
                variant="text"
              >
                SEGUIR COMPRANDO
              </Button>
              <Button
                className="bg-naranja cursor-pointer"
                size="sm"
                color="orange"
                variant="text"
              >
                PAGAR
              </Button>
            </div>
          </div>
        )}
      </div>
    </Navbar>
  );
};
export default NavBarHome;
