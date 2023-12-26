import { GET_COMENTARIOS } from "../Actions/actions-types";

const initialState = {
  habitaciones: [],
  usuarios: [],
  comentarios: [],
  AllComentsBackUp: [],
};

const reducer = (state = initialState, action) => {
  const num_comentarios = 2; // Define num_comentarios within the reducer function
  switch (action.type) {
    case "GET_USERS":
      return {
        ...state,
        usuarios: action.payload,
      };

    case GET_COMENTARIOS:
      return {
        ...state,
        comentarios: [action.payload].splice(0, num_comentarios),
        AllComentsBackUp: action.payload,
      };

    default:
      return state; // Return state directly without wrapping it in an object
  }
};

export default reducer;