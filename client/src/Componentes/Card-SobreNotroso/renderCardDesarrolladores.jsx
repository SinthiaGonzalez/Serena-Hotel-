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
/*
  const developers = [
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
      "nombre": "Franco Famulari",
      "ocupacion": "Full Stack Developer",
      "imagen": "https://i.postimg.cc/7hMsC92d/Foto-CV.png",
      "imagenFondo":"https://www.w3schools.com/w3images/nature.jpg",
      "github": "https://github.com/Francofamu",
      "linkedin": "https://www.linkedin.com/in/franco-famulari-25b2b9127/"
    },
    {
      "nombre": "Jesus Vargas",
      "ocupacion": "Full Stack Developer",
      "imagen":"https://i.postimg.cc/BnGLMxRn/curriculum-fotor-bg-remover-20240111163843.png",
      "imagenFondo":"https://www.elagoradiario.com/wp-content/uploads/2021/10/siberia-bosques.jpg",
      "github": "https://github.com/jesusavargasr",
      "linkedin": "https://www.linkedin.com/in/jesus-vargas-bb4a10217/"
    },
    {
      "nombre": "Alejandro Becerra",
      "ocupacion": "Full Stack Developer",
      "imagen":"https://i.postimg.cc/Z5d1Jpmg/00d8a4e1-fdcc-4bea-aabe-45a8d0da6c69.jpg",
      "imagenFondo":"https://www.elagoradiario.com/wp-content/uploads/2021/10/siberia-bosques.jpg",
      "github": "https://github.com/alej098",
      "linkedin": "https://www.linkedin.com/in/d-alejandro-becerra-g-93319025a/"
    },
    {
      "nombre": "Verónica Di Maria",
      "ocupacion": "Full Stack Developer",
      "imagen": "https://i.postimg.cc/1z900qrF/cv-img-2.jpg",
      "imagenFondo":"https://www.w3schools.com/w3images/nature.jpg",
      "github": "https://github.com/VeronicaBDev",
      "linkedin": "https://www.linkedin.com/in/d-alejandro-becerra-g-93319025a/"
    },
    {
      "nombre": "Franco Famulari",
      "ocupacion": "Full Stack Developer",
      "imagen": "https://i.postimg.cc/7hMsC92d/Foto-CV.png",
      "imagenFondo":"https://www.w3schools.com/w3images/nature.jpg",
      "github": "https://github.com/Francofamu",
      "linkedin": "https://www.linkedin.com/in/franco-famulari-25b2b9127/"
    }
  ];*/

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 px-28 bg-white  ml-5 mr-5 md:ml-5 md:mr-5 lg:ml-10 lg:mr-10 xl:ml-28 xl:mr-28">
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