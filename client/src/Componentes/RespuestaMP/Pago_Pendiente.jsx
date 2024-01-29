const PagoPendiente = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8 h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="flex flex-col items-center lg:h-auto bg-blanco lg:w-2/3 rounded-lg px-4 pt-3 py-20">
        <a
          href="/"
          className=" font-inter text-base antialiased font-bold text-naranja text-inter hover:scale-105 md:w-1/6 mt-6 pl-4 md:pl-0 mr-auto "
        >
          🡰 Volver
        </a>
        <p className="flex font-inter text-4xl antialiased leading-normal text-center font-bold text-naranja justify-center mt-6 mb-10 lg:mb-20">
          ¡Gracias por Elegir Serena Hotel!
        </p>

        <p className="flex font-inter text-xl antialiased leading-normal text-center font-bold text-gris justify-center mb-16">
          Tu pago está siendo procesado por Mercado Pago.
        </p>
        <span className="material-symbols-outlined text-7xl text-naranja">
          schedule
        </span>
      </div>
    </div>
  );
};

export default PagoPendiente;
