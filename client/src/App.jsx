import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import { Route, Routes } from "react-router-dom";
import Habitaciones from "./Componentes/Habitaciones/Habitaciones.jsx";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/habitaciones" element={<Habitaciones />} />
      </Routes>
    </>
  );
};

export default App;
