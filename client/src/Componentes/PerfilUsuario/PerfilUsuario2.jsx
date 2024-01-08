import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/solid";

export const PerfilUsuario2 = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">
      <div className="bg-verde p-8 rounded-md">
        <div className="mb-4 flex items-center justify-center">
          <div className="flex items-center">
            <MagnifyingGlassIcon width={20} className="mr-1" />
            <input
              type="text"
              placeholder="Buscar..."
              className="bg-white p-2 rounded-md mr-4"
            />

            <AdjustmentsVerticalIcon width={20} className="mr-1" />
            <select className="bg-white p-2 rounded-md">
              <option value="filtro1">Filtro 1</option>
              <option value="filtro2">Filtro 2</option>
              <option value="filtro3">Filtro 3</option>
            </select>
          </div>
        </div>

        <div>
          <div className="p-5 rounded-md shadow-md mb-4 overflow-x-auto">
            <table className="w-full">
              <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
                <tr>
                  <th className="py-5 px-12 text-left ">N. de Reserva</th>
                  <th className="py-5 px-12 text-left">Check-In</th>
                  <th className="py-5 px-12 text-left">Check-Out</th>
                  <th className="py-5 px-12 text-left">Habitación</th>
                  <th className="py-5 px-12 text-left">Estado</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-6 px-12 text-left">123456</td>
                  <td className="py-6 px-12 text-left">2022-01-01</td>
                  <td className="py-6 px-12 text-left">2022-01-10</td>
                  <td className="py-6 px-12 text-left">Habitación 101</td>
                  <td className="py-6 px-12 text-left">
                    <div className="bg-green-800 text-white py-2 px-4 rounded border border-green-500 text-center">
                      Reservada
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-6 px-12 text-left">123456</td>
                  <td className="py-6 px-12 text-left">2022-01-01</td>
                  <td className="py-6 px-12 text-left">2022-01-10</td>
                  <td className="py-6 px-12 text-left">Habitación 101</td>
                  <td className="py-6 px-12 text-left">
                    <div className="bg-lime-800 border  text-white py-2 px-4 rounded text-center  ">
                      En uso
                    </div>
                  </td>
                </tr>

                <tr className="border-b">
                  <td className="py-6 px-12 text-left">123456</td>
                  <td className="py-6 px-12 text-left">2022-01-01</td>
                  <td className="py-6 px-12 text-left">2022-01-10</td>
                  <td className="py-6 px-12 text-left">Habitación 101</td>
                  <td className="py-6 px-12 text-left">
                    <div className="bg-gray-700 text-white py-2 px-4 rounded text-center ">
                      Concluido
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
