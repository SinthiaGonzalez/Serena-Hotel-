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
import Contactenos from "../Contactenos/Contactenos";
import ScrollToTop from "../../ScrollToTop";

const LandingPage = () => {
  return (
    <>
      <ScrollToTop />
      <Home id="home" />
      <Experiencias id="experiencias" />
      <SobreSerenaLanding id="sobreSerena" />
      <BarraInformacion id="barraInformacion" />
      <Servicios id="servicios" />
      <ImagenSeparadoraConBoton id="imagenSeparadora" />
      <CardsHome id="cardsHome" />
      <ShoppingCartCard1 id="shoppingCart" />
      <ComentPage id="comentPage" />
      <GaleriaDeFotos id="galeriaDeFotos" />
      {/* <Contactenos id="contactenos" /> */}
      <Footer />
    </>
  );
};
export default LandingPage;
