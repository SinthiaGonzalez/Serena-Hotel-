import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getAllcomentarios,
  eliminarComentario,
} from "../../redux/Actions/actions";
import CardComent from "./cardComent/cardcoment";
import { Link } from "react-router-dom";
import Slider from "react-slick";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ComentPage = () => {
  const dispatch = useDispatch();
  const comentarios = useSelector((state) => state.comentarios);
  console.log("aca los comentarios globales ",comentarios);

  useEffect(() => {
    dispatch(getAllcomentarios());
  }, [dispatch]);

  const handleEliminarComentario = (id) => {
    dispatch(eliminarComentario(id));
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2, 
    slidesToScroll: 1,
    centerMode: true, // Centrar los elementos
    centerPadding: "20px", // Ajustar el espacio entre los elementos centrados
    arrows: true,
    responsive: [
      {
        breakpoint: 1270,
        settings: {
          centerPadding:"100px",
          slidesToShow: 1,
          centerMode: true,
        },
      },
    ],
  };
  
  
  return (
    <div id="comentarios" className="mt-16 mb-16 bg-verde">

      <div className="flex flex-col lg:flex-row items-center mb-6 ml-10">
        
        <div className="mt-6 lg:w-5/6 lg:mr-4 items-center">

        <div className="h-30 border-l-4 border-blanco text-left p-4 mb-6">
            <span className="text-3xl text-blanco font-inter font-base block">COMENTARIOS</span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-end">
          <Link
            to="/comentar"
            className="bg-naranja text-white text-center w-[200px] px-4 py-2 rounded-lg transition-transform hover:scale-105 z-10 "
          >
            Dejanos Tu Comentario
          </Link>
          <div className="hidden lg:block md:transform md:translate-x-1/5 md:w-[200px] md:bg-naranja md:h-0.5"></div>
        </div>
      </div>

      <div className="mx-8 md:mx-10 lg:mx-14 xl:mx-28 ">

      <Slider {...settings}>
        {comentarios &&
          comentarios.map((comentario, index) => (
            <CardComent
              key={index}
              comentario={comentario}
              onDelete={handleEliminarComentario}
              />
              ))}
        </Slider>

      </div>
    </div>
  );
};

export default ComentPage;


//   return (
//     <div style={{ backgroundColor: "#1D2828", padding: "20px" }}>
//       <div style={{ display: "flex", alignItems: "center" }}>
//         <div style={{ width: "4px", height: "100%", backgroundColor: "white" }}></div>
//         <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold", marginLeft: "12px", marginTop: "16px" }}>COMENTARIOS</h1>
//         <Link to="/comentar" style={{ marginLeft: "auto" }}>
//           <button style={{ color: "white", backgroundColor: "#FF3D00", border: "2px solid #FF3D00", borderRadius: "4px", cursor: "pointer", padding: "8px 16px" }}>Dejar comentario</button>
//         </Link>
//       </div>
//       <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
//         {comentarios && comentarios.map((comentario, index) => (
//           <CardComent key={index} comentario={comentario} onDelete={handleEliminarComentario} />
//         ))}
//       </div>
//     </div>
//   );
// };