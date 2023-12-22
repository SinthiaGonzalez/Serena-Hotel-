import React from "react";

const Error404 = () => {
  return (
    <div className="flex items-center justify-center h-screen">
      <div className="Error404 w-[1440px] h-[1024px] relative shadow">
        <div className="OopsPareceQueTocasteEnLaPuertaEquivocada w-[221px] h-[246px] left-[617px] top-[588px] absolute text-center">
          <span className="text-blanco text-[35px] font-bold font-['Inter'] leading-[39px]">
            Oops!
            <br />
          </span>
          <span className="text-blanco text-2xl font-bold font-['Inter'] leading-[37px]">
            <br />
            Parece que tocaste en la puerta equivocada.
          </span>
        </div>
        <div className="Numero404 w-[1100px] h-[468px] left-[240px] top-[96px] absolute text-naranja text-[400px] font-semibold font-['Poppins']">
          4 4
        </div>
        <div className="Rectangle80 w-[286px] h-[57px] left-[585px] top-[862px] absolute bg-zinc-100" />
        <div className="VolverAlHotel w-[286px] h-[18px] left-[585px] top-[887px] absolute text-center text-naranja text-2xl font-black font-['Inter'] leading-[19px]">
          VOLVER AL HOTEL
        </div>
      </div>
    </div>
  );
};

export default Error404;
