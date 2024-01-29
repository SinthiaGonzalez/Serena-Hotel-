import { initMercadoPago, Wallet } from "@mercadopago/sdk-react";
initMercadoPago("TEST-2b768ecd-5730-478d-a83c-0dd708098ca3", {locale: "es-AR"});

const BotonMercadoPago = (preferenceIdMP) => {
  const {id} =preferenceIdMP
const idpref =id.id
if(!idpref){
  return null
}else{
  return (
    <div>
      <Wallet
        initialization={{ preferenceId:idpref, locale: "es-AR" }}

      />
    </div>
  );
}
};
export default BotonMercadoPago;
