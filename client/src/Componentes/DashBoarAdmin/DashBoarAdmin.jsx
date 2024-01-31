import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import GraficosAdmin from "./graficosAdmin";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";
const DashBoarAdmin = () => {
  useVerificarToken();
  return (
    <>

      <NavBarAdmin />
      <div>
      <GraficosAdmin />
      </div>
      
     
    </>
  );
};
export default DashBoarAdmin;
