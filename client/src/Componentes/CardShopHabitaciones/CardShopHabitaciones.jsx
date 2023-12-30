/* eslint-disable react/prop-types */
const CardShopHabitaciones = ({ id, nombre, precio, imagen, servicios }) => {
  return (
    <>
      <div
        key={id}
        className="flex w-full h-60 flex-row items-center justify-between rounded-xl bg-verde bg-clip-border text-blanco"
      >
        <div className="h-44 mx-8 my-8 w-60 overflow-hidden text-white  rounded-xl bg-verde bg-clip-border">
          <img
            className="w-full h-full object-cover"
            src="https://www.es.kayak.com/rimg/himg/25/bc/10/expediav2-620936-1621e8-274187.jpg?width=968&height=607&crop=true"
            alt={nombre}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-6">
          <h5 className="block font-sans text-xl antialiased font-bold leading-snug tracking-normal text-blanco">
            {nombre}
          </h5>
          <div className="flex flex-row gap-4">
            {servicios.map(({ icono, descripcion, i }) => (
              <div key={i}>
                <span className="material-symbols-outlined cursor-pointer rounded-full border border-verde bg-gray-900/5 p-3 text-blanco transition-colors hover:border-blanco hover:bg-gray-900/10 hover:!opacity-100 group-hover:opacity-70">
                  {icono}
                </span>
                <p className="text-blanco text-sm text-center">{descripcion}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 pt-3 flex flex-col items-center justify-center gap-4">
          <p className="text-2xl font-bold text-blanco">${precio}/Noche</p>
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
