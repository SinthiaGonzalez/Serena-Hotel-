import CardDesarrolladores from "./cardDesarrolladores";
const RenderCardDesarrolladores = () => {
  const developers = [
    {
      id: 1,
      nombre: "Megan Fox",
      ocupacion: "Full Stack Web Developer",
      imagen: "https://biografiacorta.net/wp-content/uploads/2022/01/Actress-Megan-Fox-1024x1024.jpg",
      imagenFondo: "https://www.elagoradiario.com/wp-content/uploads/2021/10/siberia-bosques.jpg",
      github: "",
      linkedin: "",
    },
    {
      id: 2,
      nombre: "Chris Hemsworth",
      ocupacion: "Software Engineer",
      imagen: "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/02/25/16142565944318.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/nature.jpg",
      github: "https://github.com/chrishemsworth",
      linkedin: "https://www.linkedin.com/in/chrishemsworth/",
    },
    {
      id: 3,
      nombre: "Emma Watson",
      ocupacion: "UI/UX Designer",
      imagen: "https://www.americatv.com.pe/cinescape/wp-content/uploads/2016/04/137095.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/mountains.jpg",
      github: "https://github.com/emmawatson",
      linkedin: "https://www.linkedin.com/in/emmawatson/",
    },
    {
      id: 4,
      nombre: "Henrry Cavill",
      ocupacion: "Mobile App Developer",
      imagen: "https://alchetron.com/cdn/henry-cavill-857dbe8e-5b78-4b38-8c18-ed6f6c601a4-resize-750.jpeg",
      imagenFondo: "https://www.w3schools.com/w3images/forest.jpg",
      github: "https://github.com/tomhardy",
      linkedin: "https://www.linkedin.com/in/tomhardy/",
    },
    {
      id: 5,
      nombre: "Natalie Portman",
      ocupacion: "Data Scientist",
      imagen: "https://resize-public.ladmedia.fr/img/var/public/storage/images/toutes-les-photos/natalie-portman-au-lendemain-de-l-annonce-de-son-divorce-l-actrice-refuse-de-participer-a-un-emblematique-evenement-en-france-1782162/47799683-1-fre-FR/Natalie-Portman-au-lendemain-de-l-annonce-de-son-divorce-l-actrice-refuse-de-participer-a-un-emblematique-evenement-en-France.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/forest.jpg",
      github: "https://github.com/natalieportman",
      linkedin: "https://www.linkedin.com/in/natalieportman/",
    },
    {
      id: 6,
      nombre: "Robert Downey Jr.",
      ocupacion: "DevOps Engineer",
      imagen: "https://ncgart.files.wordpress.com/2014/09/rust3.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/mountains.jpg",
      github: "https://github.com/robertdowneyjr",
      linkedin: "https://www.linkedin.com/in/robertdowneyjr/",
    },
    {
      id: 7,
      nombre: "Scarlett Johansson",
      ocupacion: "Frontend Developer",
      imagen: "https://s.libertaddigital.com/2020/05/08/1920/1080/fit/scarlett-johansson-0805.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/nature.jpg",
      github: "https://github.com/scarlettjohansson",
      linkedin: "https://www.linkedin.com/in/scarlettjohansson/",
    },
    {
      id: 8,
      nombre: "Harry Potther",
      ocupacion: "Cybersecurity Analyst",
      imagen: "https://zeleb.publico.es/wp-content/uploads/2023/07/DL_a02094016-1.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/forest.jpg",
      github: "https://github.com/idriselba",
      linkedin: "https://www.linkedin.com/in/idriselba/",
    },
  ];

  return (
    <div className=" bg-whithe h-auto" >

      <div className="h-30 border-l-4 border-negro ml-3">
        <span className="text-3xl text-negro font-inter font-medium block ml-4">
          Desarrolladores
        </span>
      </div>
      <div className="flex flex-wrap bg-blue-gray-500 justify-center">
        {developers.map((developer) => (
          <CardDesarrolladores
            key={developer.id}
            nombre={developer.nombre}
            ocupacion={developer.ocupacion}
            imagen={developer.imagen}
            imagenFondo={developer.imagenFondo}
            github={developer.github}
            linkedin={developer.linkedin}
          />
        ))}
      </div>

    </div>
  );
};
export default RenderCardDesarrolladores;