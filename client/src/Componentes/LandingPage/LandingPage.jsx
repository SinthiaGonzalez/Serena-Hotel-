import NavBarHome from "../NavBarHome/NavBarHome";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos";
import Footer from "../Footer/Footer";
import Experiencias from "../Experiencias/Experiencias";
import SobreSerenaLanding from "../SobreSerenaLanding/SobreSerenaLanding";
import Servicios from "../Servicios/Servicios";
import BarraInformacion from "../BarraInformacion/BarraInformacion";
const LandingPage = () => {
  return (
    <>
      <NavBarHome />
      <Experiencias />
      <SobreSerenaLanding />
      <BarraInformacion />
      <Servicios />
      <GaleriaDeFotos />
      <Footer />
    </>
  );
};
export default LandingPage;
