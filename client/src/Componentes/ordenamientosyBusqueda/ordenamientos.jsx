import{Select,Option} from "@material-tailwind/react";
const Ordenamiento = () => {
    return (
        <div className="flex flex-col w-full p-4 ">
        <Select
          id="countries"
          className="bg-verde w-full p-2 border border-gray-300 text-blanco text-sm rounded-lg "
        >
          <Option selected >ORDENAR</Option>
          <Option value="menor">menor precio</Option>
          <Option value="mayor">mayor precio</Option>
          <Option value="asc">A-Z</Option>
          <Option value="desc">Z-A</Option>
        </Select>
      </div>
    );
};

export default Ordenamiento;