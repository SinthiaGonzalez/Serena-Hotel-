import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { eliminarDelCarrito } from "../../redux/Actions/actions";

const ShoppingCartCard1 = ({ imagenes, nombre, precio, id }) => {
  const dispatch = useDispatch();
  const eliminarHabitacion = () => {
    dispatch(eliminarDelCarrito(id));
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
            src={imagenes}
            alt="imagen"
            className="h-20 ml-3 object-cover rounded-md w-1/2"
          />
          <div className="flex flex-col items-center w-1/2">
            <p className="text-white-700 text-inter text-xl font-bold">
              ${precio}
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
