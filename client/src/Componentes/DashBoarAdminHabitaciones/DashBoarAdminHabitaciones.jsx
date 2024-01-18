import CrearHabitacion from "../CrearHabitaciones/CrearHabitaciones";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";
import DashBoardAdminUsuarios from "../DashBoardAdminUsuarios/AdminUsuariosTabla";
const DashBoarAdminHabitaciones = () => {
  // useVerificarToken();
  return (
    <>
      <NavBarAdmin />
      <CrearHabitacion />
    </>
  );
};
export default DashBoarAdminHabitaciones;
