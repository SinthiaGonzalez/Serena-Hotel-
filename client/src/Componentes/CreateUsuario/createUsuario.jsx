import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import validation from "./validations";
import {
  faUser,
  faEnvelope,
  faPhone,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import {postUsuario} from "../../redux/Actions/actions"
import Swal from 'sweetalert2'

const CreateUsuario = () => {
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});
  const [touchedFields, setTouchedFields] = useState({});

  const [user, setUser] = useState({
    name: "",
    apellido: "",
    email: "",
    telefono: "",
    contraseña: "",
    confirmarContraseña: "",
  });

const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });

    setErrors(
      validation({
        ...user,
        [e.target.name]: e.target.value,
      })
    )
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (Object.keys(errors).length === 0) {
        await dispatch(postUsuario(user));
        setUser({
          name: "",
          apellido: "",
          email: "",
          telefono: "",
          contraseña: "",
          confirmarContraseña: "",
        });
        resetTouchedFields();
      } else {
        Swal.fire("Error de validacion", "", "error");
      }
    } catch (error) {
      Swal.fire(error.message, "", "error");
    }
  };

  const handleBlur = (fieldName) => {
    setTouchedFields({ ...touchedFields, [fieldName]: true });
  };

  const resetTouchedFields = () => {
    setTouchedFields({});
  };

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

console.log("por aca", errors);
console.log("ayudaaaaaaaaaaaa", user)
  return (
    <div
      className="flex items-center justify-center bg-cover bg-center text-white text-center p-8 h-screen"
      style={{
        backgroundImage:
          'url("https://i.postimg.cc/3xxjwxft/selena-hotel-1.png")',
      }}
    >
      <div className="flex flex-col items-center justify-center h-auto bg-blanco w-full lg:w-2/3 rounded-lg px-2 lg:px-20  pt-3 pb-6">
        <a
          href="/logearse"
          className="volver font-inter text-base  antialiased font-bold text-naranja text-inter hover:scale-105 md:w-1/6 mt-6 pl-4 md:pl-0 mr-auto "
        >
          🡰 Volver
        </a>
        <p className="flex mt-4 font-inter text-3xl antialiased leading-normal text-center font-bold text-gris justify-center">
          Registrarse
        </p>
        <form onSubmit={handleSubmit} className="px-4 lg:px-0 lg:w-2/3">
          <h2 className="text-2xl mb-4">Crear Usuario</h2>
          <div className="mb-4">
            <label className="block text-gray-200 text-sm font-bold mb-2">
              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="text"
                  name="name"
                  placeholder="Nombre"
                  value={user.name}
                  onChange={handleChange}
                  onBlur={() => handleBlur("name")}
                />
              </div>
              <p className="my-4 text-base text-center text-naranja">{errors.name}</p>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faUser}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="text"
                  name="apellido"
                  placeholder="Apellido"
                  value={user.apellido}
                  onChange={handleChange}
                  onBlur={() => handleBlur("apellido")}
                />
              </div>
              <p className="my-4 text-base text-center text-naranja">{errors.apellido}</p>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faEnvelope}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={user.email}
                  onChange={handleChange}
                  onBlur={() => handleBlur("email")}
                />
              </div>
              <p className="my-4 text-base text-center text-naranja">{errors.email}</p>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faPhone}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type="text"
                  name="telefono"
                  placeholder="Teléfono"
                  value={user.telefono}
                  onChange={handleChange}
                  onBlur={() => handleBlur("telefono")}
                />
              </div>
              <p className="my-4 text-base text-center text-naranja">{errors.telefono}</p>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-12 lg:pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type={showPassword ? "text" : "password"}
                  name="contraseña"
                  placeholder="Contraseña"
                  value={user.contraseña}
                  onChange={handleChange}
                  onBlur={() => handleBlur("contraseña")}
                />
                 <button
                className="absolute material-symbols-outlined text-blanco right-4 top-3 text-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleTogglePassword}
                type="button"
              >
                {showPassword ? "visibility_off" : "visibility"}
              </button>
              </div>
              <p className="my-4 text-base text-center text-naranja">{errors.contraseña}</p>

              <div className="flex flex-row h-11 bg-verde  relative rounded-lg mb-4">
                <div className="items-center">
                  <FontAwesomeIcon
                    icon={faLock}
                    className="w-[45px] h-7 p-2 border-r-4 border-naranja"
                  />
                </div>

                <input
                  className="w-full h-11 font-inter text-center pr-8 lg:pr-24 text-base font-normal text-white bg-verde rounded-lg"
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmarContraseña"
                  placeholder="Confirmar Contraseña"
                  value={user.confirmarContraseña}
                  onChange={handleChange}
                  onBlur={() => handleBlur("confirmarContraseña")}
                />
              <button
                className="absolute material-symbols-outlined text-blanco right-4 top-3 text-center opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={handleToggleConfirmPassword}
                type="button"
              >
                {showConfirmPassword ? "visibility_off" : "visibility"}
              </button>
              </div>
              <p className="my-4 text-base text-center text-naranja">{errors.confirmarContraseña}</p>
            </label>
          </div>
          <button
            className="w-2/4 mb-4 mt-4 select-none rounded-lg bg-naranja py-3.5 px-7 text-center align-middle font-inter text-base font-bold uppercase text-blanco transition-all focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none border-2 border-naranja hover:border-blanco"
            type="button"
            onClick={handleSubmit}
          >
            REGISTRATE
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateUsuario;

{
  /* <FontAwesomeIcon icon={faUser} className="mr-2" />
<input
  type="text"
  name="name"
  placeholder="Nombre"
  value={user.name}
  onChange={handleChange}
  className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
/> */
}
{
  /* </label>
<label className="block text-gray-200 text-sm font-bold mb-2">
<FontAwesomeIcon icon={faUser} className="mr-2" />
<input
  type="text"
  name="apellido"
  placeholder="Apellido"
  value={user.apellido}
  onChange={handleChange}
  className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
/> */
}
{
  /* </label>
<label className="block text-gray-200 text-sm font-bold mb-2">
<FontAwesomeIcon icon={faEnvelope} className="mr-2" />
<input
  type="email"
  name="email"
  placeholder="Email"
  value={user.email}
  onChange={handleChange}
  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
/> */
}
{
  /* </label>
<label className="block text-gray-200 text-sm font-bold mb-2">
<FontAwesomeIcon icon={faPhone} className="mr-2" />
<input
  type="text"
  name="telefono"
  placeholder="Teléfono"
  value={user.telefono}
  onChange={handleChange}
  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
/>
</label>
<label className="block text-gray-200 text-sm font-bold mb-2">
<FontAwesomeIcon icon={faLock} className="mr-2" />
<input
  type="password"
  name="contraseña"
  placeholder="Contraseña"
  value={user.contraseña}
  onChange={handleChange}
  className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
/> */
}
