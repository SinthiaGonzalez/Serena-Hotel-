import Footer from "../Footer/Footer";
import NavBarHome from "../NavBarHome/NavBarHome";
import SobreNosotros from "../SobreNosotros/SobreNosotros";
import RenderCardDesarrolladores from "../Card-SobreNotroso/renderCardDesarrolladores";

const AcercaDeSerena = () => {
    return (
      <>
        <NavBarHome />
        <RenderCardDesarrolladores/>
        <SobreNosotros/>
        <Footer/>
      </>
    );
  };
  export default AcercaDeSerena;