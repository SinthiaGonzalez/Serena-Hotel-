import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postComent } from "../../redux/Actions/actions";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";

import {
  Card,
  CardHeader,
  CardBody,
  Typography,
  Avatar,
} from "@material-tailwind/react";

const CreateComentPage = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  let imagenUsuario  = localStorage.getItem("imagen");
  imagenUsuario = imagenUsuario.replace(/^"|"$/g, '');
  let name = localStorage.getItem("name");
  name = name.replace(/^"|"$/g, '');
  console.log("aca la imagen ",name)

  useVerificarToken();

  const handleStarHover = (value) => {
    if (rating === 0) {
      setRating(value);
    }
  };

  const handleStarClick = (value) => {
    setRating(value); // Siempre actualiza el estado al hacer clic en una estrella
    console.log("Puntuación seleccionada:", value);
  };

  // Información del usuario autenticado (simulada)
  const user = {
    name: name,
    image:imagenUsuario,
    
  };

 const handleSubmit = (e) => {
  e.preventDefault();
  const comentario = {
    imagen:
    imagenUsuario,
    nombre: name,
    contenido: e.target.comentarios.value,
    puntuacion: rating,
    idUsuario: localStorage.getItem("userId"),
    };
    dispatch(postComent(comentario));

    // Restablecer el estado del formulario después de enviarlo
    e.target.reset();
  }
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-20 h-screen"
      style={{
        backgroundImage:
          'url("https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1")',
      }}
    >
      <div className="absolute inset-0 bg-negro opacity-20 rounded-lg"></div>

      {/* Espacio para la imagen del usuario y las estrellas */}
      <div className="relative flex flex-col text-gris bg-none items-cener justify-center lg:w-2/3">
          <a
            href="/"
            className="mr-auto block font-inter text-base antialiased font-bold text-naranja text-inter hover:scale-105 mb-8 pl-4 lg:pl-0"
          >
            🡰 Volver
          </a>
        <div className="flex flex-col gap-4 p-6 justify-center items-center">

          <div className="flex flex-col">
            <div>
              <div className="flex flex-row w-full items-center mb-5 -ml-10">
                <Avatar
                  size="md"
                  variant="circular"
                  src={user.image}
                  alt="tania andrew"
                />
                <div className="flex flex-col items-center ml-10">
                  <Typography className="text-lg md:text-2xl font-bold text-gris font-inter">
                    {user.name}
                  </Typography>
                </div>
              </div>

              <div className="flex items-center">
                {[1, 2, 3, 4, 5].map((star) => (
                  <span
                    key={star}
                    className={
                      star <= rating
                        ? "text-naranja cursor-pointer text-4xl"
                        : "text-gray cursor-pointer text-4xl"
                    }
                    onMouseEnter={() => handleStarHover(star)}
                    onMouseLeave={() => handleStarHover(0)}
                    onClick={() => handleStarClick(star)}
                    style={{ marginBottom: "30%" }} // Mover las estrellas un poco más arriba
                  >
                    {star <= rating ? "★" : "☆"}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <form
            className="w-80 max-w-600px text-center flex flex-col items-center -mt-8"
            onSubmit={handleSubmit}
          >
            <textarea
              name="comentarios"
              placeholder="Déjanos tu comentario aquí"
              className="h-40 w-full bg-gray-300 resize-none p-2 rounded-lg text-center"
              style={{ color: "black" }}
            />

            <div className="flex items-center justify-center mt-4">
              <button
                className="mt-3 select-none rounded-lg bg-naranja py-3.5 px-12 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
                type="submit"
              >
                Enviar
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateComentPage;

// import { useAuth } from "auth"; // Importa el paquete de autenticación "auth"

// const auth = useAuth(); // Inicializa el hook de autenticación

// useEffect(() => {
//   const unsubscribe = auth.onAuthStateChanged((user) => {
//     if (user) {
//       // El usuario está autenticado, puedes acceder a sus datos
//       setUser(user);
//     } else {
//       // No hay usuario autenticado
//       setUser(null);
//     }
//   });

//   return () => unsubscribe();
// }, [auth]);

{
  /* 

          {user && (
            <div className="flex items-center">
              <span
                className="text-white mr-2"
                style={
                  {
                    // marginBottom: "50%",
                    // position: "relative",
                    // left: "50%",
                    // transform: "translateX(-50%)",
                  }
                }
              >
                {user.name}
              </span>
              <img
                src={user.image}
                alt="Imagen de perfil"
                className="w-10 h-10 rounded-full mr-2"
                style={{ marginBottom: "30%" }} // Mover la imagen un poco más arriba
              />
              {[1, 2, 3, 4, 5].map((star) => (
                <span
                  key={star}
                  className={
                    star <= rating
                      ? "text-naranja cursor-pointer text-4xl"
                      : "text-gray cursor-pointer text-4xl"
                  }
                  onMouseEnter={() => handleStarHover(star)}
                  onMouseLeave={() => handleStarHover(0)}
                  onClick={() => handleStarClick(star)}
                  style={{ marginBottom: "30%" }} // Mover las estrellas un poco más arriba
                >
                  {star <= rating ? "★" : "☆"}
                </span>
              ))}
            </div>
          )} */
}
