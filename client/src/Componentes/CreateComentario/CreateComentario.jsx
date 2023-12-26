import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { postComent } from "../../redux/Actions/actions";

const CreateComentPage = () => {
  const [rating, setRating] = useState(0);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleStarHover = (value) => {
    setRating(value);
  };

  const handleStarClick = (value) => {
    setRating(value);
    console.log("Calificación seleccionada:", value);
  };

  const handleGoToLanding = () => {
    navigate("/");
  };

  // Información del usuario autenticado (simulada)
  const user = {
    name: "Nombre de Usuario",
    image: "url_de_la_imagen",
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const comentario = {
      nombre: user.name, // Llenar automáticamente con el nombre del usuario autenticado
      contenido: e.target.comentarios.value,
      fecha: new Date().toISOString(), // Agregar la fecha automáticamente
      puntuacion: rating, // Usar la calificación seleccionada
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
    'url("https://img.freepik.com/fotos-premium/vista-aerea-sobre-bosque-montana-niebla-neblina-paisaje-forestal-generativo-ai_751108-4026.jpg")',
}}
>
{/* Espacio para el nombre del usuario encima de las estrellas */}
{user && (
  <div className="absolute top-0 left-1/2 transform -translate-x-1/2 m-4 text-white">
    <span>{user.name}</span>
  </div>
)}

{/* Espacio para la imagen del usuario al lado de las estrellas */}
{user && (
  <div className="absolute top-1/4 left-1/4 transform -translate-x-1/2 -translate-y-1/2 m-4 flex items-center">
    <img
      src={user.image}
      alt="Imagen de perfil"
      className="w-10 h-10 rounded-full mr-2"
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

      <form className="w-80 max-w-600px text-center flex flex-col items-center" onSubmit={handleSubmit}>
        <textarea
          name="comentarios"
          placeholder="Déjanos tu comentario aquí"
          className="h-40 w-full bg-gray-300 resize-none p-2"
        />

        <div className="flex items-center justify-center mt-4">
          <button type="submit" className="bg-[#FF3D00] text-white px-10 py-2 rounded">
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
