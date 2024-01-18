const initialState = {
  habitaciones: [],
  habitacionesDetail: {},
  habitacionesfiltradas: [],
  string: "",
  usuarios: [],
  preferenceIdMP: [],
  carrito: [],
  comentarios: [],
  AllComentsBackUp: [],
  nuevaHabitacion: [],
  developers: [],
  habitacionActualizada: [],
  estadoDeLogeo: false,
  habitacionBackUp: [],
  reservasUsuario: [],
  token: false,
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HABITACIONES_BUSQUEDA":
      const buscar = action.payload; // string palabra a buscar
      const habitacionFiltrada = state.habitaciones.filter((habitacion) =>
        habitacion.nombre.toLowerCase().includes(buscar)
      );
      console.log("habitacion filtrada", habitacionFiltrada);
      return {
        ...state,
        string: buscar,
        habitacionesfiltradas: habitacionFiltrada,
      };

    case "GET_USUARIOS":
      return {
        ...state,
        usuarios: action.payload,
      };
    case "GET_HABITACIONES":
      return {
        ...state,
        habitaciones: action.payload,
      };
    case "CREATE_PREFERENCE_MERCADOPAGO_ID":
      return {
        ...state,
        preferenceIdMP: action.payload,
      };
    case "ADD_TO_CART":
      const habitacionToAdd = state.habitaciones.find(
        (habitacion) => habitacion.id === action.payload
      );
      if (habitacionToAdd) {
        return {
          ...state,
          carrito: [...state.carrito, habitacionToAdd],
        };
      } else {
        return state;
      }
    case "GET_COMENTARIOS":
      return {
        ...state,
        comentarios: action.payload,
        AllComentsBackUp: action.payload,
      };
    case "ELIMINAR_COMENTARIO":
      const updatedComentarios = state.comentarios.filter(
        (comentario) => comentario.id !== action.payload
      );
      return {
        ...state,
        comentarios: updatedComentarios,
      };

    case "CREAR_HABITACION":
      return {
        ...state,
        nuevaHabitacion: [...state.nuevaHabitacion, action.payload],
        habitaciones: [...state.habitaciones, action.payload],
      };

    case "GET_DEVS":
      return {
        ...state,
        developers: action.payload,
      };
    case "GET_HABITACIONES_NOMBRE":
      return {
        ...state,
        habitaciones: action.payload,
      };
    case "GET_HABITACIONES_PRECIO":
      return {
        ...state,
        habitaciones: action.payload,
      };
    case "GET_HABITACIONES_FILTROS_PERSONAS":
      return {
        ...state,
        habitaciones: action.payload,
      };

    case "GET_RESERVAS":
      return {
        ...state,
        habitaciones: action.payload,
      };
    case "UPDATE_HABITACION":
      return {
        ...state,
        habitacionActualizada: [...state.habitacionActualizada, action.payload],
      };
    case "ESTADO_LOGEO":
      return { ...state, estadoDeLogeo: action.payload };

    case "GET_HABITACIONES_BACKUP":
      return {
        ...state,
        habitacionBackUp: action.payload,
      };

    case "UPDATE_USUARIO":
      return { ...state };

    case "DETAIL":
      console.log("action.payload", action.payload); // Agrega este console.log para verificar los datos del payload
      return {
        ...state,
        habitacionesDetail: [action.payload],
      };
    case "RESERVAS_USUARIO":
      return {
        ...state,
        reservasUsuario: action.payload,
      };
    case "VERIFICARTOKEN":
      return {
        ...state,
        token: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
