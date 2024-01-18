import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import CreateHabitacion from "../CrearHabitaciones/CrearHabitaciones";
import GraficosAdmin from "./graficosAdmin";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";
const DashBoarAdmin = () => {
  useVerificarToken();
  return (
    <>
      <NavBarAdmin />
      <CreateHabitacion />
      <GraficosAdmin />
    </>
  );
};
export default DashBoarAdmin;
