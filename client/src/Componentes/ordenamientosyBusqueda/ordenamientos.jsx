import { Select, Option } from "@material-tailwind/react";
import { useDispatch } from "react-redux";
import { fiteryOrder } from "../../redux/Actions/actions.js";

const Ordenamiento = () => {
  const dispatch = useDispatch();
  return (
    <div className="flex flex-col w-full p-4">
      <Select
        id="countries"
        className="bg-verde w-full p-2 border border-gray-300 text-blanco text-sm rounded-lg"
        onChange={(e) => {
          dispatch(fiteryOrder(e));
        }}
      >
        <Option selected value="Ordenar">ORDENAR</Option>
        <Option value="menor">menor precio</Option>
        <Option value="mayor">mayor precio</Option>
        <Option value="asc">A-Z</Option>
        <Option value="desc">Z-A</Option>
      </Select>
    </div>
  );
};

export default Ordenamiento;
