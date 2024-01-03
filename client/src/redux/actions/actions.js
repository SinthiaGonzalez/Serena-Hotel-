import axios from "axios";

export function getHabitaciones() {
  console.log("estoy en actions")
  return async function(dispatch) {
    try {
      const habitaciones = await axios.get('/habitaciones');
      return dispatch({
        type: 'GET_HABITACIONES',
        payload: habitaciones.data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// creamos la action que crea la preferenciaId de mercadopago
export function createPreferenceMercadopagoId(data) {
  return async function(dispatch) {
    try {
      const preference = await axios.post("mercadopago/create_preference", data);
      return dispatch({
        type: 'CREATE_PREFERENCE_MERCADOPAGO_ID',
        payload: preference.data
      });
    } catch (error) {
      console.log(error);
    }
  };
}

// creamos la action añade las habitaciones al carrito de compras
export function addToCart(id) {
  return {
    type: "ADD_TO_CART",
    payload: id
  };
}

// creamos la action que elimina del acarrito las habitaciones seleccionadas