import NavBarHome from "../NavBarHome/NavBarHome";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
import Footer from "../Footer/Footer";
import Experiencias from "../Experiencias/Experiencias";
import SobreSerenaLanding from "../SobreSerenaLanding/SobreSerenaLanding";
const LandingPage = () => {
  return (
    <>
      <NavBarHome />
      {/* <Error404/> */}
      <Experiencias/>
      <SobreSerenaLanding/>
      <GaleriaDeFotos/>
      <Footer />
    </>
  );
};
export default LandingPage;
