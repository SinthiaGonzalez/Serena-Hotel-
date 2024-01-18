import CrearHabitacion from "../CrearHabitaciones/CrearHabitaciones";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";
const DashBoarAdminHabitaciones = () => {
  useVerificarToken();
  return (
    <>
      <NavBarAdmin />
      <CrearHabitacion />
    </>
  );
};
export default DashBoarAdminHabitaciones;
