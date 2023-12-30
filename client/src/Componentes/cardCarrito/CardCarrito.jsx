import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';
import { initMercadoPago, Wallet } from '@mercadopago/sdk-react'

initMercadoPago("TEST-2b768ecd-5730-478d-a83c-0dd708098ca3");
import createPreference from './PostPreferenceMercadopago';
import { useState } from 'react';


const ShoppingCartCard = () => {
    const [preferenceid, setpreferenceid] = useState(null);
    const handleBuy = async () => {
        const id = await createPreference();
        if (id) {
            setpreferenceid(id);
        }
    };

    let name = "Serena Hotel";
    let price = "1000";
    let image = "https://picsum.photos/200";
    return (
        <div className="max-w-md mx-auto bg-naranja rounded-md overflow-hidden shadow-md flex">
            <img src={image} alt={name} className="w-1/3 h-1/2 object-cover rounded-md ml-2 mt-2 mb-2" />
            <div className='w-200'>
            <h3 className="text-xl font-semibold mb-2 text-withe">{name}</h3>
            </div>
            <div className="p-4 w-2/3">
            <p className="text-white-700">${price}</p>
                <button onClick={handleBuy}>Comprar</button>
                <div>
                {preferenceid && <Wallet  initialization={{ preferenceId: preferenceid, locale: "es-AR", }} />}
                </div>
               

             
                <button
                    className="bg-red-500 text-white p-2 mt-2 hover:bg-red-600 transition duration-300"
                    onClick={() => onDelete(product)}>
                    <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                </button>
            </div>
        </div>
    );
};

export default ShoppingCartCard;