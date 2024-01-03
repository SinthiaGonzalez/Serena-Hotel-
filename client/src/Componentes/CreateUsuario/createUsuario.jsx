import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postUsuario } from '../../redux/actions/actions';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faEnvelope, faPhone, faLock } from '@fortawesome/free-solid-svg-icons';

const CreateUsuario = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState({
    name: '',
    apellido: '',
    email: '',
    telefono: '',
    contraseña: ''
  });

  const handleChange = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await dispatch(postUsuario(user));
      // Limpiar el formulario restableciendo el estado
      setUser({
        name: '',
        apellido: '',
        email: '',
        telefono: '',
        contraseña: ''
      });
    } catch (error) {
      alert(error.message);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-white">
      <form onSubmit={handleSubmit} className="w-1/3 rounded-lg p-8" style={{ backgroundColor: 'white' }}>
        <h2 className="text-2xl mb-4">Crear Usuario</h2>
        <div className="mb-4">
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <input
              type="text"
              name="name"
              placeholder="Nombre"
              value={user.name}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            <input
              type="text"
              name="apellido"
              placeholder="Apellido"
              value={user.apellido}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-white leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
          <label className="block text-gray-200 text-sm font-bold mb-2">
            <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={user.email}
              onChange={handleChange}
              className="appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline bg-[#1D2828] text-white"
            />
          </label>
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
            />
          </label>
        </div>
        <button type="submit" className="bg-[#FF3D00] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
          REGISTRATE
        </button>
      </form>
    </div>
  );
};

export default CreateUsuario;
