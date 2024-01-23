import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { cambiarEstadoUsuario } from "../../redux/Actions/actions";

const Linea = ({linea}) => {
  const {name, apellido, id, telefono, email, estado} = linea
  console.log("Comp. linea Tabla Admin usuarios" )
  console.log(linea.id)
  const dispatch = useDispatch();
 
  const [nuevoEstado, setNuevoEstado] = useState(estado)
 

  const handleEstadoChange = (estadoElegido, estadoPrevio) => { 
    console.log("estadoElegido" + estadoElegido)
    console.log("estadoPrevio"+estadoPrevio)
    setNuevoEstado(estadoElegido)
    //if(estadoPrevio !== "eliminar" && estadoElegido === "eliminar" ){ //caso eliminar
    if(estadoElegido !== estadoPrevio){
      dispatch(cambiarEstadoUsuario(id, estadoElegido)) // idSelect es el id del usuario
    //}else if(estadoPrevio === "eliminar" && estadoElegido !== "eliminar"){//caso pasar de eliminado a activo/inactivo 

    }
  }

  return (                   

        <tr className="border-b">
            <td className="py-6 px-12 text-center">{id}</td>
            <td className="py-6 px-12 text-center">
            {name + " " + apellido}
            </td>
            <td className="py-6 px-12 text-center">{email}</td>
            <td className="py-6 px-12 text-center">{telefono}</td>                
            <td className="py-6 px-12 text-center">
            <select       
                value={nuevoEstado}
                onChange={(e) => handleEstadoChange(e.target.value, nuevoEstado )}
                className={`py-2 px-4 rounded text-center ${
                nuevoEstado === "activo"
                    ? "bg-green-500"
                    : nuevoEstado === "inactivo"
                    ? "bg-gray-500"
                    : nuevoEstado === "eliminar"
                    ? "bg-red-500"
                    : ""
                }`}
            >
                <option value="activo" className="bg-green-500">Activo</option>
                <option value="inactivo" className="bg-gray-500" >Inactivo</option>
                <option value="eliminar" className="bg-red-500">Eliminar</option>
            </select>
            </td>
        </tr>

  );
};  


export default Linea;