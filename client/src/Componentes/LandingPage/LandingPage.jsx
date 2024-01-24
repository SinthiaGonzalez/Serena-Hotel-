import ShoppingCartCard1 from "../cardCarrito/Card-Shop-Cart";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos";
import Footer from "../Footer/Footer";
import Experiencias from "../Experiencias/Experiencias";
import SobreSerenaLanding from "../SobreSerenaLanding/SobreSerenaLanding";
import Servicios from "../Servicios/Servicios";
import BarraInformacion from "../BarraInformacion/BarraInformacion";
import Home from "../Home/Home";
import ComentPage from "../comentpage/comentpage";
import CardsHome from "../CardsHome/CardsHome";
import ImagenSeparadoraConBoton from "../ImagenSeparadoraConBoton/ImagenSeparadoraConBoton";
import LoginCliente from "../LoginCliente/LoginCliente";
import ScrollToTop from "../../ScrollToTop";

const LandingPage = () => {

  return (
    <>
      <ScrollToTop />
      <Home id="home" />
      {/* <LoginCliente id="loginCliente" /> */}
      <Experiencias />
      <SobreSerenaLanding />
      <BarraInformacion />
      <Servicios />
      <ImagenSeparadoraConBoton />
      <CardsHome />
      <ShoppingCartCard1 />
      <ComentPage />
      <GaleriaDeFotos />
      {/* <Contactenos id="contactenos" /> */}
      <Footer />
    </>
  );
};
export default LandingPage;
