import CardDesarrolladores from "./cardDesarrolladores";
import { useDispatch, useSelector} from 'react-redux';
import { getDevs } from "../../redux/Actions/actions";
import { useEffect } from "react";

const RenderCardDesarrolladores = () => {
  const developers = useSelector((state) => state.developers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getDevs());

  }, []); 

  /*const developers = [
    {
      id: 1,
      nombre: "Megan Fox",
      ocupacion: "Full Stack Web Developer",
      imagen:
        "https://biografiacorta.net/wp-content/uploads/2022/01/Actress-Megan-Fox-1024x1024.jpg",
      imagenFondo:
        "https://www.elagoradiario.com/wp-content/uploads/2021/10/siberia-bosques.jpg",
      github: "",
      linkedin: "",
    },
    {
      id: 2,
      nombre: "Chris Hemsworth",
      ocupacion: "Software Engineer",
      imagen:
        "https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2021/02/25/16142565944318.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/nature.jpg",
      github: "https://github.com/chrishemsworth",
      linkedin: "https://www.linkedin.com/in/chrishemsworth/",
    },
    {
      id: 3,
      nombre: "Emma Watson",
      ocupacion: "UI/UX Designer",
      imagen:
        "https://www.americatv.com.pe/cinescape/wp-content/uploads/2016/04/137095.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/mountains.jpg",
      github: "https://github.com/emmawatson",
      linkedin: "https://www.linkedin.com/in/emmawatson/",
    },
    {
      id: 4,
      nombre: "Henrry Cavill",
      ocupacion: "Mobile App Developer",
      imagen:
        "https://alchetron.com/cdn/henry-cavill-857dbe8e-5b78-4b38-8c18-ed6f6c601a4-resize-750.jpeg",
      imagenFondo: "https://www.w3schools.com/w3images/forest.jpg",
      github: "https://github.com/tomhardy",
      linkedin: "https://www.linkedin.com/in/tomhardy/",
    },
    {
      id: 5,
      nombre: "Natalie Portman",
      ocupacion: "Data Scientist",
      imagen:
        "https://resize-public.ladmedia.fr/img/var/public/storage/images/toutes-les-photos/natalie-portman-au-lendemain-de-l-annonce-de-son-divorce-l-actrice-refuse-de-participer-a-un-emblematique-evenement-en-france-1782162/47799683-1-fre-FR/Natalie-Portman-au-lendemain-de-l-annonce-de-son-divorce-l-actrice-refuse-de-participer-a-un-emblematique-evenement-en-France.jpg",
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
      nombre: "Franco Famulari",
      ocupacion: "Frontend Developer",
      imagen: "https://i.postimg.cc/7hMsC92d/Foto-CV.png",
      imagenFondo:
        // "https://media.licdn.com/dms/image/D4D16AQGk-cCBF__NWg/profile-displaybackgroundimage-shrink_350_1400/0/1701354141186?e=1709769600&v=beta&t=GVYo2zgaUGiszypZJGH13tRC8Pl5XeA6hfNb63bDpr8",
        "https://www.w3schools.com/w3images/nature.jpg",
      github: "https://github.com/Francofamu",
      linkedin: "https://www.linkedin.com/in/franco-famulari-25b2b9127/",
    },
    {
      id: 8,
      nombre: "Harry Potther",
      ocupacion: "Cybersecurity Analyst",
      imagen:
        "https://zeleb.publico.es/wp-content/uploads/2023/07/DL_a02094016-1.jpg",
      imagenFondo: "https://www.w3schools.com/w3images/forest.jpg",
      github: "https://github.com/idriselba",
      linkedin: "https://www.linkedin.com/in/idriselba/",
    },
  ];*/

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 bg-white  ml-5 mr-5 md:ml-5 md:mr-5 lg:ml-10 lg:mr-10 xl:ml-28 xl:mr-28">
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
  );
};
export default RenderCardDesarrolladores;