import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrashAlt } from "@fortawesome/free-regular-svg-icons";
import { useDispatch } from "react-redux";
import { eliminarDelCarrito } from "../../redux/Actions/actions";

const CardDetalleCompras = ({ imagenes, nombre, precio, id }) => {
  const dispatch = useDispatch();
  const eliminarHabitacion = () => {
    dispatch(eliminarDelCarrito(id));
  };
  if (!imagenes || !nombre || !precio) {
    return <div>loading...</div>;
  }
  return (
    <div className="mx-auto bg-naranja rounded-md overflow-hidden shadow-md flex mb-4 p-2">

      <div className="flex items-center ">
        <img
          src={imagenes}
          alt="imagen"
          className=" w-[200px] h-28 ml-3 object-cover rounded-md"
        />
      </div>

      <div className="w-3/5 mt-4">
        <p className="mb-2 text-white text-2xl font-semibold text-center">{nombre}</p>
        <p className="mb-2 text-white text-base text-center">
          dd/mm/aa - dd/mm/aa
        </p>
      </div>

      <div className="p-4 flex flex-row items-center justify-between w-1/5">
        <p className="text-white-700 font-bold text-2xl">${precio}</p>
        <div>
          <button
            className="bg-red-500 text-white px-4 py-3 mt-2 hover:bg-red-600 transition duration-300"
            onClick={eliminarHabitacion}
          >
            <FontAwesomeIcon icon={faTrashAlt} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardDetalleCompras;
