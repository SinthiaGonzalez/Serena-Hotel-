import { postUsuario } from "../../redux/actions/actions";
import NavBarAdmin from "../NavBarAdmin/NavBarAdmin";
import UpdateHabitacion from "../updateHabitacion/updateHabitacion";

const DashBoarAdminUpdate = () => {
  return (
    <>
      <NavBarAdmin />
      <UpdateHabitacion/>
    </>
  );
};
export default DashBoarAdminUpdate; 