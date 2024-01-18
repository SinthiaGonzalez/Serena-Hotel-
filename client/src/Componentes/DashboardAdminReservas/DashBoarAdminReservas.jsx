import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import AdminReservasTabla from "./AdminReservasTabla";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";

const DashBoarAdminReservas = () => {
  // useVerificarToken();
  return (
    <>
      <NavBarAdmin />
      <AdminReservasTabla/>
    </>
  );
};
export default DashBoarAdminReservas;
