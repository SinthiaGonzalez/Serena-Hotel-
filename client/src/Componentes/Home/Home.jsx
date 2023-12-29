import NavBarHome from "../NavBarHome/NavBarHome";

const Home = () => {
  return (
    <div
      className="relative bg-cover bg-center h-screen text-white text-center mb-16"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <NavBarHome />

      <p className="text-8xl font-inter mt-[220px] mb-8">SERENA HOTEL</p>

      <div className="flex items-center justify-center h-60">
        <div className=" transform -translate-x-1/2 bottom-1/2 w-1/2 bg-naranja h-0.5"></div>

        {/* <Link to="/habitaciones"> // Hay que activar el link para cuando la view de habitaciones este armada*/}
        <button className="absolute bg-naranja text-white px-4 py-2 rounded-lg">
          RESERVAR
        </button>
      </div>
    </div>
  );
};

export default Home;
