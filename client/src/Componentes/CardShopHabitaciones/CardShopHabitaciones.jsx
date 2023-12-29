const CardShopHabitaciones = ({ id, nombre, precio, imagen, servicios }) => {
  return (
    <>
      <div
        key={id}
        className="relative flex w-full max-w-[26rem] ml-5 mr-5 flex-col rounded-xl bg-verde bg-clip-border text-gray-700 shadow-lg"
      >
        <div className="relative mx-4 mt-4 overflow-hidden text-white shadow-lg rounded-xl bg-blue-gray-500 bg-clip-border shadow-verde-500/40">
          <img src={imagen} alt={nombre} />
          <div className="absolute inset-0 w-full h-full to-bg-verde-10 bg-gradient-to-tr from-transparent via-transparent to-verde/60"></div>
        </div>
        <div className="p-6">
          <div className="flex items-center justify-between mb-3">
            <h5 className="block font-sans text-xl antialiased font-medium leading-snug tracking-normal text-blanco">
              {nombre}
            </h5>
          </div>

          <div className="inline-flex flex-wrap items-center gap-3 mt-8 group">
            <span className="material-symbols-outlined cursor-pointer rounded-full border border-verde bg-gray-900/5 p-3 text-blanco transition-colors hover:border-blanco hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
              {servicios.map}
            </span>
          </div>
        </div>
        <div className="p-6 pt-3">
          <p>`${precio}/Noche`</p>
          <button
            className="block w-full mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
          >
            AÑADIR AL CARRITO
          </button>
          <button
            className="block w-full select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
          >
            Reserve
          </button>
        </div>
      </div>
    </>
  );
};
export default CardShopHabitaciones;
