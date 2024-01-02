import AddShoppingCart from "../cardCarrito/cardAñadirCarrito";
const DetalledelaCompra = () => {
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
                    <h2>$589</h2>
                </div>
                <div className="border-b-2 border-negro flex space-x-44 mb-4">
                    <h3>Impuestos</h3>
                    <h3>$0</h3>
                </div>
                <div className="flex space-x-52 mb-4">
                    <h2>Total</h2>
                    <h2>$589</h2>
                </div>

                <button className="bg-naranja rounded-md w-full h-8 text-white">Pagar</button>
            </div>
        </div>
    );
};

export default DetalledelaCompra;