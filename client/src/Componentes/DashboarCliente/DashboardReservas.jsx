import NavBarCliente from "../NavBarCliente/NavBarCliente";
import Perfilusuario2 from "./PerfilUsuario2";
import { useVerificarToken } from "../AutenticadorToken/autenticadorToken";

const DashBoardClienteReservas = () => {
  // useVerificarToken();
  
  return (
    <>
      <NavBarCliente />
      <Perfilusuario2 />
    </>
  );
};

export default DashBoardClienteReservas;
