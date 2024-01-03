import axios from 'axios';

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

export function postComent(state) {
  return async function (dispatch) {
    try {
      await axios.post("/comentar", state);
      alert('se añadió el comentario exitosamente');
    } catch (error) {
      alert(error);
    }
  }
}
export function postUsuario(state) {
  return async function (dispatch) {
    try {
      await axios.post("/usuario", state);
      console.log('log de action', state);
      alert('se creo el usuario exitosamente');
    } catch (error) {
      alert(error);
    }
  }
}


export function getAllcomentarios() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/comentarios");
      if (response.status === 200) {
        dispatch({
          type: "GET_COMENTARIOS",
          payload: response.data
        });
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

export function eliminarComentario(id) {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/comentario/${id}`);
      console.log('log de actions', response);
      if (response.status === 200) {
        dispatch({
          type: "ELIMINAR_COMENTARIO",
          payload: id,
        });
        alert('Comentario eliminado exitosamente');
      }
    } catch (error) {
      alert(error.message);
    }
  };
}
