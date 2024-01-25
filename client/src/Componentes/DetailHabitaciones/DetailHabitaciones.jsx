import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { DetailHabitaciones } from "../../redux/Actions/actions";
import { useParams } from "react-router-dom";
import { Typography } from "@material-tailwind/react";
import NavBarHome from "../NavBarHome/NavBarHome";

const DetailHabitacionesComponent = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [localActive, setLocalActive] = useState(null);

  useEffect(() => {
    const fetchHabitacionDetails = async () => {
      try {
        await dispatch(DetailHabitaciones(id));
      } catch (error) {
        console.error("Error al obtener detalles de la habitación", error);
      }
    };
    fetchHabitacionDetails();
  }, [dispatch, id]);

  const habitacion = useSelector((state) => state.habitacionesDetail[0]);

  useEffect(() => {
    // Actualizar localActive cuando habitacion se define
    if (habitacion && habitacion.imagenes && habitacion.imagenes.length > 0) {
      setLocalActive(habitacion.imagenes[0]);
    }
  }, [habitacion]);

  return (
    <div className="min-h-screen flex flex-col bg-verde">
      <NavBarHome />

      <h2 className="text-4xl text-blanco text-inter text-center font-semibold my-10">
        {habitacion?.nombre}
      </h2>

      <div>
        <div>
          <div className="w-1/2 grid gap-4 mx-auto">
            <div className="h-auto">
              {localActive && (
                <img
                  className="h-auto w-full rounded-lg object-cover object-center"
                  src={localActive}
                  alt=""
                />
              )}
            </div>
            <div className="grid grid-cols-4 gap-4">
              {habitacion?.imagenes &&
                habitacion.imagenes.map((imgelink, index) => (
                  <div key={index}>
                    <img
                      onClick={() => setLocalActive(imgelink)}
                      src={imgelink}
                      className="h-auto max-h-28 w-full cursor-pointer rounded-lg object-cover object-center"
                      alt={`gallery-image-${index}`}
                    />
                  </div>
                ))}
            </div>
            <Typography className="text-blanco text-inter text-center text-lg font-base my-8">
              {habitacion?.descripcion}
            </Typography>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailHabitacionesComponent;
