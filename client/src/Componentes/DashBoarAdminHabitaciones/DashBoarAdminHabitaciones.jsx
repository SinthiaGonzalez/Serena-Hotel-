import CrearHabitacion from "../CrearHabitaciones/CrearHabitaciones";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";
import DashBoardAdminUsuarios from "../DashBoardAdminUsuarios/AdminUsuariosTabla";
import UpdateHabitacion from "../updateHabitacion/updateHabitacion";
const DashBoarAdminHabitaciones = () => {
  // useVerificarToken();
  return (
    <>
      <NavBarAdmin />
      <CrearHabitacion />
      <UpdateHabitacion/>
    </>
  );
};
export default DashBoarAdminHabitaciones;
