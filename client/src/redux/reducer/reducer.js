const initialState = {
  habitaciones: [],
  habitacionesDetail: [],
  habitacionesfiltradas: [],
  habitacionesFechas: [],
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
  reservasTodasAdmin: [],
  token: false,
  usuarioById: [],
  habitacionEliminada: [],
  fechas: [],
  fecha_entrada: "",
  fecha_salida: "",
 
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_HABITACIONES_BUSQUEDA":
      const buscar = action.payload; // string palabra a buscar
      const habitacionFiltrada = state.habitacionesFechas.filter((habitacion) =>
        habitacion.nombre.toLowerCase().includes(buscar)
      );
      return {
        ...state,
        string: buscar,
        habitacionesFechas: habitacionFiltrada,
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
    case "AÑADIR_AL_CARRITO":
      const habitacionToAdd = state.habitaciones.find(
        (habitacion) => habitacion.id === action.payload
      );
      // Verifica si la habitación ya está en el carrito
      const isInCart = state.carrito.some((item) => item.id === action.payload);
      if (habitacionToAdd && !isInCart) {
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
        habitacionesFechas: action.payload,
      };
    case "GET_HABITACIONES_PRECIO":
      return {
        ...state,
        habitacionesFechas: action.payload,
      };
    case "GET_HABITACIONES_FILTROS_PERSONAS":
      return {
        ...state,
        habitacionesFechas: action.payload,
      };

    case "GET_RESERVAS":
      return {
        ...state,
        habitacionesFechas: action.payload,
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

    case "RESERVAS_TODAS_ADMIN":
      return {
        ...state,
        reservasTodasAdmin: action.payload,
      };

    case "VERIFICARTOKEN":
      return {
        ...state,
        token: action.payload,
      };
    case "GET_CARRITO":
      return {
        ...state,
        carrito: action.payload,
      };
    case "DELETE_CARRITO":
      return {
        ...state,
        carrito: action.payload,
      };
    case "POST_USUARIO":
      return {
        ...state,
        usuarios: action.payload,
        token: action.payload,   
      };

    case "GET_USUARIO_BY_ID":
      return {
        ...state,
        usuarioById: action.payload,
      };
    case "POST_USUARIO_GOOGLE":    
      return {
        ...state,
        token: action.payload,      
      };
    case "POST_USUARIO_NOGOOGLE":    
      return {
        ...state,
        token: action.payload,      
      };
     
    case "UPDATE_DATES":
      const checkinDate = action.payload.checkinDate;
      const checkoutDate = action.payload.checkoutDate;
      const diferenciaEnMilisegundos =
        new Date(checkoutDate) - new Date(checkinDate);
      const diferenciaEnDias = diferenciaEnMilisegundos / (1000 * 60 * 60 * 24);
      return {
        ...state,
        fechas: {
          checkinDate: action.payload.checkinDate,
          checkoutDate: action.payload.checkoutDate,
          estadia: diferenciaEnDias,
        },
      };
      case "FECHA_ENTRADA":
  const newState = {
    ...state,
    fecha_entrada: action.payload
  };

  // Guardar la fecha en el localStorage
  localStorage.setItem("fecha_entrada", JSON.stringify(action.payload));

  return newState;

   case "FECHA_SALIDA":
        const newsalidastate ={
          ...state,
          fecha_salida: action.payload
        };
        localStorage.setItem("fecha_salida", JSON.stringify(action.payload));

        return newsalidastate;
        case "DELETE_HABITACION":
          return {
            ...state,
            habitacionEliminada: action.payload,
          }
    default:
      return state;
  }
};

export default reducer;
