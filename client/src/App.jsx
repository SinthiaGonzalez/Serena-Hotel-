import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import ComentPage from "./Componentes/comentpage/comentpage.jsx"
import CreateComentPage from "./Componentes/CreateComentario/CreateComentario.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/comentarios" element={< ComentPage />} />
        <Route path="/comentar" element={< CreateComentPage />} />
      </Routes>
    </>
  );
};

export default App;
