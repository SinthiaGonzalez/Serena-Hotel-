const BarraSobreNosotros = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[220px] mt-6 -z-10"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3wHrXJ4G/a6300a59-e958-4fe1-bd59-69a200bc54e9-1.png")',
          filter: 'opacity(0.9)'
      }}
    >
      <div className="hidden md:hidden lg:flex lg:items-center lg:justify-end lg:h-full">
        <div className="flex flex-row items-center  w-1/2">
        <a className="bg-naranja text-white text-center font-inter w-1/3 px-10 py-2 rounded-lg z-10 ">
            SOBRE NOSOTROS
          </a>
          <div className="md:transform md:translate-x-1/6 md:w-[500px] md:bg-naranja md:h-0.5"></div>
        </div>
      </div>
    </div>
  );
};

export default BarraSobreNosotros;
