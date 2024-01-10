import React from "react";
import { Input, Button } from "@material-tailwind/react";
const BuscarPorNombre = () => {
    const [email, setEmail] = React.useState("");
    const onChange = ({ target }) => setEmail(target.value);
   
    return (
        <div className="flex flex-col w-full p-4 ">
 <div className="relative flex w-full max-w-[24rem]">
        <Input
          type="text"
          label="BUSCAR POR NOMBRE"
          color="white"
          value={email}
          onChange={onChange}
          className="p-4 "
          containerProps={{
            className: "min-w-0 text-withe ",
          }}
        />
        <Button
          size="sm"
          color={email ? "gray" : "blue-gray"}
          disabled={!email}
          className="!absolute right-1 top-1 rounded"
        >
          Buscar
        </Button>
      </div>
        </div>
     
    );
};

export default BuscarPorNombre;