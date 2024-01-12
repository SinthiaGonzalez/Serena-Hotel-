import React from "react";
import { Input } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import {getHabitacionesBusqueda} from "../../redux/Actions/actions.js";
import { useEffect } from "react";

const BuscarPorNombre = () => {
  const [buscar, setBuscar] = React.useState("");
  const dispatch = useDispatch();

  const handlerstringInput = () => {
    dispatch(getHabitacionesBusqueda(buscar));
  };
 useEffect(() => {
   handlerstringInput();}, [buscar]);

  const onChange = ({ target }) => {
    setBuscar(target.value); 
   };
  

  return (
    <div className="flex flex-col w-full p-4 ">
      <div className="relative flex w-full ">
        <Input
          type="text"
          label="BUSCAR POR NOMBRE"
          color="white"
          value={buscar}
          onChange={onChange}
          className="p-4 "
          containerProps={{
            className: "min-w-0 text-withe ",
          }}
        />
      </div>
    </div>

  );
};

export default BuscarPorNombre;