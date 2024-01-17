const Experiencias = () => {
  const data = [
      {
        titulo: "SPA y Naturaleza",
        descripcion: "Relájate y renueva tu cuerpo y mente con nuestra experiencia de spa en la naturaleza. Sumérgete en un oasis de serenidad donde los tratamientos revitalizantes se combinan con la tranquilidad del entorno natural. Deja que la armonía de los sonidos del bosque y la suave brisa acaricien tu alma mientras experimentas un bienestar puro y rejuvenecedor.",
        imagen:
          "https://i.pinimg.com/564x/9a/d0/dc/9ad0dce1e6e4643a82778f19cce54ed8.jpg",
      },
      {
          titulo: "Paseo en Bote ",
          descripcion: "Embárcate en una experiencia única, explorando paisajes pintorescos y rincones ocultos. Ya seas principiante o experto, nuestras rutas te permitirán descubrir la belleza acuática de manera emocionante. Sumérgete en la calma de las aguas y crea recuerdos inolvidables en cada remada. ¡Una aventura acuática que perdurará en tu memoria!",
          imagen:
          // "https://i.pinimg.com/736x/4d/a0/8d/4da08d821ed2d598216bdd3af9157b7e.jpg"
          "https://i.pinimg.com/564x/74/de/a3/74dea3f7dedab50ef6a07ab6893dc983.jpg",
      },
      {
          titulo: "Trekking Exclusivo en el Bosque ",
          descripcion: "¡Explora la majestuosidad de nuestros senderos en un trekking exclusivo que te sumerge en la belleza natural del bosque, revelando paisajes que te dejarán sin aliento! Descubre la armonía con la naturaleza mientras exploras rutas diseñadas para todos los niveles de experiencia.",
          imagen:
          "https://i.pinimg.com/564x/39/a7/3c/39a73c42f2367f6853913f76ba8e1ba2.jpg",
        },
  ];

  return (
    <div id="experiencias" className="mt-4 mb-20 ml-4" >
      <div className="flex items-center mb-8 ml-6">
        <div className="h-30 border-l-4 border-negro">
          <span className="text-3xl text-negro font-inter font-medium block mb-2 ml-4">
            EXPERIENCIAS
          </span>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 ml-20 mr-20">
        {data.map(({ titulo, descripcion, imagen }, index) => (
          <div key={index} className="mb-4 xl:ml-20 xl:mr-20">
            <img
              className="h-90 w-full max-w-full rounded-lg object-cover object-center mb-4"
              src={imagen}
              alt={`gallery-photo-${index}`}
            />
            <div className="text-lg  text-center font-bold text-negro mb-1">{titulo}</div>
            <div className="text-sm text-center text-negro">{descripcion}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Experiencias;
