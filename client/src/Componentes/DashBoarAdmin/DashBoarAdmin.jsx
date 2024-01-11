import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import CreateHabitacion from "../CrearHabitaciones/CrearHabitaciones";
import GraficosAdmin from "./graficosAdmin";

const DashBoarAdmin = () => {
  return (
    <>
      <NavBarAdmin />
      <CreateHabitacion />
      <GraficosAdmin />
    </>
  );
};
export default DashBoarAdmin;
