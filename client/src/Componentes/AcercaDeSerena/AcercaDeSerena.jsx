import Footer from "../Footer/Footer";
import SobreNosotros from "../SobreNosotros/SobreNosotros";
import RenderCardDesarrolladores from "../Card-SobreNotroso/renderCardDesarrolladores";
import HeaderAcercaDeSerena from "../HeaderAcercaDeSerena/HeaderAcercaDeSerena";
import BarraSobreNosotros from "../BarraSobreNosotros/BarraSobreNosotros";
import ScrollToTop from "../../ScrollToTop";

const AcercaDeSerena = () => {
    return (
      <>
        <ScrollToTop/>
        <HeaderAcercaDeSerena/>
        <RenderCardDesarrolladores/>
        <BarraSobreNosotros/>
        <SobreNosotros/>
        <Footer/>
      </>
    );
  };
  export default AcercaDeSerena;