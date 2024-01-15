import React from "react";
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/solid";

//a
export const PerfilUsuario2 = () => {
  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">       
      <div className="bg-verde p-8 rounded-md">    
      <h2 className="text-center text-2xl font-bold" >Historial de Reservas</h2>    
          <div className="p-5 rounded-md shadow-md mb-4 overflow-x-auto">         
            <table className="w-full">
              <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
                <tr>
                  <th className="py-5 px-12 text-left ">N. de Reserva</th>
                  <th className="py-5 px-12 text-left">Check-In</th>
                  <th className="py-5 px-12 text-left">Check-Out</th>
                  <th className="py-5 px-12 text-left">Habitación</th>              
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="py-6 px-12 text-left">123456</td>
                  <td className="py-6 px-12 text-left">2022-01-01</td>
                  <td className="py-6 px-12 text-left">2022-01-10</td>
                  <td className="py-6 px-12 text-left">Habitación 101</td>                  
                </tr>

                <tr className="border-b">
                  <td className="py-6 px-12 text-left">123456</td>
                  <td className="py-6 px-12 text-left">2022-01-01</td>
                  <td className="py-6 px-12 text-left">2022-01-10</td>
                  <td className="py-6 px-12 text-left">Habitación 101</td>
                </tr>

                <tr className="border-b">
                  <td className="py-6 px-12 text-left">123456</td>
                  <td className="py-6 px-12 text-left">2022-01-01</td>
                  <td className="py-6 px-12 text-left">2022-01-10</td>
                  <td className="py-6 px-12 text-left">Habitación 101</td>            
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
  );
};
export default PerfilUsuario2;
