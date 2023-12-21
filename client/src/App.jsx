import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<LandingPage />} />
      </Routes>
    </>
  );
};

export default App;
