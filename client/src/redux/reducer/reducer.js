import { GET_COMENTARIOS, ELIMINAR_COMENTARIO } from "../Actions/actions-types";

const initialState = {
  habitaciones: [],
  usuarios: [],
  comentarios: [],
  AllComentsBackUp: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        usuarios: action.payload,
      };

    case GET_COMENTARIOS:
      return {
        ...state,
        comentarios: action.payload, // Actualizar los comentarios directamente sin usar splice
        AllComentsBackUp: action.payload,
      };

    case ELIMINAR_COMENTARIO:
      const updatedComentarios = state.comentarios.filter(
        (comentario) => comentario.id !== action.payload
      );
      return {
        ...state,
        comentarios: updatedComentarios,
      };

    default:
      return state;
  }
};

export default reducer;
