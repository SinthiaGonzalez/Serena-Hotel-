import{ useSelector} from 'react-redux'
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'
initMercadoPago("TEST-2b768ecd-5730-478d-a83c-0dd708098ca3");
const BotonMercadoPago = () => {
    const preferenceIdMP = useSelector(state => state. preferenceIdMP)
return (
    <div>
        <Wallet  initialization={{ preferenceId:  preferenceIdMP.id, locale: "es-AR", }} />
    </div>
);
};
export default BotonMercadoPago;