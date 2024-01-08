import React, { useState } from "react";

export const Perfilusuario1 = () => {
  return (
    <>
      <div className="bg-verde min-h-screen flex items-center justify-center">
        <div className="bg-#1D2828 p-8 rounded-lg shadow-md w-96 text-white">
          <h2 className="text-2xl font-semibold mb-4">Panel de Usuario</h2>
          <div className="w-16 h-16 rounded-full bg-white mx-auto mb-2"></div>
          <div className="mb-4  bg-white bg-opacity-25 p-2 rounded-md">
            <label className="block text-white-600 text-sm font-medium mb-2">
              Nombre:
            </label>
            <p className="text-white-800">Nombre de Usuario</p>
          </div>
          <div className="mb-6 bg-white bg-opacity-25 p-2 rounded-md">
            <label className="block text-white-600 text-sm font-medium mb-2">
              Correo Electrónico:
            </label>
            <p className="text-white-800">correo@example.com</p>
          </div>

          <div className="flex space-x-4">
            <button className="bg-naranja text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange">
              Editar
            </button>
            <button className="bg-naranja text-white py-2 px-4 rounded-md hover:bg-orange-600 focus:outline-none focus:shadow-outline-orange">
              Eliminar Cuenta
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
