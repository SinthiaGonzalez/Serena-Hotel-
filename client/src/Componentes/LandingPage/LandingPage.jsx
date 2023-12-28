import NavBarHome from "../NavBarHome/NavBarHome";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
import Footer from "../Footer/Footer";
import Experiencias from "../Experiencias/Experiencias";
import SobreSerenaLanding from "../SobreSerenaLanding/SobreSerenaLanding";
import Servicios from "../Servicios/Servicios";
const LandingPage = () => {
  return (
    <>
      <NavBarHome />
      {/* <Error404/> */}
      <Experiencias/>
      <Servicios/>
      <SobreSerenaLanding/>
      <GaleriaDeFotos/>
      <Footer />
    </>
  );
};
export default LandingPage;
