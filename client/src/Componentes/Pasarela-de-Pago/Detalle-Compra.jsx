import AddShoppingCart from "../cardCarrito/cardAñadirCarrito";
import { useSelector,useDispatch } from "react-redux";
import {createPreferenceMercadopagoId} from '../../redux/actions/actions'
import BotonMercadoPago from "../Boton-MercadoPago/BotonMP";


const DetalledelaCompra = () => {
const  carrito = useSelector(state => state.carrito)
const idmp = useSelector(state => state.preferenceIdMP)
const subtotal = carrito.reduce((total, producto) => total + producto.precio, 0);
const iva = subtotal * 0.21;
const total = subtotal + iva;
const dispatch = useDispatch()

const handlerpostMP = () => {
    dispatch(
      createPreferenceMercadopagoId({
        title: 'Serena Hotel',
        price: total,
        quantity: 1,
        picture_url: 'https://picsum.photos/200',
      })
    );
  };

    return (
        <div className="m-4 w-1/3 text text-negro bg-white rounded-md">
            <h1>Detalles de la compra</h1>
            <div className="m-4 h-1/2 overflow-y-auto gap-4">
                <div className="m-2">
                    <AddShoppingCart />
                </div>
            </div>
            <div className="m-4">
                <div className="border-b-2 border-negro flex space-x-48 mb-4">
                    <h2>Subtotal</h2>
                    <h2>${subtotal}</h2>
                </div>
                <div className="border-b-2 border-negro flex space-x-44 mb-4">
                    <h3>Impuestos 21% Iva</h3>
                    <h3>${iva}</h3>
                </div>
                <div className="flex space-x-52 mb-4">
                    <h2>Total</h2>
                    <h2>${total}</h2>
                </div>
                {idmp?<button className="bg-naranja rounded-md w-full h-8 text-white" onClick={handlerpostMP}>Pagar</button>:<BotonMercadoPago/>}  
                <BotonMercadoPago/> 
            </div>
        </div>
    );
};

export default DetalledelaCompra;