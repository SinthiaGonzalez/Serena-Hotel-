import React from 'react';

const CardComent = ({ comentario, onDelete }) => {
  const renderStars = (puntuacion) => {
    const stars = [];
    for (let i = 0; i < puntuacion; i++) {
      stars.push(<span key={i} className="text-orange-500" style={{ fontSize: '30px', marginRight: '5px', marginTop: '-5%' }}>&#9733;</span>);
    }
    return stars;
  };

  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md mb-4" style={{ position: 'relative', width: '500px', minHeight: '200px', maxHeight: '300px', overflow: 'hidden', backgroundImage: 'url("https://img.freepik.com/fotos-premium/vista-aerea-sobre-bosque-montana-niebla-neblina-paisaje-forestal-generativo-ai_751108-4026.jpg")', backgroundSize: 'cover', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <button
        className="absolute top-2 right-2 text-white"
        style={{ fontSize: '20px' }}
        onClick={() => onDelete(comentario.id)}
      >
        X
      </button>
      <div className="overlay" style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, pointerEvents: 'none' }}></div>

      <h3 className="text-white font-bold mb-2" style={{ filter: 'brightness(120%)', marginLeft: '50px', marginTop: '10px' }}> {comentario.nombre}</h3>

      <div style={{ display: 'flex', alignItems: 'center' }}>
        <img src={comentario.imagen} alt="Imagen de perfil" className="w-16 h-16 rounded-full mr-4" style={{ filter: 'brightness(85%)', alignSelf: 'flex-start' }} />
        <p className="text-white text-sm" style={{ filter: 'brightness(150%)', marginTop: '5px' }}>{renderStars(comentario.puntuacion)}</p>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <p className="text-white text-center" style={{ filter: 'brightness(120%)' }}>Comentario: {comentario.contenido}</p>
      </div>
    </div>
  );
};

export default CardComent;
