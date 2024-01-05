
import ShoppingCartCard1 from "../cardCarrito/Card-Shop-Cart";
import ShoppingCartCard from "../cardCarrito/CardCarrito";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
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
const LandingPage = () => {
  return (
    <>

      <Home />
      <Experiencias />
      <SobreSerenaLanding />
      <BarraInformacion />
      <Servicios />
      <ImagenSeparadoraConBoton/>
      <CardsHome />
      <ShoppingCartCard />
      <ShoppingCartCard1 />
      <ComentPage/>
      <GaleriaDeFotos />
      <Contactenos/>
      <Footer />
    </>
  );
};
export default LandingPage;
