import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { eliminarDelCarrito } from "../../redux/Actions/actions";
const ShoppingCartCard1 = ({ imagenes, nombre, precio, id }) => {
  const dispatch = useDispatch();
  const fecha_entrada_str = localStorage.getItem("fecha_entrada");
  const fecha_salida_str = localStorage.getItem("fecha_salida");
  // Convierte las cadenas a objetos Date
  const fecha_entrada = new Date(fecha_entrada_str);
  const fecha_salida = new Date(fecha_salida_str);

  // Realiza la resta
  const estadiaEnMilisegundos = fecha_salida - fecha_entrada;

  // Convierte la diferencia a días
  const estadia = estadiaEnMilisegundos / (24 * 60 * 60 * 1000);

  const eliminarHabitacion = () => {
    const userId = JSON.parse(localStorage.getItem("userId"));
    if (id && userId) {
      dispatch(eliminarDelCarrito(id, userId));
    }
  };
  if (!imagenes || !nombre || !precio) {
    return <div>loading...</div>;
  }
  return (
    <div className="bg-naranja rounded-md overflow-hidden shadow-md mb-4 mr-2">
      <div className="felx-col p-2">
        <h5 className="text-white text-center text-inter text-xs sm:text-sm md:text-base lg:text-lg xl:text-lg">
          {nombre}
        </h5>
        <div className="flex flex-row items-center p-1">
          <img
            src={imagenes[0]}
            alt="imagen"
            className="h-20 ml-3 object-cover rounded-md w-1/2"
          />
          <div className="flex flex-col items-center w-1/2">
            <p className="text-white-700 text-inter text-xl font-bold">
              {(precio * estadia).toLocaleString("es-AR", {
                style: "currency",
                currency: "ARS",
                minimumFractionDigits: 0,
              })}
            </p>
            <div>
              <button
                className="bg-red-500 text-white px-8 py-2 mt-2 hover:bg-red-600 transition duration-300"
                onClick={eliminarHabitacion}
              >
                <FontAwesomeIcon icon={faTrashAlt} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartCard1;
