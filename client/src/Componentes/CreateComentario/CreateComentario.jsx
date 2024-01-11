import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postComent } from "../../redux/Actions/actions";

const CreateComentPage = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStarHover = (value) => {
    if (rating === 0) {
      setRating(value);
    }
  };

  const handleStarClick = (value) => {
    setRating(value); // Siempre actualiza el estado al hacer clic en una estrella
    console.log("Puntuación seleccionada:", value);
  };

  const handleGoToLanding = () => {
    navigate("/");
  };

  // Información del usuario autenticado (simulada)
  const user = {
    name: "sergio",
    image:
      "https://media.tycsports.com/files/2022/06/14/440410/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comentario = {
      imagen:
        "https://media.tycsports.com/files/2022/06/14/440410/las-20-mejores-fotos-de-perfil-para-tu-cuenta-de-free-fire_w416.webp",
      nombre: "juan carlos",
      contenido: e.target.comentarios.value,
      puntuacion: rating,
    };
    dispatch(postComent(comentario));
    // Restablecer el estado del formulario después de enviarlo
    e.target.reset();
  };

  return (
    <div
      className="bg-cover bg-center h-screen flex justify-center items-center"
      style={{
        backgroundImage:
          // 'url("https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1")',
          'url("https://img.freepik.com/fotos-premium/vista-aerea-sobre-bosque-montana-niebla-neblina-paisaje-forestal-generativo-ai_751108-4026.jpg")',
      }}
    >
      {/* Espacio para la imagen del usuario y las estrellas */}
      {user && (
        <div className="absolute top-1/4 left-2/2 transform -translate-x-1/2 -translate-y-1/2 m-4 flex items-center">
          <span
            className="text-white mr-2"
            style={{
              marginBottom: "50%",
              position: "relative",
              left: "50%",
              transform: "translateX(-50%)",
            }}
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
                  ? "text-gold cursor-pointer text-4xl"
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
      )}

      <button
        className="absolute top-0 left-10 m-4 p-0 bg-transparent"
        onClick={handleGoToLanding}
        style={{ border: "none", outline: "none", background: "none" }}
      >
        <span className="text-[#FF3D00] text-6xl">&#8592;</span>
      </button>

      <form
        className="w-80 max-w-600px text-center flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <textarea
          name="comentarios"
          placeholder="Déjanos tu comentario aquí"
          className="h-40 w-full bg-gray-300 resize-none p-2"
          style={{ color: "black" }}
        />

        <div className="flex items-center justify-center mt-4">
          <button
            type="submit"
            className="bg-[#FF3D00] text-white px-10 py-2 rounded"
          >
            <span>Enviar</span>
          </button>
        </div>
      </form>
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
