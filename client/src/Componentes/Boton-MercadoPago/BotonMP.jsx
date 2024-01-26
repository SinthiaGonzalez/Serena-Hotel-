import { useSelector } from "react-redux";
import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("TEST-2b768ecd-5730-478d-a83c-0dd708098ca3");

const BotonMercadoPago = () => {
  const preferenceIdMP = useSelector((state) => state.preferenceIdMP);

  return (
    <div className="bg-naranja w-2/3 h-1/3">
      <p>Boton</p>
      <div className="opacity-0 z-10 ">
        <Wallet
          initialization={{ preferenceId: preferenceIdMP.id, locale: "es-AR" }}
        />
      </div>
    </div>
  );
};
export default BotonMercadoPago;
