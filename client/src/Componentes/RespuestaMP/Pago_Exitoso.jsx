const PagoExitoso = () => {
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8 h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="flex flex-col items-center h-2/3 bg-blanco w-2/3 rounded-lg px-4 pt-3 pb-6">
        <p className="flex font-inter text-4xl antialiased leading-normal text-center font-bold text-naranja justify-center mt-10 mb-20">
          ¡Gracias por Elegir Serena Hotel!
        </p>

        <p className="flex font-inter text-xl antialiased leading-normal text-center font-bold text-gris justify-center mb-16">
          Tu pago ha sido procesado con éxito a través de Mercado Pago.
        </p>
        <a
          href="/clienteReservas"
          className="w-2/4 mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
        >
          Tus Reservas
        </a>
      </div>
    </div>
  );
};

export default PagoExitoso;

