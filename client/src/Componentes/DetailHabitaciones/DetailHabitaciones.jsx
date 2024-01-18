import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailHabitaciones } from "../../redux/Actions/actions";
import { useParams, Link } from "react-router-dom";

const DetailHabitacionesComponent = () => {
  const { id } = useParams();
  console.log("id recibido1", id);

  const dispatch = useDispatch();

  useEffect(() => {
    const fetchHabitacionDetails = async () => {
      try {
        console.log("id recibido2", id);
        await dispatch(DetailHabitaciones(id));
      } catch (error) {
        console.error("Error al obtener detalles de la habitación", error);
      }
    };

    fetchHabitacionDetails();
  }, [dispatch, id]);

  const habitacion = useSelector((state) => state.habitacionesDetail[0]);
  console.log("log de habitacion", habitacion);

  return (
    <div className="bg-black text-white min-h-screen flex flex-col items-center justify-center">
    <div className="absolute top-0 left-0 p-4">
      <Link to="/" className="text-blue-500 hover:underline">
        &#x2190; Volver
      </Link>
    </div>
      {habitacion && (
        <div>
          <h2>{habitacion.nombre}</h2>
          <p>Precio: {habitacion.precio}</p>
          <p>Descripción: {habitacion.descripcion}</p>
          <p>Estado: {habitacion.estado}</p>
          <h3>Imágenes:</h3>
          <ul>
            {habitacion.imagenes.map((imagen, index) => (
              <li key={index}>
                <img src={imagen} alt={`Imagen ${index + 1}`} />
              </li>
            ))}
          </ul>
          <h3>Servicios:</h3>
          <ul>
            {habitacion.servicios.map((servicio, index) => (
              <li key={index}>
                <span>{servicio.descripcion}</span>
                {index === 0 && !servicio.infoextra && (
                  <p>
                    No hay información extra disponible.{" "}
                    {`habitaciones super espaciosas, con grandes ventanas hacia afuera que tienen una gran vista hacia las montañas`}
                  </p>
                )}
                {servicio.infoextra && <p>Info Extra: {servicio.infoextra}</p>}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DetailHabitacionesComponent;
