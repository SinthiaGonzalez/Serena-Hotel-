import NavBarHome from "../NavBarHome/NavBarHome";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import NavbarClient from "../NavbarClient/NavbarClient";
const LandingPage = () => {
  return (
    <>
      <NavBarHome />
      <NavbarClient />
      <NavBarAdmin />
    </>
  );
};
export default LandingPage;
