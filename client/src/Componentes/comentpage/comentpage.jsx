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
import Swal from 'sweetalert2'

const ComentPage = () => {
  const dispatch = useDispatch();
  const comentarios = useSelector((state) => state.comentarios);

  useEffect(() => {
    dispatch(getAllcomentarios());
  }, [dispatch]);

  const handleEliminarComentario = (id) => {
    dispatch(eliminarComentario(id));
  };

  const settings = {
    dots: true,
    infinite: true,
    centerMode:true,
    slidesToShow: 3,
    slidesToScroll: 1,
    speed: 1000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1800,
        settings: {
          centerMode:true,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          centerMode:true,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  const handleLinkClick = () => {
    // Verificar si hay un token en el localStorage
    const token = localStorage.getItem("token");

    // Si hay un token, permitir la navegación a la ruta "/comentar"
    if (token) {
      window.location.href = "/comentar"; // Redirigir a la ruta "/comentar"
    } else {
      // Si no hay un token, mostrar un alert y realizar otras acciones según sea necesario
      Swal.fire({
        title:"Necesita iniciar sesion para dejar comentarios", 
        icon:"info",
        confirmButtonColor:"#FB350C",
        iconColor: "#FB350C"
      });
      // Puedes realizar otras acciones aquí, como redirigir a otra ruta, mostrar un modal, etc.
    }
  };

  return (
    <div id="comentarios" className="mt-16 mb-16 bg-verde">
      <div className="flex flex-col lg:flex-row items-center mb-6 m-10">
        <div className="mt-6 lg:w-5/6 lg:mr-4 items-center">
          <div className="h-30 border-l-4 border-blanco text-left p-4 mb-6">
            <span className="text-3xl text-blanco font-inter font-base block">
              COMENTARIOS
            </span>
          </div>
        </div>

        <div className="flex flex-row items-center justify-end">
          <Link
            to="#"
            onClick={handleLinkClick}
            className="bg-naranja text-white text-center w-[200px] px-4 py-2 rounded-lg transition-transform hover:scale-105 z-10 "
          >
            Dejanos Tu Comentario
          </Link>
          <div className="hidden lg:block md:transform md:translate-x-1/5 md:w-[200px] md:bg-naranja md:h-0.5"></div>
        </div>
      </div>

      <div className="mx-8 md:mx-10 lg:mx-14 xl:mx-22">
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
