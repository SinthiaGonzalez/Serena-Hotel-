const initialState = {
  habitaciones: [],
  usuarios: [],
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

      default: return state;
  }
};
export default reducer;
