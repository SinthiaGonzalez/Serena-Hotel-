import { useEffect, useState } from "react";
import validation from "./validation";
import { useDispatch, useSelector } from "react-redux";
import { crearHabitacion } from "../../redux/Actions/actions";

const CrearHabitacion = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [touchedFields, setTouchedFields] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);

  const [habitacionData, setHabitacionData] = useState({
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
    // descripcion: "",
  });
  console.log({ habitacionData });

  const isSubmitDisabled = () => {
    // Verifica si hay algún campo obligatorio sin completar
    return Object.values(habitacionData).some(
      (value) => value === "" || (Array.isArray(value) && value.length === 0)
    );
  };

  const handleBlur = (fieldName) => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });
    
    // Actualiza habitacionData con el campo específico que se ha tocado
    setHabitacionData({
      ...habitacionData,
      [fieldName]: habitacionData[fieldName],
    });
    
    // Vuelve a validar con la actualización de habitacionData
    setErrors(validation(habitacionData));
  };

  const handleChange = (event) => {
    const { name, value } = event.target;

    setHabitacionData({
      ...habitacionData,
      [name]: value,
    });

    setErrors(
      validation({
        ...habitacionData,
        [name]: value,
      })
    );

    setIsEmpty(false);
  };

  const handleImageSubmit = () => {
    // Verificar que haya una imagen antes de agregarla
    if (habitacionData.imagen) {
      const nuevasImagenes = [...habitacionData.imagenes];

      // Si ya hay 4 imágenes, reemplazar la última
      if (nuevasImagenes.length === 4) {
        nuevasImagenes[3] = habitacionData.imagen;
      } else {
        // Si no hay 4 imágenes, agregar la nueva imagen al final
        nuevasImagenes.push(habitacionData.imagen);
      }

      setHabitacionData({
        ...habitacionData,
        imagenes: nuevasImagenes,
      });
    }
  };

  const handleImageRemove = (index) => {
    const nuevasImagenes = [...habitacionData.imagenes];
    nuevasImagenes.splice(index, 1);

    setHabitacionData({
      ...habitacionData,
      imagenes: nuevasImagenes,
    });
  };

  useEffect(() => {
    // Actualiza el estado submitDisabled en función de los errores y la completitud de los campos
    setSubmitDisabled(Object.keys(errors).length > 0 || isSubmitDisabled());
  }, [errors, habitacionData]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(crearHabitacion(habitacionData));
    } else {
      alert("Validation errors:", errors);
    }
  };

  console.log(habitacionData)

  return (
    <div className="flex justify-center items-center h-screen bg-blanco">
      <div className="bg-verde p-8 rounded-lg mx-20 my/28">
        <h1 className="text-4xl font-bold mb-28">Crear Habitacion</h1>
        <form className="flex flex-row gap-20 mx-2 my-10" onSubmit={handleSubmit}>
          <div className="w-2/8">
            <div className="grid grid-cols-2 gap-4 ml-8">
              {habitacionData.imagenes.map((imagen, index) => (
                <div key={index} className="relative">
                  <img
                    className="h-36 w-36 object-cover rounded-xl mb-4"
                    src={imagen}
                    alt={`Imagen ${index}`}
                  />
                  <button
                    className="material-symbols-outlined absolute w-36 h-36 top-0 left-0 right-0 bottom-0 text-white opacity-0 hover:opacity-90 transition-opacity"
                    onClick={() => handleImageRemove(index)}
                  >
                    Delete
                  </button>
                </div>
              ))}
            </div>
            <input
              className="mt-2 w-full text-center"
              type="text"
              name="imagen"
              placeholder="Imagen URL"
              value={habitacionData.imagen}
              onChange={handleChange}
              onBlur={() => handleBlur("imagen")}
            />
            <p className="my-4">{touchedFields.imagen && errors.imagen}</p>

            <button
              type="button"
              className="w-full mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
              onClick={handleImageSubmit}
            >
              Agregar Imagen
            </button>
          </div>

          <div className="flex flex-col items-center w-4/8">
            <div className="block font-inter text-2xl font-bold text-blanco mb-16">
              <input
                className="text-center"
                type="text"
                name="nombre"
                placeholder="Nombre"
                onChange={handleChange}
                onBlur={() => handleBlur("nombre")}
              />
              <p className="my-4">{touchedFields.nombre && errors.nombre}</p>
            </div>

            <div>
              <div className="flex flex-row gap-4">
                <div className="flex flex-col items-center w-1/6">
                  <span className="material-symbols-outlined p-3 text-blanco ">
                    sensor_door
                  </span>
                  <p className="text-blanco text-sm text-center">
                    {
                      <select
                        name="select"
                        className="ml-2 p-1 rounded-md text-blanco text-center w-[80px]"
                      >
                        <option value="" selected>
                          Cuartos
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                      </select>
                    }{" "}
                  </p>
                </div>

                <div className="flex flex-col items-center w-1/6">
                  <span className="material-symbols-outlined p-3 text-blanco ">
                    person
                  </span>
                  <p className="text-blanco text-sm text-center">
                    {
                      <select
                        name="select"
                        className="ml-2 p-1 rounded-md text-blanco text-center w-[80px]"
                      >
                        <option value="" selected>
                          Personas
                        </option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                        <option value="4">4</option>
                        <option value="5">5</option>
                        <option value="6">6</option>
                        <option value="7">7</option>
                        <option value="8">8</option>
                      </select>
                    }
                  </p>
                </div>

                <div className="flex flex-col items-center w-1/6">
                  <span className="material-symbols-outlined p-3 text-blanco">
                    bed
                  </span>
                  <p className="text-blanco text-sm text-center">
                    {
                      <select
                        name="select"
                        className="ml-2 p-1 rounded-md text-blanco text-center w-[80px]"
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

                <div className="flex flex-col items-center w-1/6">
                  <span className="material-symbols-outlined p-3 text-blanco ">
                    home
                  </span>
                  <p className="text-blanco text-sm text-center">
                    {
                      <input
                        className="text-center w-[80px] mr-2 p-1 rounded-md"
                        type="number"
                        name="m2"
                        placeholder="m²"
                      />
                    }
                  </p>
                </div>

                <div className="flex flex-col items-center w-1/5">
                  <span className="material-symbols-outlined p-3 text-blanco ">
                    local_bar
                  </span>
                  <p className="text-blanco text-sm text-center">Minibar</p>
                </div>

                <div className="flex flex-col items-center">
                  <span className="material-symbols-outlined p-3 text-blanco ">
                    wifi
                  </span>
                  <p className="text-blanco text-sm text-center">WIFI</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 pt-3 flex flex-col items-center gap-4 w-2/8">
            <p className="text-2xl font-bold text-blanco w-2/3 justify-center">
              $
              {
                <input
                  className="text-2xl font-bold text-blanco w-1/3 mx-4 text-center"
                  type="number"
                  name="precio"
                  placeholder="-"
                  onChange={handleChange}
                  onBlur={() => handleBlur("precio")}
                />
              }
              /Noche
            </p>
            <p className="my-4">{touchedFields.precio && errors.precio}</p>

            <button
              className="w-full mt-2 mb-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
              type="submit"
              disabled={isSubmitDisabled()}
            >
              Crear
            </button>
          </div>

          {/* <div>
            <input
              type="text"
              name="descripcion"
              placeholder="Descripcion"
              onChange={handleChange}
              onBlur={() => handleBlur("descripcion")}
            />
            <p>{touchedFields.descripcion && errors.descripcion}</p>
          </div> */}
        </form>
      </div>
    </div>
  );
};

export default CrearHabitacion;
