import "./App.css";
import LandingPage from "./Componentes/LandingPage/LandingPage.jsx";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <>
      <Route>
        <Routes path="/" element={<LandingPage />} />
      </Route>
    </>
  );
};

export default App;
