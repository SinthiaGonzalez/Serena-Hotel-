import NavBarHome from "../NavBarHome/NavBarHome";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
import Footer from "../Footer/Footer";
const LandingPage = () => {
  return (
    <>
      <NavBarHome />
      {/* <Error404/> */}
      <GaleriaDeFotos/>
      <Footer />
    </>
  );
};
export default LandingPage;
