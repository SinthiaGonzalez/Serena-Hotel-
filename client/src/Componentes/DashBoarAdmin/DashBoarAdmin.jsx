import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import CreateHabitacion from "../createHabitaciones/createHabitaciones";
import GraficosAdmin from "./graficosAdmin";

const DashBoarAdmin = () => {
  return (
    <>
      <NavBarAdmin />
      <CreateHabitacion/>
      <GraficosAdmin/>
    </>
  );
};
export default DashBoarAdmin;
