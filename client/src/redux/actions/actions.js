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
