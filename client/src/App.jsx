import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import Error404 from "./Componentes/Error 404/Error404.jsx";
import { Route, Routes } from "react-router-dom";
import Habitaciones from "./Componentes/Habitaciones/Habitaciones.jsx";
import PasareladePago from "./Componentes/Pasarela-de-Pago/PasareladePago.jsx";

// Esta linea de codigo hace que por default todos los requerimientos en axios se hagan a esta ruta en el back
// Luego nos va a servir para hacer el Deploy del front
import axios from "axios";
import AcercaDeSerena from "./Componentes/AcercaDeSerena/AcercaDeSerena.jsx";
import DashBoarAdmin from "./Componentes/DashBoarAdmin/DashBoarAdmin.jsx";
import DashBoarCliente from "./Componentes/DashboarCliente/DashCliente.jsx";
axios.defaults.baseURL = "http://localhost:3001/";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
        <Route path="/acercadeserena" element={<AcercaDeSerena />} />
        {/* La siguiente ruta captura cualquier otra ruta y muestra el componente 404 */}
        <Route path="*" element={<Error404 />} />
        <Route path="/admin" element={<DashBoarAdmin />} />
        <Route path="/cliente" element={<DashBoarCliente />} />
        <Route path="/pasareladePago" element={<PasareladePago />} />
      </Routes>
    </>
  );
};

export default App;
