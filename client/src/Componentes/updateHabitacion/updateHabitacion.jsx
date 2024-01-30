import React from "react";
import { useEffect, useState} from "react";
import validation from "../CrearHabitaciones/validation";
import { useDispatch, useSelector } from "react-redux";
import {
  updateHabitacion,
  getHabitacionesbackup,
  deleteHabitacion,
  DetailHabitaciones
} from "../../redux/Actions/actions";
import { Select, Option } from "@material-tailwind/react";
import axios from "axios";
import Swal from 'sweetalert2'

const UpdateHabitacion = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [touchedFields, setTouchedFields] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);
  const [seleccionhabitacion, setSeleccionhabitacion] = useState("");
  const habitacionescKcup = useSelector((state) => state.habitacionBackUp);
  const habitacionEliminada = useSelector((state) => state.habitacionEliminada);
  const allHabitaciones = useSelector((state) => state.nuevaHabitacion);
  
  const habitacionesB = habitacionescKcup.map(({ id, nombre }) => ({
    id,
    nombre,
  }));

  useEffect(() => {
    dispatch(getHabitacionesbackup());
  }, [habitacionEliminada, allHabitaciones]);

  const [nuevaDataHabitacion, setNuevaDataHabitacion] = useState({
    nombreId: "",
    nombre: "",
    precio: "",
    imagenes: [],
    servicios: [
      {
        icono: "sensor_door",
        descripcion: "",
      },
      {
        icono: "person",
        descripcion: "",
      },
      {
        icono: "bed",
        descripcion: "",
      },
      {
        icono: "home",
        descripcion: "",
      },
      {
        icono: "local_bar",
        descripcion: "Minibar",
      },
      {
        icono: "wifi",
        descripcion: "WIFI",
      },
    ],
    descripcion: "",
    estado: "Disponible",
  });

  const habitacionDetail = useSelector((state) => state.habitacionesDetail);

  const handlerselectHabitacion = (e) => {
    setSeleccionhabitacion(e);
    setNuevaDataHabitacion({ ...nuevaDataHabitacion, nombreId: e });
    dispatch(DetailHabitaciones(e));
    handleDefaultValues();
  };

  const isSubmitDisabled = () => {
    // Verifica si hay algún campo obligatorio sin completar
      return Object.values(nuevaDataHabitacion).some(
      (value) => value === "" || (Array.isArray(value) && value.length === 0)
    )
  };

  const isDeleteDisabled = () => {
    if (nuevaDataHabitacion.nombreId==="") return true;
    else return false; 
  }

  const handleChangeServicio = (index, event) => {
    const updatedServicios = [...nuevaDataHabitacion.servicios]; // Create a copy of the servicios array
    if (index === 3) {
      updatedServicios[index].descripcion = event.target.value + " m²";
    } else {
    updatedServicios[index].descripcion = event.target.value; // Update the descripcion at the specified index
    }
    setNuevaDataHabitacion({
      ...nuevaDataHabitacion,
      servicios: updatedServicios,
    }); // Update the state with the modified servicios array
  };

  const handleBlur = (fieldName) => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });

    // Actualiza nuevaDataHabitacion con el campo específico que se ha tocado
    setNuevaDataHabitacion({
      ...nuevaDataHabitacion,
      [fieldName]: nuevaDataHabitacion[fieldName],
    });

    // Vuelve a validar con la actualización de nuevaDataHabitacion
    setErrors(validation(nuevaDataHabitacion));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setNuevaDataHabitacion({
      ...nuevaDataHabitacion,
      [name]: value,
    });

    setErrors(
      validation({
        ...nuevaDataHabitacion,
        [name]: value,
      })
    );

    setIsEmpty(false);
  };

  const handleImageRemove = (index) => {
    const nuevasImagenes = [...nuevaDataHabitacion.imagenes];
    nuevasImagenes.splice(index, 1);

    setNuevaDataHabitacion({
      ...nuevaDataHabitacion,
      imagenes: nuevasImagenes,
    });
  };

  useEffect(() => {
    // Actualiza el estado submitDisabled en función de los errores y la completitud de los campos
    setSubmitDisabled(Object.keys(errors).length > 0 || isSubmitDisabled());
  }, [errors, nuevaDataHabitacion, isSubmitDisabled]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(updateHabitacion(nuevaDataHabitacion));
      setNuevaDataHabitacion({
        nombre: "",
        precio: "",
        imagenes: [],
        servicios: [
          { icono: "sensor_door", descripcion: "" },
          { icono: "person", descripcion: "" },
          { icono: "bed", descripcion: "" },
          { icono: "home", descripcion: "" },
          { icono: "local_bar", descripcion: "Minibar" },
          { icono: "wifi", descripcion: "Wifi" },
        ],
        descripcion: "",
        estado: "Disponible"
      });
    } else {
      Swal.fire("Errores de validacion", errors, "error");
    }
  };
  const handleImageCloudinary = async (e) => {
    const file = e.target.files[0];
    const data = new FormData();
    data.append("file", file);
    data.append("upload_preset", "preset serena");

    const response = await axios.post(
      "https://api.cloudinary.com/v1_1/de2jgnztx/image/upload",
      data
    );
    if (nuevaDataHabitacion.imagenes[0] !== undefined) {
      const nuevasImagenes = [...nuevaDataHabitacion.imagenes];

      // Si ya hay 4 imágenes, reemplazar la última
      if (nuevasImagenes.length === 4) {
        nuevasImagenes[3] = response.data.secure_url;
      } else {
        // Si no hay 4 imágenes, agregar la nueva imagen al final
        nuevasImagenes.push(response.data.secure_url);
      }

      setNuevaDataHabitacion({
        ...nuevaDataHabitacion,
        imagenes: nuevasImagenes,
      });
    } else {
      setNuevaDataHabitacion({
        ...nuevaDataHabitacion,
        imagenes: [response.data.secure_url],
      });
    }
  };

  const handlerdeleteHabitacion = (e) => {
    e.preventDefault();
    dispatch(deleteHabitacion(habitacionDetail[0].id));
    dispatch(getHabitacionesbackup());
  };

   const handleDefaultValues = () => {
    console.log('default values', habitacionDetail);
    habitacionDetail[0].servicios[3].descripcion=habitacionDetail[0].servicios[3].descripcion.substring(0, habitacionDetail[0].servicios[3].descripcion.length - 3)
    if (habitacionDetail){
    setNuevaDataHabitacion({
    nombreId: habitacionDetail[0].id,
    nombre: habitacionDetail[0].nombre,
    precio: habitacionDetail[0].precio,
    imagenes: habitacionDetail[0].imagenes,
    servicios: habitacionDetail[0].servicios,
    descripcion: habitacionDetail[0].descripcion,
    estado: habitacionDetail[0].estado,
    })}
   }
console.log("auxilio", nuevaDataHabitacion)
  

  return (
    <div className="bg-verde p-8 rounded-lg mx-4 my-16">
      <div className="flex flex-col xl:flex-row xl:justify-between">
        <h1 className="text-4xl font-bold mb-12 xl:mb-28 text-center xl:text-left">Editar Habitación</h1>

        <div className="xl:w-1/2 justify-center">
          <Select
            selected={seleccionhabitacion}
            onChange={handlerselectHabitacion}
            size="lg"
            label="Selecciona la habitacion a Editar"
          >
            {habitacionesB.map(({ id, nombre }) => (
              <Option
                id={id}
                key={id}
                value={id}
                className="flex items-center gap-2"
              >
                {nombre}
              </Option>
            ))}
          </Select>
        </div>
      </div>

      <form className="flex flex-col 2xl:flex-row gap-20 mx-2 my-10" onSubmit={handleSubmit}>
        <div className="w-2/8 ">
          <div className="grid grid-cols-2 gap-4 lg:mx-40 2xl:mx-auto 2xl:ml-8 justify-center">
            {nuevaDataHabitacion.imagenes.map((imagen, index) => (
              <div key={index} className="relative mx-auto">
                <img
                  className="h-36 w-36 object-cover rounded-2xl mb-4"
                  src={imagen}
                  alt={`Imagen ${index}`}
                />
                <button
                  className="material-symbols-outlined absolute w-36 h-36 top-0 left-0 right-0 bottom-0 text-blanco opacity-50 hover:opacity-90 transition-opacity"
                  onClick={() => handleImageRemove(index)}
                >
                  Delete
                </button>
              </div>
            ))}
          </div>
          <input
            className="mt-2 max-w-full ml-12 md:ml-60 lg:ml-80 2xl:ml-20 text-blanco"
            type="file"
            accept="image/*"
            name="imagen"
            placeholder="Imagen URL"
            value={nuevaDataHabitacion.imagen}
            onChange={handleImageCloudinary}
            onBlur={() => handleBlur("imagen")}
          />
          <p className="my-4">{touchedFields.imagen && errors.imagen}</p>
        </div>
        
        <div className="flex flex-col items-center w-4/8">
          <div className="block font-inter text-2xl text-blanco mb-16">
            <input
              className="text-center text-blanco font-bold"
              type="text"
              name="nombre"
              placeholder="Nombre nuevo"
              value={nuevaDataHabitacion.nombre} 
              onChange={handleChange}
              onBlur={() => handleBlur("nombre")}
            />
            <p className="my-4 text-base text-center">{touchedFields.nombre && errors.nombre}</p>
          </div>

          <div>
            <div className="grid grid-cols-3 2xl:flex 2xl:flex-row gap-4 mb-10 xl:mb-0">
              <div className="flex flex-col items-center xl:w-1/6">
                <span className="material-symbols-outlined p-3 text-blanco ">
                  sensor_door
                </span>
                <p className="text-blanco text-sm text-center">
                  {
                    <select
                      onChange={(event) => handleChangeServicio(0, event)}
                      name="select"
                      className="ml-2 p-1 rounded-md text-negro text-center w-[80px]"
                      value={nuevaDataHabitacion.servicios[0].descripcion}
                    >
                      <option value="" selected>
                        Cuartos
                      </option>
                      <option value="1 cuartos">1</option>
                      <option value="2 cuartos">2</option>
                      <option value="3 cuartos">3</option>
                    </select>
                  }{" "}
                </p>
              </div>

              <div className="flex flex-col items-center 2xl:w-1/6">
                <span className="material-symbols-outlined p-3 text-blanco ">
                  person
                </span>
                <p className="text-blanco text-sm text-center">
                  {
                    <select
                      onChange={(event) => handleChangeServicio(1, event)}
                      name="select"
                      className="ml-2 p-1 rounded-md text-negro text-center w-[80px]"
                      value={nuevaDataHabitacion.servicios[1].descripcion}
                    >
                      <option value="" selected>
                        Personas
                      </option>
                      <option value="1 pers">1</option>
                      <option value="2 pers">2</option>
                      <option value="3 pers">3</option>
                      <option value="4 pers">4</option>
                      <option value="5 pers">5</option>
                      <option value="6 pers">6</option> 
                    </select>
                  }
                </p>
              </div>

              <div className="flex flex-col items-center 2xl:w-1/6">
                <span className="material-symbols-outlined p-3 text-blanco">
                  bed
                </span>
                <p className="text-blanco text-sm text-center">
                  {
                    <select
                      onChange={(event) => handleChangeServicio(2, event)}
                      name="select"
                      className="ml-2 p-1 rounded-md text-negro text-center w-[80px]"
                      value={nuevaDataHabitacion.servicios[2].descripcion}
                    >
                      <option value="" selected>
                        Cama
                      </option>
                      <option value="Single">Single</option>
                      <option value="Double">Double</option>
                      <option value="Queen">Queen</option>
                      <option value="King">King</option>
                    </select>
                  }
                </p>
              </div>

              <div className="flex flex-col items-center 2xl:w-1/6">
                <span className="material-symbols-outlined p-3 text-blanco ">
                  home
                </span>
                <p className="text-negro text-sm text-center text-negro">
                  {
                    <input
                      onChange={(event) => handleChangeServicio(3, event)}
                      className="text-center w-[80px] mr-2 p-1 rounded-md text-negro"
                      type="number"
                      min="0"
                      name="m2"
                      placeholder="m²"
                      defaultValue={nuevaDataHabitacion.servicios[3].descripcion}
                    />
                  }
                </p>
              </div>

              <div className="flex flex-col items-center 2xl:w-1/5">
                <span className="material-symbols-outlined p-3 text-blanco ">
                  local_bar
                </span>
                <p className="text-blanco text-sm text-center">Minibar</p>
              </div>

              <div className="flex flex-col items-center 2xl:w-1/5">
                <span className="material-symbols-outlined p-3 text-blanco ">
                  wifi
                </span>
                <p className="text-blanco text-sm text-center">WIFI</p>
              </div>
            </div>
          </div>
          <div className="mt-10 w-full">
            <textarea
              className="w-full h-24 text-center pt-8 text-negro"
              name="descripcion"
              placeholder="Descripcion"
              value={nuevaDataHabitacion.descripcion}
              onChange={handleChange}
              onBlur={() => handleBlur("descripcion")}
            />
            <p className="text-center">{touchedFields.descripcion && errors.descripcion}</p>
          </div>
        </div>

        <div className="p-6 flex flex-col items-center gap-4 w-2/8 2xl:pt-3 2xl:mt-20">
          <p className="text-2xl font-bold text-blanco xl:w-2/3 justify-center">
            $
            {
              <input
                className="text-2xl font-bold text-blanco w-1/3 mx-4 text-center"
                type="number"
                name="precio"
                min="0"
                placeholder="-"
                value={nuevaDataHabitacion.precio}
                onChange={handleChange}
                onBlur={() => handleBlur("precio")}
              />
            }
            / Noche
          </p>
          <p className="my-4">{touchedFields.precio && errors.precio}</p>

          <button
            className="w-full mt-2  select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="submit"
            disabled={isSubmitDisabled()}
            onClick={handleSubmit}
          >
            Editar
          </button>

          <button
            className="w-full  select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            onClick={handlerdeleteHabitacion}
            disabled={isDeleteDisabled()}
          >
            Eliminar
          </button>
          <p className="text-center">Seleccione la habitación a eliminar</p>
        </div>
        <div className="flex justify-center"></div>
      </form>
    </div>
  );
};

export default UpdateHabitacion;
