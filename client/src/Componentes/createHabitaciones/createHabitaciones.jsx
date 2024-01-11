import { useEffect, useState } from "react";
import validation from "../CrearHabitaciones/validation";
import { useDispatch, useSelector } from "react-redux";
import { crearHabitacion } from "../../redux/Actions/actions";

const CreateHabitacion = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const [touchedFields, setTouchedFields] = useState({});
  const [isEmpty, setIsEmpty] = useState(true);

  const [habitacionData, setHabitacionData] = useState({
    nombre: "",
    precio: 0,
    imagen: [],
    servicios: [
      { icono: "sensor_door", descripcion: "" },
      { icono: "person", descripcion: "" },
      { icono: "bed", descripcion: "" },
      { icono: "home", descripcion: "" },
      { icono: "local_bar", descripcion: "Minibar" },
      { icono: "wifi", descripcion: "WIFI" },
    ],
    descripcion: "",
  });
  console.log({ habitacionData });

  const handleBlur = (fieldName) => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });
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

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isEmpty === false) {
      setSubmitDisabled(false);
    } else {
      setSubmitDisabled(true);
    }
  }, [errors, habitacionData, isEmpty]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (Object.keys(errors).length === 0) {
      dispatch(crearHabitacion(habitacionData));
    } else alert("Validation errors:", errors);
  };
  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="nombre"
        placeholder="Nombre"
        onChange={handleChange}
        onBlur={() => handleBlur("nombre")}
      />
      <p>{touchedFields.nombre && errors.nombre}</p>
      <input
        type="text"
        name="imagen"
        placeholder="Imagen URL"
        onChange={handleChange}
        onBlur={() => handleBlur("imagen")}
      />
      {habitacionData.imagen && (
        <img src={habitacionData.imagen} alt="Vista previa de la imagen" />
      )}
      <p>{touchedFields.imagen && errors.imagen}</p>
      <select name="select">
        <option value="" selected>
          Tipo de cama
        </option>
        <option value="Single">Single</option>
        <option value="Double">Double</option>
        <option value="Queen">Queen</option>
        <option value="King">King</option>
      </select>
      <input
        type="number"
        name="precio"
        placeholder="Precio"
        onChange={handleChange}
        onBlur={() => handleBlur("precio")}
      />
      <p>{touchedFields.precio && errors.precio}</p>
      <input
        type="text"
        name="descripcion"
        placeholder="Descripcion"
        onChange={handleChange}
        onBlur={() => handleBlur("descripcion")}
      />
      <p>{touchedFields.descripcion && errors.descripcion}</p>

      <button
        className="mt-2 mb-4 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6"
        type="submit"
        disabled={submitDisabled}
      >
        Crear
      </button>
    </form>
  );
};
export default CreateHabitacion;

