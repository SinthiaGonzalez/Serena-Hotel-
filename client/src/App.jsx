import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import ComentPage from "./Componentes/comentpage/comentpage.jsx";
import CreateComentPage from "./Componentes/CreateComentario/CreateComentario.jsx";
import Error404 from "./Componentes/Error 404/Error404.jsx";
import { Route, Routes } from "react-router-dom";
import CreateUsuario from "../src/Componentes/CreateUsuario/createUsuario.jsx";
import Habitaciones from "./Componentes/Habitaciones/Habitaciones.jsx";
import PasareladePago from "./Componentes/Pasarela-de-Pago/PasareladePago.jsx";
import axios from "axios";
import AcercaDeSerena from "./Componentes/AcercaDeSerena/AcercaDeSerena.jsx";
import DashBoardClienteReservas from "./Componentes/DashboarCliente/DashboardReservas.jsx";
import DashBoardClientePerfil from "./Componentes/DashboarCliente/DashClientePerfil.jsx";
import DashBoarAdminHabitaciones from "./Componentes/DashBoarAdminHabitaciones/DashBoarAdminHabitaciones.jsx";
import Contactenos from "./Componentes/Contactenos/Contactenos.jsx";
import LoginCliente from "./Componentes/LoginCliente/LoginCliente";
import RecuperarContraseña from "./Componentes/RecuperarContraseña/RecuperarContraseña.jsx";
import DetailHabitacionesComponent from "../src/Componentes/DetailHabitaciones/DetailHabitaciones.jsx"
import DashBoarAdminReservas from "./Componentes/DashboardAdminReservas/DashBoarAdminReservas.jsx";
import DashBoarAdminUsuarios from "./Componentes/DashBoardAdminUsuarios/DashBoarAdminReservas.jsx";

// Esta linea de codigo hace que por default todos los requerimientos en axios se hagan a esta ruta en el back
// Luego nos va a servir para hacer el Deploy del front
axios.defaults.baseURL = "http://localhost:3001/";

const App = () => {
  return (
    <>
      <Routes>
        {/* Rutas de la Navbar Home y Creacion de Comentarios*/}
        <Route path="/" element={<LandingPage />} />
        <Route path="/habitacion/:id" element={< DetailHabitacionesComponent />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        
        <Route path="/acercadeserena" element={<AcercaDeSerena />} />
        <Route path="/contactenos" element={<Contactenos />} />
        <Route path="/comentarios" element={<ComentPage />} />

        {/* Rutas de Logeo y Registrarse */}
        <Route path="/logearse" element={<LoginCliente />} />
        <Route path="/registrarse" element={<CreateUsuario />} />
        <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />

        {/* Rutas Dashboard Administrador */}
        <Route path="/admin-reservas" element={<DashBoarAdminReservas />}/>
        <Route path="/admin-usuarios" element={<DashBoarAdminUsuarios />}/>
        <Route path="/admin-habitaciones" element={<DashBoarAdminHabitaciones />}/>

        {/* Rutas Dashboard Usuario */}
        <Route path="/clienteReservas" element={<DashBoardClienteReservas />} />
        <Route path="/clientePerfil/:id" element={<DashBoardClientePerfil />} />
        <Route path="/pasareladePago" element={<PasareladePago />} />
        <Route path="/comentar" element={<CreateComentPage />} />
        {/* Ruta 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;