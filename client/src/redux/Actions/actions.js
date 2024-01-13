import axios from "axios";

export function getHabitaciones() {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get("/habitaciones");
      return dispatch({
        type: "GET_HABITACIONES",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHabitacionesBusqueda(buscar) {
  return {
    type: "GET_HABITACIONES_BUSQUEDA",
    payload: buscar,
  };
}

// creamos la action que crea la preferenciaId de mercadopago
export function createPreferenceMercadopagoId() {
  return async function (dispatch) {
    try {
      const preference = await axios.post(
        "mercadopago/create_preference",
        data
      );
      return dispatch({
        type: "CREATE_PREFERENCE_MERCADOPAGO_ID",
        payload: preference.data,
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
    payload: id,
  };
}

// creamos la action que elimina del acarrito las habitaciones

export function postComent(state) {
  return async function (dispatch) {
    try {
      await axios.post("/comentar", state);
      alert("se añadió el comentario exitosamente");
    } catch (error) {
      alert(error);
    }
  };
}
export function postUsuario(state) {
  return async function (dispatch) {
    try {
      await axios.post("/usuario", state);
      console.log("log de action", state);
      alert("se creo el usuario exitosamente");
    } catch (error) {
      alert(error);
    }
  };
}

export function getAllcomentarios() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/comentarios");
      if (response.status === 200) {
        dispatch({
          type: "GET_COMENTARIOS",
          payload: response.data,
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
      console.log("log de actions", response);
      if (response.status === 200) {
        dispatch({
          type: "ELIMINAR_COMENTARIO",
          payload: id,
        });
        alert("Comentario eliminado exitosamente");
      }
    } catch (error) {
      alert(error.message);
    }
  };
}

export function enviarConsulta(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/contactenos", formData);
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
    }
  };
}

export function crearHabitacion(habitacionData) {
  console.log({ habitacionData });
  return async (dispatch) => {
    try {
      const response = await axios.post(
        "/post/habitaciones",
        habitacionData
      );
      console.log(response.data);
      if (response.data=== "La habitacion ya existe") alert(response.data);
      else alert("Creado con exito");
      dispatch({
        type: "CREAR_HABITACION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      alert(error.message);
    }
  };
}

export function getHabitacionesNombre({
  direccion,
  filtros,
  tipoOrdenamiento,
}) {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${tipoOrdenamiento}&direccion=${direccion}&filtroPersonas=${filtros}`
      );
      console.log("Aquí está la respuesta de la API:", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES_ORDENAMIENTOS",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHabitacionesPrecio({
  direccion,
  filtros,
  tipoOrdenamiento,
}) {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${tipoOrdenamiento}&direccion=${direccion}&filtroPersonas=${filtros}`
      );
      console.log("Aquí está la respuesta de la API:", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES_FILTROS",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}
export function getHabitacionesFiltrosPersonas({
  ordenado,
  direccion,
  personas,
}) {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${ordenado}&direccion=${direccion}&filtroPersonas=${personas}`
      );
      console.log("filtro personas:", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES_FILTROS_PERSONAS",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const getReservas = ({ fecha_entrada, fecha_salida }) => {
  return async function (dispatch) {
    try {
      const reservas = await axios.get(
        `/reservas?fecha_entrada=${fecha_entrada}&fecha_salida=${fecha_salida}`
      );
      console.log("reservas:", reservas.data);
      return dispatch({
        type: "GET_RESERVAS",
        payload: reservas.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export function updateHabitacion (habitacionData) {
  console.log({habitacionData})
  return async (dispatch) => {
      try {

          const response = await axios.put('/update/habitaciones', habitacionData)

          console.log(response.data);
          if (response.data=== "No existe una habitacion con ese nombre") alert(response.data);
          else alert('Habitacion actualizada con exito')
          dispatch ({
              type:"UPDATE_HABITACION",
              payload: response.data,
          });
      } catch (error) {
          console.log(error);
          alert(error.message);
          
      }
  }
}

export function getHabitacionesbackup() {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get("/habitaciones");
      return dispatch({
        type: "GET_HABITACIONES_BACKUP",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getDevs(){
  return async function(dispatch){ 
      try{
          const response = await axios("/desarrolladores");   
          console.log("linea 135",response.data)       
          return dispatch({
              type: "GET_DEVS",      
              payload: response.data, 
          });      
      }catch(error){
          alert('Hubo un problema con el servidor. Comuniquese con el Administrador - Error: ' + error)
          return 
      }
  }  
}  

// funciona para eliminar habitacion por id
export function deleteHabitacion(id) {
  console.log({ id });
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/habitaciones/${id}`);
     
      if (response.status === 200) {
        dispatch({
          type: "DELETE_HABITACION",
          payload: id,
        });
        alert("Habitacion eliminada exitosamente");
      }
    } catch (error) {
      alert(error.message);
    }
  };
}


