import DetalledelaCompra from "./Detalle-Compra";
import NavBarHome from "../NavBarHome/NavBarHome";
import AddCardDetalleCompra from "../CardDetalleCompra/CardAñadirDetalle";

const PasareladePago = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NavBarHome />
      <div className="flex-col lg:flex-1 lg:flex lg:flex-row bg-blanco">
        <div className="m-4 lg:w-2/3 bg-verde rounded-md py-2 lg:py-0">
          <h1 className="text-4xl text-blanco text-center text-inter font-bold my-10 lg:my-16">
            DETALLE DE LA RESERVA
          </h1>
          <div className=" w-full overflow-y-auto gap-4">
            <div className="w-full px-16 justify-center">
              <AddCardDetalleCompra />
            </div>
          </div>
        </div>
        <DetalledelaCompra />
      </div>
    </div>
  );
};

export default PasareladePago;
