import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import CreateComentPage from "./Componentes/CreateComentario/CreateComentario.jsx";
import Error404 from "./Componentes/Error 404/Error404.jsx";
import { Route, Routes } from "react-router-dom";
import CreateUsuario from "../src/Componentes/CreateUsuario/createUsuario.jsx";
import Habitaciones from "./Componentes/Habitaciones/Habitaciones2.jsx";
import PasareladePago from "./Componentes/Pasarela-de-Pago/PasareladePago.jsx";
import axios from "axios";
import AcercaDeSerena from "./Componentes/AcercaDeSerena/AcercaDeSerena.jsx";
import DashBoardClienteReservas from "./Componentes/DashboarCliente/DashboardReservas.jsx";
import DashBoardClientePerfil from "./Componentes/DashboarCliente/DashClientePerfil.jsx";
import DashBoarAdminHabitaciones from "./Componentes/DashBoarAdminHabitaciones/DashBoarAdminHabitaciones.jsx";
import Contactenos from "./Componentes/Contactenos/Contactenos.jsx";
import LoginCliente from "./Componentes/LoginCliente/LoginCliente";
import RecuperarContraseña from "./Componentes/RecuperarContraseña/RecuperarContraseña.jsx";
import DetailHabitacionesComponent from "../src/Componentes/DetailHabitaciones/DetailHabitaciones.jsx";
import DashBoarAdminReservas from "./Componentes/DashboardAdminReservas/DashBoarAdminReservas.jsx";
import DashBoarAdminUsuarios from "./Componentes/DashBoardAdminUsuarios/DashBoarAdminReservas.jsx";
import ResponseMP from "./Componentes/respuestademercadoPago/ResponseMP.jsx";
import PagoExitoso from "./Componentes/RespuestaMP/Pago_Exitoso.jsx";
import PagoPendiente from "./Componentes/RespuestaMP/Pago_Pendiente.jsx";
import PagoRechazado from "./Componentes/RespuestaMP/Pago-Rechazado.jsx";
import AdminComentarios from "./Componentes/DashboardAdminComentarios/AdminComentarios.jsx";
import RecuperarUsuarioEliminado from "./Componentes/RecuperarUsuarioEliminado/RecuperarUsuarioEliminado.jsx";
import GraficosAdmin from "./Componentes/DashBoarAdmin/DashBoarAdmin.jsx";
// Esta linea de codigo hace que por default todos los requerimientos en axios se hagan a esta ruta en el back
// Luego nos va a servir para hacer el Deploy del front

//axios.defaults.baseURL = "http://localhost:3001/"; // comentarlo cuando lo suba haga el marge con
axios.defaults.baseURL = "https://serenahotel.up.railway.app/";

const App = () => {
  return (
    <>
      <Routes>
        {/* Rutas de la Navbar Home y Creacion de Comentarios*/}
        <Route path="/" element={<LandingPage />} />
        <Route
          path="/habitacion/:id"
          element={<DetailHabitacionesComponent />}
        />
        <Route path="/habitaciones" element={<Habitaciones />} />

        <Route path="/acercadeserena" element={<AcercaDeSerena />} />
        <Route path="/contactenos" element={<Contactenos />} />

        {/* Rutas de Logeo y Registrarse */}
        <Route path="/logearse" element={<LoginCliente />} />
        <Route path="/registrarse" element={<CreateUsuario />} />
        <Route path="/recuperar-contraseña" element={<RecuperarContraseña />} />
        <Route
          path="/recuperar-usuario"
          element={<RecuperarUsuarioEliminado />}
        />

        {/* Rutas Dashboard Administrador */}
        <Route path="/admin-reservas" element={<DashBoarAdminReservas />} />
        <Route path="/admin-usuarios" element={<DashBoarAdminUsuarios />} />
        <Route
          path="/admin-habitaciones"
          element={<DashBoarAdminHabitaciones />}
        />
        <Route path="/admin-comentarios" element={<AdminComentarios />} />
        <Route path="/admin-finanzas" element={<GraficosAdmin />} />

        {/* Rutas Dashboard Usuario */}
        <Route path="/clienteReservas" element={<DashBoardClienteReservas />} />
        <Route path="/clientePerfil" element={<DashBoardClientePerfil />} />
        <Route path="/pasareladePago" element={<PasareladePago />} />
        <Route path="/comentar" element={<CreateComentPage />} />

        {/*Ruta mercadopago caso de exito fallo o pendiente */}
        <Route path="/mercadopago" element={<ResponseMP />} />
        <Route path="/pago-exitoso" element={<PagoExitoso />} />
        <Route path="/pago-pendiente" element={<PagoPendiente />} />
        <Route path="/pago-rechazado" element={<PagoRechazado />} />

        {/* Ruta 404 */}
        <Route path="*" element={<Error404 />} />
      </Routes>
    </>
  );
};

export default App;
