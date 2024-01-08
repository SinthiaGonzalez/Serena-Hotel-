import React, { useState } from "react";
import { UserIcon, EnvelopeIcon, DevicePhoneMobileIcon, LockClosedIcon, LockOpenIcon} from "@heroicons/react/24/solid";
export const Perfilusuario1 = () => {
  return (
    <>
      <div className="h-[120vh] flex flex-col items-center justify-center">
        <div className="bg-verde p-12 rounded-lg shadow-md  text-white">
          <h2 className="text-2xl font-semibold mb-4">Perfil</h2>
          <div className="w-16 h-16 rounded-full bg-white mx-auto mb-10"></div>

          <div className="mb-4 bg-white bg-opacity-25 p-2  flex items-center w-[600px]">
            <div className="block text-white-600 text-sm font-medium pr-2 border-r-2 border-naranja w-1/2 text-center">
              <label className="flex items-center justify-center">
                <UserIcon width={30} />
                Nombre:
              </label>
            </div>
            <p className="text-white-800 pl-3 w-1/2 text-center">
              Nombre de Usuario
            </p>
          </div>
          <div className="mb-4 bg-white bg-opacity-25 p-2  flex items-center w-[600px]">
          <div className="block text-white-600 text-sm font-medium pr-2 border-r-2 border-naranja w-1/2 text-center">
              <label className="flex items-center justify-center">
                <UserIcon width={30} />
                Apellido:
              </label>
            </div>
            <p className="text-white-800 pl-3 w-1/2 text-center">
              Apellido de Usuario
            </p>
          </div>

          <div className="mb-4 bg-white bg-opacity-25 p-2  flex items-center w-[600px]">
          <div className="block text-white-600 text-sm font-medium pr-2 border-r-2 border-naranja w-1/2 text-center">
              <label className="flex items-center justify-center">
                <EnvelopeIcon width={30} />
                Correo:
              </label>
            </div>
            <p className="text-white-800 pl-3 w-1/2 text-center">
              correo@gmail.com
            </p>
          </div>

          <div className="mb-4 bg-white bg-opacity-25 p-2  flex items-center w-[600px]">
          <div className="block text-white-600 text-sm font-medium pr-2 border-r-2 border-naranja w-1/2 text-center">
              <label className="flex items-center justify-center">
                <DevicePhoneMobileIcon width={30} />
                Telefono:
              </label>
            </div>
            <p className="text-white-800 pl-3 w-1/2 text-center">1515115</p>
          </div>

          <div className="mb-4 bg-white bg-opacity-25 p-2 flex items-center w-[600px]">
          <div className="block text-white-600 text-sm font-medium pr-2 border-r-2 border-naranja w-1/2 text-center">
              <label className="flex items-center justify-center">
                <LockClosedIcon width={30} />
                Contraseña:
              </label>
            </div>
            <input
              type="password"
              className="text-white-800 pl-3 w-1/2 text-center bg-transparent border-none outline-none"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="mb-4 bg-white bg-opacity-25 p-2 flex items-center w-[600px]">
          <div className="block text-white-600 text-sm font-medium pr-2 border-r-2 border-naranja w-1/2 text-center">
              <label className="flex items-center justify-center">
                <LockClosedIcon width={30} />
                Repetir Contraseña:
              </label>
            </div>
            <input
              type="password"
              className="text-white-800 pl-3 w-1/2 text-center bg-transparent border-none outline-none"
              placeholder="Ingrese su contraseña"
            />
          </div>

          <div className="flex justify-center space-x-4">
            <button className="bg-naranja text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange">
              Editar
            </button>
            <button className="bg-naranja text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange">
              Eliminar Cuenta
            </button>
            <button className="bg-naranja text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange">
              Guardar cambios
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
