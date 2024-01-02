import NavBarHome from "../NavBarHome/NavBarHome";
import ShoppingCartCard1 from "../cardCarrito/Card-Shop-Cart";
import ShoppingCartCard from "../cardCarrito/CardCarrito";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
import Footer from "../Footer/Footer";
import Experiencias from "../Experiencias/Experiencias";
import SobreSerenaLanding from "../SobreSerenaLanding/SobreSerenaLanding";
import Servicios from "../Servicios/Servicios";
import BarraInformacion from "../BarraInformacion/BarraInformacion";
import Home from "../Home/Home";
import CardsHome from "../CardsHome/CardsHome";
const LandingPage = () => {
  return (
    <>
      <Home />
      <Experiencias />
      <SobreSerenaLanding />
      <BarraInformacion />
      <Servicios />
      <CardsHome />
      <GaleriaDeFotos />
      <NavBarHome />
      <ShoppingCartCard />
      <ShoppingCartCard1 />
      <GaleriaDeFotos />
      <Footer />
    </>
  );
};
export default LandingPage;
