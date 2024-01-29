import CardDesarrolladores from "./cardDesarrolladores";
import { useDispatch, useSelector } from "react-redux";
import { getDevs } from "../../redux/Actions/actions";
import { useEffect } from "react";

const RenderCardDesarrolladores = () => {
  const developers = useSelector((state) => state.developers);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDevs());

  }, []);

  // const developers = [
  //   {
  //     id: 1,
  //     nombre: "Sithia Gonzalez",
  //     ocupacion: "Full Stack Developer",
  //     imagen: "https://avatars.githubusercontent.com/u/128981283?v=4",
  //     imagenFondo:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1",
  //     github: "https://github.com/SinthiaGonzalez",
  //     linkedin: "https://www.linkedin.com/in/sinthia-fabiana-gonzalez/",
  //   },
  //   {
  //     id: 2,
  //     nombre: "Pablo Figueroa",
  //     ocupacion: "Full Stack Developer",
  //     imagen: "https://i.postimg.cc/zfZY85RH/Pablo-Perfil.jpg",
  //     imagenFondo:"https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1",
  //     github: "https://github.com/pablofigueroa16",
  //     linkedin: "https://www.linkedin.com/in/pablo-figueroa-0b204b22a/",
  //   },
  //   {
  //     id: 3,
  //     nombre: "Franco Famulari",
  //     ocupacion: "Full Stack Developer",
  //     imagen: "https://i.postimg.cc/7hMsC92d/Foto-CV.png",
  //     imagenFondo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1",
  //     github: "https://github.com/Francofamu",
  //     linkedin: "https://www.linkedin.com/in/franco-famulari-25b2b9127/",
  //   },
  //   {
  //     id: 4,
  //     nombre: "Jesus Vargas",
  //     ocupacion: "Full Stack Developer",
  //     imagen:"https://i.postimg.cc/BnGLMxRn/curriculum-fotor-bg-remover-20240111163843.png",
  //     imagenFondo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1",
  //     github: "https://github.com/jesusavargasr",
  //     linkedin: "https://www.linkedin.com/in/jesus-vargas-bb4a10217/",
  //   },
  //   {
  //     id: 5,
  //     nombre: "Alejandro Becerra",
  //     ocupacion: "Full Stack Developer",
  //     imagen: "https://i.postimg.cc/Z5d1Jpmg/00d8a4e1-fdcc-4bea-aabe-45a8d0da6c69.jpg",
  //     imagenFondo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1",
  //     github: "https://github.com/alej098",
  //     linkedin: "https://www.linkedin.com/in/d-alejandro-becerra-g-93319025a/",
  //   },
  //   {
  //     id: 6,
  //     nombre: "Verónica Di Maria",
  //     ocupacion: "Full Stack Developer",
  //     imagen: "https://i.postimg.cc/1z900qrF/cv-img-2.jpg",
  //     imagenFondo: "https://cf.bstatic.com/xdata/images/hotel/max1024x768/283384657.jpg?k=82f12511a23fc911e79146601860d7ae7b9839f37af39918d1312edd9d98efee&o=&hp=1",
  //     github: "https://github.com/VeronicaBDev",
  //     linkedin: "https://www.linkedin.com/in/d-alejandro-becerra-g-93319025a/",
  //   },
  // ];

  return (
    <div className="bg-white px-14
    sm:grid sm:grid-cols-1 sm:px-10 
    md:grid md:grid-cols-2 md:mx-5 md:px-8
    lg:grid lg:grid-cols-3 lg:px-20">
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
