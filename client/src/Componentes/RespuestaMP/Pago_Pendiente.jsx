const PagoPendiente = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8 h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="cuadrado flex flex-col items-center h-2/3 bg-blanco w-2/3 rounded-lg px-4 pt-3 pb-6">
        <p className="flex font-inter text-4xl antialiased leading-normal text-center font-bold text-naranja justify-center mt-10 mb-20">
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
