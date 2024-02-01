import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-6f2bfd44-6784-4df7-ba8f-29a4f9fe61c4", {
  locale: "es-AR",
});

const BotonMercadoPago = (preferenceIdMP) => {
  const { id } = preferenceIdMP;
  const idpref = id.id;
  if (!idpref) {
    return null;
  } else {
    return (
      <div>
        <Wallet initialization={{ preferenceId: idpref, locale: "es-AR" }} />
      </div>
    );
  }
};
export default BotonMercadoPago;
