const initialState = {
  habitaciones: [],
  usuarios: [],
  preferenceIdMP: [],
  carrito: [],
   comentarios: [],
  AllComentsBackUp: [],
  nuevaHabitacion: [],
  habitacionActualizada: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
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
      const habitacionToAdd = state.habitaciones.find(habitacion => habitacion.id === action.payload);
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
        comentarios: action.payload, // Actualizar los comentarios directamente sin usar splice
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
    return { ...state, nuevaHabitacion: [...state.nuevaHabitacion, action.payload], habitaciones: [...state.habitaciones, action.payload] }
    
    case "UPDATE_HABITACION":
    return { ...state, habitacionActualizada: [...state.habitacionActualizada, action.payload] }  

    default: return state;
  }
};

export default reducer;
