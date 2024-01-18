import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import AdminUsuariosTabla from "./AdminUsuariosTabla";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";

const DashBoarAdminUsuarios = () => {
  // useVerificarToken();
  
  return (
    <>
      <NavBarAdmin />
      <AdminUsuariosTabla />
    </>
  );
};
export default DashBoarAdminUsuarios;
