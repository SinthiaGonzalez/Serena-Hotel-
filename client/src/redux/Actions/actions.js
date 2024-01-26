import axios from "axios";
import Swal from "sweetalert2";

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
export function createPreferenceMercadopagoId(data) {
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
      Swal.fire("Se agrego el comentario exitosamente!", "", "success");
    } catch (error) {
      if (error.response && error.response.status === 404) {
        Swal.fire("Solo se permite un comentario por persona", "", "warning");
      } else {
        Swal.fire(error.message, "", "error");
    }
  };
}
}
export function postUsuario(state) {
  return async function (dispatch) {
    try {
      await axios.post("/usuario", state);
      console.log("log de action", state);
      Swal.fire("Usuario creado exitosamente!", "", "success");
    } catch (error) {
      Swal.fire(error.message, "", "error");
    }
  };
}

export function postUsuarioGoogle(data) {
  return async function (dispatch) {
    try {
      // Intentar crear o actualizar el usuario en la ruta "/usuario"
      const response = await axios.post("/usuario", data);
      if (response.status === 200 || response.status === 201) {
        const response2 = await axios.post("/login", data);

        const { token, userId, isAdmin, imagen, name } = response2.data;
        localStorage.setItem("name", JSON.stringify(name));
        localStorage.setItem("token", JSON.stringify(token));
        localStorage.setItem("userId", JSON.stringify(userId));
        localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
        localStorage.setItem("imagen", JSON.stringify(imagen));
        console.log("Respuesta del servidor con google XX:", response2.data);    
        console.log("Respuesta del servidor con google response.data.isAdmin:", response2.data.isAdmin);      
        dispatch({
          type: "POST_USUARIO_GOOGLE",
          payload: response2.data,       
        });
      }
    } catch (error) {
      console.error("Error al crear o actualizar el usuario:", error);
    }
  };
}
export function verificacionLogeoUsuarioAction(infoLogeo) {
  console.log(infoLogeo);
  return async function () {
    try {
      const response = await axios.post("/login", infoLogeo);
      const { token, userId, isAdmin, imagen, name } = response.data;
      localStorage.setItem("token", JSON.stringify(token));
      localStorage.setItem("userId", JSON.stringify(userId));
      localStorage.setItem("name", JSON.stringify(name));
      localStorage.setItem("isAdmin", JSON.stringify(isAdmin));
      localStorage.setItem("imagen", JSON.stringify(imagen));
     
      dispatch({
        type: "POST_USUARIO_NOGOOGLE",
        payload: response.data,
      });
      console.log("Respuesta del servidor manual:", response.data);

    } catch (error) {
      if (error.response && error.response.status === 400) {
        Swal.fire(error.message, "Usuario o contraseña incorrectos", "error");
      }
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
      Swal.fire(error.message, "", "error");
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
        Swal.fire("Comentario eliminado exitosamente!", "", "success");
      }
    } catch (error) {
      Swal.fire(error.message, "", "error");
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

export function envioNotificion(formData) {
  return async function (dispatch) {
    try {
      const response = await axios.post("/notificaciones", formData);
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
      const response = await axios.post("/post/habitaciones", habitacionData);
      console.log(response.data);
      Swal.fire("Habitacion creada exitosamente!", "", "success");
      dispatch({
        type: "CREAR_HABITACION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      Swal.fire(error.message, "", "error");
    }
  };
}

export function getHabitacionesNombre({
  direccion,
  filtrosPersonas,
  filtrosCuarto,
  tipoOrdenamiento,
  checkinDate,
  checkoutDate,
}) {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${tipoOrdenamiento}&direccion=${direccion}&filtroPersonas=${filtrosPersonas}&filtroCuarto=${filtrosCuarto}&fecha_entrada=${checkinDate}&fecha_salida=${checkoutDate}`
      );
      console.log("Aquí está la respuesta de la API:", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES_NOMBRE",
        payload: habitaciones.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function getHabitacionesPrecio({
  direccion,
  filtrosPersonas,
  filtrosCuarto,
  tipoOrdenamiento,
  checkinDate,
  checkoutDate,
}) {
  return async function (dispatch) {
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${tipoOrdenamiento}&direccion=${direccion}&filtroPersonas=${filtrosPersonas}&filtroCuarto=${filtrosCuarto}&fecha_entrada=${checkinDate}&fecha_salida=${checkoutDate}`
      );
      console.log("Aquí está la respuesta de la API:", habitaciones.data);
      return dispatch({
        type: "GET_HABITACIONES_PRECIO",
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
  filtroCuarto,
  checkinDate,
  checkoutDate,
}) {
  return async function (dispatch) {
    console.log(
      "Filtros Personas:",
      ordenado,
      direccion,
      personas,
      filtroCuarto,
      checkinDate,
      checkoutDate
    );
    try {
      const habitaciones = await axios.get(
        `/ordenamientos&filtros?ordenarPor=${ordenado}&direccion=${direccion}&filtroPersonas=${personas}&filtroCuarto=${filtroCuarto}&fecha_entrada=${checkinDate}&fecha_salida=${checkoutDate}`
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

export const getReservas = ({ checkinDate, checkoutDate }) => {
  return async function (dispatch) {
    try {
      const reservas = await axios.get(
        `/reservas?fecha_entrada=${checkinDate}&fecha_salida=${checkoutDate}`
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
export function updateHabitacion(habitacionData) {
  console.log({ habitacionData });
  return async (dispatch) => {
    try {
      const response = await axios.put("/update/habitaciones", habitacionData);

      console.log(response.data);
      Swal.fire("Habitacion editada exitosamente!", "", "success");
      dispatch({
        type: "UPDATE_HABITACION",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      Swal.fire(error.message, "", "error");
    }
  };
}

export function getDevs() {
  return async function (dispatch) {
    try {
      const response = await axios("/desarrolladores");
      console.log("linea 135", response.data);
      return dispatch({
        type: "GET_DEVS",
        payload: response.data,
      });
    } catch (error) {
      Swal.fire(
        error.message,
        "Hubo un problema con el servidor. Comuniquese con el Administrador",
        "error"
      );
      return;
    }
  };
}
export function estadoLogeo(estado) {
  return {
    type: "ESTADO_LOGEO",
    payload: estado,
  };
}
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
        Swal.fire("Habitacion eliminada exitosamente!", "", "success");
      }
    } catch (error) {
      Swal.fire(error.message, "", "error");
    }
  };
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

export function getUsuarios() {
  return async function (dispatch) {
    try {
      const usuarios = await axios.get("/usuarios");
      return dispatch({
        type: "GET_USUARIOS",
        payload: usuarios.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export function updateUsuario(usuarioData, id) {
  return async (dispatch) => {
    try {
      console.log("plis", usuarioData);
      id = usuarioData.id;
      const response = await axios.put(`/update/usuarios/${id}`, usuarioData);
      if (response.data === "No se encontro el usuario")
        Swal.fire(response, "", "error");
      else Swal.fire("Guardados!", "", "success");
      console.log(response.data);
      dispatch({
        type: "UPDATE_USUARIO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
      Swal.fire(error.message, "", "error");
    }
  };
}

export function deleteUsuario(id) {
  console.log({ id });
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/delete/usuarios/${id}`);
      if (response.data === "No se encontro el usuario") {
        Swal.fire("No se encontro el usuario", "", "error");
      } else {
        dispatch({
          type: "DELETE_USUARIO",
          payload: id,
        });
        Swal.fire("Usuario eliminado exitosamente!", "", "success");
      }
    } catch (error) {
      Swal.fire(error.message, "", "error");
    }
  };
}

export function recuperarContraseñaAction(correo) {
  return async function () {
    try {
      const response = await axios.put("/recuperarContrasena", { correo });
      console.log("Respuesta del servidor:", response.data);
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
    }
  };
}

export function getReservas_usuario(usuarioId) {
  console.log("usuarioId action", usuarioId);
  return async function (dispatch) {
    try {
      // URL = "http://localhost:3001/reservas-por-usuario?id=" + usuarioId
      const response = await axios.get("/reservas-por-usuario?id=" + usuarioId);
      console.log("Respuesta del servidor:", response.data);
      dispatch({
        type: "RESERVAS_USUARIO",
        payload: response.data,
      });
      //alert("Reservas del Usuario obtenidas exitosamente");
    } catch (error) {
      // if(error.response.data === "No se encontró ninguna Reserva con el ID de Usuario proporcionado"){
      //   alert(error.response.data);
      // }
      console.log("Error al solicitar las Reservas por Usuario:", error);
      Swal.fire("El usuario no tiene reservas!", "", "error");

      console.log("Error al solicitar las Reservas por Usuario:", error);
    }
  };
}

export function getReservas_Admin(usuarioId) {
  return async function (dispatch) {
    try {
      const response = await axios.get("/reservas-todas");
      console.log("Respuesta del servidor:", response.data);
      dispatch({
        type: "RESERVAS_TODAS_ADMIN",
        payload: response.data,
      });
      //alert("Reservas del Usuario obtenidas exitosamente");
    } catch (error) {
      // Swal.fire("Error al solicitar las Reservas por Usuario", "", "error");
      // console.log("Error al solicitar las Reservas por Usuario:",error);
    }
  };
}
export function verificarToken() {
  return async function (dispatch) {
    try {
      const token = localStorage.getItem("token");

      if (token) {
        dispatch({
          type: "VERIFICARTOKEN",
          payload: true,
        });
      } else {
        dispatch({
          type: "VERIFICARTOKEN",
          payload: false,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };
}
export function DetailHabitaciones(id) {
  return async function (dispatch) {
    try {
      console.log("antes de action", id);
      const response = await axios.get(`/habitaciones/${id}`);
      console.log("logdeaction234", response.data);
      dispatch({
        type: "DETAIL",
        payload: response.data,
      });
    } catch (error) {
      Swal.fire(error.response.data.error, "", "error");
    }
  };
}
export const getCarrito = () => {
  return async function (dispatch) {
    try {
      const id = JSON.parse(localStorage.getItem("userId"));
      const response = await axios.get(`/carrito/${id}`);
      console.log("getCarrito", response.data);
      dispatch({
        type: "GET_CARRITO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const eliminarDelCarrito = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/carrito/${id}`);
      console.log("eliminarDelCarrito", response.data);
      dispatch({
        type: "DELETE_CARRITO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const añadirAlCarrito = (idUser, idHabitacion) => {
  return async function (dispatch) {
    try {
      const data = { idUser, idHabitacion };
      const response = await axios.post(`/carrito`, data);
      console.log("anadirAlCarrito", response.data);
      dispatch({
        type: "AÑADIR_AL_CARRITO",
        payload: response.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export function cambiarEstadoUsuario(id, nuevoEstado) {
  console.log(id, nuevoEstado);
  return async function () {
    try {
      const response = await axios.put("/update/usuarioEstado", {
        id,
        nuevoEstado,
      });
      alert("Cambio de estado de Usuario realizado exitosamente");
      console.log("Respuesta del servidor:", response.data);
      // ver si es necesario dispatch aqui "POST_USUARIO",p/q actualice estado "usuarios"
    } catch (error) {
      console.error("Error al enviar la consulta:", error);
    }
  };
}

export function getUsuarioById(id) {
  return async function (dispatch) {
    try {
      const usuarios = await axios.get(`/usuario/${id}`);
      return dispatch({
        type: "GET_USUARIO_BY_ID",
        payload: usuarios.data,
      });
    } catch (error) {
      console.log(error);
    }
  };
}

export const deleteReservas = (id) => {
  return async function (dispatch) {
    try {
      const response = await axios.delete(`/reservas/delete/${id}`);
      Swal.fire("Reserva eliminada exitosamente!", "", "success");
      dispatch({
        type: "DELETE_RESERVA",
        payload: response.data,
      });
    } catch (error) {
      Swal.fire(error.message, "", "error");
    }
  };
};
export const updateDates = ({ checkinDate, checkoutDate }) => {
  return async function (dispatch) {
    try {
      return dispatch({
        type: "UPDATE_DATES",
        payload: { checkinDate, checkoutDate },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
export const getCheckoutDate = ({ checkinDate, checkoutDate }) => {
  console.log("fechas", checkinDate, checkoutDate);
  return async function (dispatch) {
    console.log("fechas", checkinDate, checkoutDate);
    try {
      return dispatch({
        type: "GET_CHECKOUT",
        payload: { checkinDate, checkoutDate },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
