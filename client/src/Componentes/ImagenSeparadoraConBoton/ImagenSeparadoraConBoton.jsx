import { Link } from "react-router-dom";

const ImagenSeparadoraConBoton = () => {
  return (
<div
  className="bg-center h-50 text-white text-left my-10 relative"
  style={{
    backgroundImage:
      'url("https://i.postimg.cc/sgXjYP94/Captura-de-pantalla-2024-01-03-123457.png")',
  }}
>
  <div className="flex flex-col md:flex-row items-center justify-between h-full p-4 md:p-12 lg:p-12 xl:p-12">
    <div className="w-full md:w-2/5 mb-4 md:mb-0">
      <p className="text-sm md:text-base lg:text-xl font-inter">
        EXPLORE EL ENCANTO DE SERENA HOTEL Y PERMITENOS CREAR UNA EXPERIENCIA QUE
        LE DEJARÁ RECUERDOS PRECIADOS PARA TODA LA VIDA.
      </p>
    </div>

    <div className="flex flex-row items-center  w-1/3 mr-[-48px]">
      <Link
        to="/habitaciones"
        className="bg-naranja text-white px-4 py-2 rounded-lg transition-transform hover:scale-105 z-10 "
      >
        RESERVAR
      </Link>
      <div className="md:transform md:translate-x-1/6 md:w-[500px] md:bg-naranja md:h-0.5"></div>
    </div>
  </div>
</div>



  );
};

export default ImagenSeparadoraConBoton;
