import React from "react";
//import { getReservasPorUsuarioId } from "../../../../back/src/Controladores/getReservasPorUsuarioId"
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getReservas_usuario } from "../../redux/Actions/actions"
import {
  MagnifyingGlassIcon,
  AdjustmentsVerticalIcon,
} from "@heroicons/react/24/solid";

//a
export const PerfilUsuario2 = () => { 
  const dispatch = useDispatch();
  const idUsuario = 5 // tomar el id de donde corresponda, x ejemplo: useSelector((state) => state.idUsuario)
  const reservasUsuario = useSelector(state => state.reservasUsuario)
  /*
  const reservasUsuario = [
    {
      "id_reserva": "45e38d8d-8a8e-41e2-aef1-0df6418548b7",
      "nombre_habitacion": "f",
      "fecha_entrada": "2008-12-31",
      "fecha_salida": "2008-12-31"
    },
    {
      "id_reserva": "45e38d8d-8a8e-41e2-aef1-0df6418548b7",
      "nombre_habitacion": "c",
      "fecha_entrada": "2008-12-31",
      "fecha_salida": "2008-12-31"
    }
  ]
*/
  useEffect(() => {
    console.log('se montó el componente Reservas por Cliente - Perfilusuario2')
    dispatch(getReservas_usuario(idUsuario))
    
  }, []); 

  return (
    <div className="h-[100vh] flex flex-col items-center justify-center">       
      <div className="bg-verde p-8 rounded-md">    
      <h2 className="text-center text-2xl font-bold" >Historial de Reservas</h2>    
          <div className="p-5 rounded-md shadow-md mb-4 overflow-x-auto">         
            <table className="w-full">
              <thead className="bg-white bg-opacity-15 border-b border-white border-opacity-25">
                <tr>
                  <th className="py-5 px-12 text-left ">Id de Reserva</th>
                  <th className="py-5 px-12 text-left">Check-In</th>
                  <th className="py-5 px-12 text-left">Check-Out</th>
                  <th className="py-5 px-12 text-left">Habitación</th>              
                </tr>
              </thead>
              <tbody>
                {reservasUsuario?.map((linea) => (
                  <tr className="border-b">
                    <td className="py-6 px-12 text-left">{linea.id_reserva}</td>
                    <td className="py-6 px-12 text-left">{linea.fecha_entrada}</td>
                    <td className="py-6 px-12 text-left">{linea.fecha_salida}</td>
                    <td className="py-6 px-12 text-left">{linea.nombre_habitacion}</td>
                  </tr>     
                ))}
                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    
  );
};
export default PerfilUsuario2;
/*

                <tr className="border-b">
                  <td className="py-6 px-12 text-left">123456</td>
                  <td className="py-6 px-12 text-left">2022-01-01</td>
                  <td className="py-6 px-12 text-left">2022-01-10</td>
                  <td className="py-6 px-12 text-left">Habitación 101</td>                  
                </tr>

                
              */
