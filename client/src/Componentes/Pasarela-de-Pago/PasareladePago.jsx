import DetalledelaCompra from "./Detalle-Compra";
import NavBarHome from "../NavBarHome/NavBarHome";

const PasareladePago = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarHome />
      <div className="flex-1 flex flex-row bg-verde">
        <div className="m-4 w-2/3 bg-white rounded-md">
          <h1 className="text-negro">fechas sugerencias detalles</h1>
        </div>
        <DetalledelaCompra />
      </div>
    </div>
  );
};

export default PasareladePago;
