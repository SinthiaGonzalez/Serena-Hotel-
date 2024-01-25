import NavBarHome from "../NavBarHome/NavBarHome";


const HeaderAcercaDeSerena = () => {
  return (
    <div
      className="relative bg-cover bg-center h-[250px] text-white text-center mb-4"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/wMt3W46R/308396144-1.png")',
      }}
    >
      <NavBarHome />

      <div className="flex items-center justify-center h-40 md:w-3/6 w-full">
        <div className="transform -translate-x-1/2 bottom-1/2 w-1/2 bg-naranja h-0.5"></div>

        <a className="absolute ml-1/2 bg-naranja text-white font-inter px-10 py-3 rounded-lg "
        >
          DESARROLLADORES
        </a>
      </div>
    </div>
  );
};

export default HeaderAcercaDeSerena;
