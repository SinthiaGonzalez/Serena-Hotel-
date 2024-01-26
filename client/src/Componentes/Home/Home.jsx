import NavBarHome from "../NavBarHome/NavBarHome";
import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

const Home = () => { 
  return (
    <div
      className="relative bg-cover bg-center h-screen text-white text-center mb-16"
      style={{
        backgroundImage:
          'url("https://res.cloudinary.com/dmwjn7cwr/image/upload/v1705633696/qbiqecphhjtmtxbgrznq.jpg")',
      }}
    >
      <NavBarHome />

      <p className="text-8xl font-inter mt-[60px] md:mt-[220px] mb-8">SERENA HOTEL</p>

      <div className="flex items-center justify-center h-60">
        <div className=" transform -translate-x-1/2 bottom-1/2 w-1/2 bg-naranja h-0.5"></div>

        <Link
          to="/habitaciones"
          className="absolute bg-naranja text-white px-4 py-2 rounded-lg transition-transform hover:scale-105"
        >
          RESERVAR
        </Link>
      </div>
    </div>
  );
};

export default Home;
