import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons';

const ShoppingCartCard1 = () => {
    let name = "Dormitorio ejecutivo ";
    let price = "1000";
    let image = "https://picsum.photos/200";

    return (
        <div className="max-w-md mx-auto bg-naranja rounded-md overflow-hidden shadow-md flex">
            <div style={{ width: '70%' }} className='flex items-center space-x-4'>
                <img src={image} alt={name} className="w-2/3 h-20 ml-3 object-cover rounded-md" />
                <h5 className="mb-2 text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">
                    {name}
                </h5>
            </div>

            <div className="p-4 flex flex-col items-end justify-between w-1/3">
                <p className="text-white-700 ">${price}</p>
                <div>
                    <button
                        className="bg-red-500 text-white p-2 mt-2 hover:bg-red-600 transition duration-300"
                        onClick={() => onDelete(product)}>
                        <FontAwesomeIcon icon={faTrashAlt} className="mr-2" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ShoppingCartCard1;
