import NavBarHome from "../NavBarHome/NavBarHome";
import ShoppingCartCard1 from "../cardCarrito/Card-Shop-Cart";
import ShoppingCartCard from "../cardCarrito/CardCarrito";
import GaleriaDeFotos from "../GaleriaDeFotos/GaleriaDeFotos"
import Footer from "../Footer/Footer";
const LandingPage = () => {
  return (
    <>
      <NavBarHome />
      <ShoppingCartCard />
      <ShoppingCartCard1 />
      <GaleriaDeFotos />
      <Footer />
    </>
  );
};
export default LandingPage;
