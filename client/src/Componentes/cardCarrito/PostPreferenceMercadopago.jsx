import axios from "axios";
// aqui creamso la function que manda los detalle sdel prodycto, modificar mas adelante para que pueda recibir los datos del producto
const createPreference = async () => {
  try {
    const response = await axios.post("http://localhost:3001/mercadopago/create_preference", {
      title: "Serena Hotel",
      price: 1000,
      quantity: 1,
      picture_url:"https://picsum.photos/200"
    });

    const { id } = response.data;
    return id;
  } catch (error) {
    console.error(error);
  }
};

export default createPreference;
