import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailHabitaciones } from "../../redux/Actions/actions";
import { useParams, Link } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import NavBarHome from "../NavBarHome/NavBarHome";
const DetailHabitacionesComponent = () => {
  const { id } = useParams();
  console.log("id recibido1", id);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHabitacionDetails = async () => {
      try {
        console.log("id recibido2", id);
        dispatch(DetailHabitaciones(id));
      } catch (error) {
        console.error("Error al obtener detalles de la habitación", error);
      }
    };

    fetchHabitacionDetails();
  }, [dispatch, id]);
  let data = [
    {
      imgelink:
        "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1432462770865-65b70566d673?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1493246507139-91e8fad9978e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2940&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1518623489648-a173ef7824f3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2762&q=80",
    },
    {
      imgelink:
        "https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80",
    },
  ];
  const habitacion = useSelector((state) => state.habitacionesDetail[0]);

  console.log("log de habitacion", habitacion);
  const [active, setActive] = React.useState(
    "https://images.unsplash.com/photo-1499696010180-025ef6e1a8f9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
  );
  return (
    <div className="flex flex-col h-[110vh] w-full  items-center mx-auto bg-verde">
      <NavBarHome />
      <h2 className="text-2xl text-blanco text-center font-semibold mb-4 mt-4">
        DETALLES
      </h2>
      <div className="h-[100px] w-[800px] grid gap-4">
        <div>
          <img
            className="h-auto w-full max-w-full rounded-lg object-cover object-center md:h-[480px]"
            src={active}
            alt=""
          />
        </div>
        <div className="grid grid-cols-5 gap-4">
          {data.map(({ imgelink }, index) => (
            <div key={index}>
              <img
                onClick={() => setActive(imgelink)}
                src={imgelink}
                className="h-20 max-w-full cursor-pointer rounded-lg object-cover object-center"
                alt="gallery-image"
              />
            </div>
          ))}
        </div>
        <h2 className="text-2xl text-blanco text-center font-semibold mb">
          {habitacion?.nombre}
        </h2>
        <Typography className="text-blanco">
          Bienvenido al Hotel Bosque Encantado, donde la magia de la naturaleza
          se encuentra con la comodidad moderna. Nuestras acogedoras
          habitaciones temáticas de cabaña te sumergirán en la atmósfera
          tranquila del bosque. 🌲 Disfruta de la autenticidad con muebles
          rústicos y una chimenea que crea un ambiente cálido y acogedor. 🏡 Las
          ventanas panorámicas te brindarán vistas impresionantes del bosque,
          mientras que la cama con dosel te envolverá en la serenidad de la
          naturaleza. 🛏️ Relájate en el spa privado 🛁, saborea deliciosos
          platillos en nuestro restaurante gourmet 🍽️ y explora senderos
          naturales con nuestro guía experto 🚶. ¡Tu experiencia en el bosque
          nunca fue tan lujosa!
        </Typography>
      </div>
    </div>
  );
};

export default DetailHabitacionesComponent;
