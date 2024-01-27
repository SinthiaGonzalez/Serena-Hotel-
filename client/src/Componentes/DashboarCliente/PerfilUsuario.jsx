import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  updateUsuario,
  getUsuarioById,
  cambiarEstadoUsuario,
} from "../../redux/Actions/actions";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import axios from "axios";
import Swal from "sweetalert2";

const UpdateUsuario = () => {
  const dispatch = useDispatch();
  const userId = localStorage.getItem("userId");
  const isAdmin = localStorage.getItem("isAdmin");
  console.log("aqui", userId);

  const [user, setUser] = useState({
    id: userId,
    name: "",
    apellido: "",
    email: "",
    telefono: "",
    contraseña: "",
    isadmin: isAdmin,
    imagen: "",
  });
  const usuarioData = useSelector((state) => state.usuarioById);

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
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
    const url = response.data.url;
    console.log("aqui", url);
    setUser({ ...user, imagen: url });
  };

  const deleteImage = () => {
    setUser({ ...user, imagen: "" });
  };
  const handleSubmit = async (e) => {
    try {
      dispatch(updateUsuario(user));
      // Restablecer el estado a los valores iniciales en lugar de un objeto vacío
      setUser({
        id: userId,
        name: "",
        apellido: "",
        email: "",
        telefono: "",
        contraseña: "",
        isadmin: isAdmin,
        imagen: "",
      });
    } catch (error) {
      Swal.fire(error.message, "", "error");
    }
  };
  console.log("este", user);

  const confirmacion = () => {
    Swal.fire({
      title: "Quieres guardar los cambios?",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: " No guardar",
      confirmButtonColor: "#FB350C",
      denyButtonColor: "#322F2C",
    }).then(async (result) => {
      if (result.isConfirmed) {
        handleSubmit();
      } else if (result.isDenied) {
        Swal.fire("No se guardaron los cambios", "", "info");
      }
    });
  };

  console.log(" a ver", usuarioData);

  const handleDefaultValues = () => {
    setUser({
      id: userId,
      name: usuarioData.name,
      apellido: usuarioData.apellido,
      email: usuarioData.email,
      telefono: usuarioData.telefono,
      contraseña: "",
      isadmin: isAdmin,
      imagen: usuarioData.imagen,
    });
  };

  useEffect(() => {
    dispatch(getUsuarioById(userId));
  }, []);

  useEffect(() => {
    handleDefaultValues();
  }, [usuarioData]);

  const handleEstadoChange = () => {
    dispatch(cambiarEstadoUsuario(userId, "eliminar")),
      localStorage.removeItem("token");
    localStorage.removeItem("name");
    localStorage.removeItem("imagen");
    localStorage.removeItem("userId");
    localStorage.removeItem("isAdmin");
    navigate("/logearse");
    // idSelect es el id del usuario
  };

  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8"
      // style={{
      //   backgroundImage:
      //     'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      // }}
    >
      <div className="flex flex-col items-center justify-center bg-verde w-full lg:w-2/3 h-auto rounded-lg px-4 pt-4 pb-6">
        <p className="relative flex mt-4 mb-4 font-inter text-3xl antialiased leading-normal text-center font-bold text-blanco justify-center">
          Editar Usuario
        </p>
        <div className="relative">
          <img
            className="h-36 w-36 object-cover rounded-full"
            src={user.imagen}
            alt="Imagen de perfil"
          />
          <button
            className="material-symbols-outlined absolute w-36 h-36 top-0 left-0 right-0 bottom-0 text-white rounded-full opacity-0 hover:opacity-90 transition-opacity"
            onClick={deleteImage}
          >
            Delete
          </button>
        </div>
        <div className="mb-8">
          <label className="relative mt-2 w-full text-center text-blanco cursor-pointer">
            <input
              className="material-symbols-outlined opacity-0 absolute inset-0 w-full h-full"
              type="file"
              accept="image/*"
              name="imagen"
              onChange={handleImageCloudinary}
            />
            <span className="material-symbols-outlined bg-gris rounded-full p-2 mb-4 absolute z-10 -mt-8 ml-8">
              Edit
            </span>
          </label>
        </div>
        <form onSubmit={handleSubmit} className="px-4 lg:px-0 md:w-2/3">
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              <div className="flex flex-row h-11 bg-gris  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-gris rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={user.name}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-gris  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-gris rounded-lg"
                  type="text"
                  name="apellido"
                  placeholder="apellido"
                  value={user.apellido}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-gris  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-gris rounded-lg"
                  type="email"
                  name="email"
                  placeholder="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-gris  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-gris rounded-lg"
                  type="text"
                  name="telefono"
                  placeholder="Telefono"
                  value={user.telefono}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-gris  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-gris rounded-lg"
                  type="password"
                  name="contraseña"
                  placeholder="Contraseña"
                  value={user.contraseña}
                  onChange={handleChange}
                />
              </div>

              <div className="flex flex-row h-11 bg-gris  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-8 lg:pr-24 text-base font-normal text-white bg-gris rounded-lg"
                  type="password"
                  name="confirmarContraseña"
                  placeholder="Confirmar Contraseña"
                  value={user.confirmarContraseña}
                  onChange={handleChange}
                />
              </div>
            </label>
          </div>
          <button
            className="w-2/4 mb-4 mt-4 mx-1 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
            onClick={confirmacion}
          >
            EDITAR
          </button>
          <button
            className="w-2/4 mb-4 mt-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
            onClick={handleEstadoChange}
          >
            ELIMINAR
          </button>
        </form>
      </div>
    </div>
  );
};

export default UpdateUsuario;
