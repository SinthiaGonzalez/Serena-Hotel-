const BarraInformacion = () => {
  return (
    <div className="h-[90px] bg-verde flex items-center justify-between px-8 mt-16 mb-16">

      <div className="flex items-center space-x-4 lg:ml-28 lg:mr-[-100px]">
        <div className="border-l-4 border-naranja p-1 lg:px-4 lg:py-1">
          <div className="text-center text-naranja">
            <div className="text-2xl lg:text-4xl font-bold mb-2">70</div>
            <div className="text-sm lg:text-md">Años de Experiencia</div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="border-l-4 border-naranja p-1 lg:px-4 lg:py-1">
          <div className="text-center text-naranja">
            <div className="text-2xl lg:text-4xl text-naraja font-bold mb-2">20.000+</div>
            <div className="text-sm lg:text-md">Huéspedes Satisfechos</div>
          </div>
        </div>
      </div>

      <div className="flex items-center space-x-4">
        <div className="border-l-4 border-naranja p-1 lg:px-4 lg:py-1 lg:ml-[-100px] lg:mr-[250px]">
          <div className="text-center text-naranja">
            <div className="text-2xl lg:text-4xl text-naraja font-bold mb-2">20</div>
            <div className="text-sm lg:text-md">Habitaciones de Lujo</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BarraInformacion;
