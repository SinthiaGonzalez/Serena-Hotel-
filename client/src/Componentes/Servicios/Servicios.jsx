const Servicios = () => {
  const servicios = [
    {
      icono: "room_service",
      titulo: "Room Service",
      descripcion:
        "Lujo en tu puerta. Nuestro servicio de habitaciones trae la excelencia culinaria directamente a tu alojamiento",
    },
    {
      icono: "wifi",
      titulo: "WI-FI",
      descripcion:
        "Conéctate con el mundo. Wi-Fi de alta velocidad disponible para mantenerse conectado en todo momento.",
    },
    {
      icono: "local_cafe",
      titulo: "Desayuno",
      descripcion:
        "Comienza tu día con estilo. Desayuno gourmet servido con esmero en la comodidad de tu habitación.",
    },
    {
      icono: "restaurant",
      titulo: "Restaurante",
      descripcion:
        "Experiencia gastronómica de élite. Nuestro restaurante ofrece una carta exquisita en un ambiente sofisticado.",
    },
    {
      icono: "pool",
      titulo: "Piscina",
      descripcion:
        "Sumérgete en el lujo. Nuestra piscina, oasis de serenidad, te invita a relajarte y disfrutar del sol.",
    },
    {
      icono: "fitness_center",
      titulo: "Gimnasio",
      descripcion:
        "Fitness de primera clase. Nuestro gimnasio equipado con tecnología de vanguardia te impulsa hacia tus metas de bienestar.",
    },
    {
      icono: "pedal_bike",
      titulo: "Bicicletas",
      descripcion:
        "Explora con estilo. Descubre los alrededores con nuestras bicicletas de alta gama disponibles para huéspedes.",
    },
    {
      icono: "groups",
      titulo: "Sala de Conferencias",
      descripcion:
        "Negocios en elegancia. Nuestra sala de conferencias ofrece un entorno distinguido para reuniones productivas.",
    },
  ];

  return (
    <div id="servicios" className="mt-16 mb-16 ml-4">
      <div className="flex flex-col lg:flex-row items-center mb-8 ml-6 mr-8">
        <div className="w-full lg:w-1/2 lg:mb-0 lg:mr-4">
          <div className="h-30 border-l-4 border-negro text-left p-4 mb-10">
            <span className="text-3xl text-negro font-inter font-medium block">SERVICIOS</span>
          </div>
  
          <div>
            <p className="font-inter mb-6 ml-4 text-negro">
              Escapa del bullicio de la vida urbana y sumérgete en la
              tranquilidad de la naturaleza en Serene Hotel. Ubicado en medio de
              exuberante vegetación.
            </p>
          </div>
        </div>
        <div className="h-px bg-negro w-1/3 lg:w-1/2 mt-[-40px] hidden lg:block xl:block"></div>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 ml-5 mr-5 md:ml-5 md:mr-5 lg:ml-10 lg:mr-10 xl:ml-28 xl:mr-28">
        {servicios.map((servicio, index) => (
          <div
            key={index}
            className="flex flex-col items-center justify-center p-4 border border-verde bg-verde rounded-lg xl:ml-[20px] xl:mr-[20px] transition-transform transform hover:scale-105"
          >
            <span className="material-symbols-outlined text-5xl mb-2">
              {servicio.icono}
            </span>
            <h3 className="text-xl font-inter text-center mb-2">
              {servicio.titulo}
            </h3>
            <p className="text-sm font-inter text-center">
              {servicio.descripcion}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
  
};

export default Servicios;
