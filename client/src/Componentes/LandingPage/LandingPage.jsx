import NavBarHome from "../NavBarHome/NavBarHome";
import ComentPage from "../comentpage/comentpage";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
import Footer from "../Footer/Footer";
const LandingPage = () => {
  return (
    <>
      <NavBarHome />
      {/* <Error404/> */}
      <ComentPage/>
      <GaleriaDeFotos/>
      <Footer />
    </>
  );
};
export default LandingPage;
