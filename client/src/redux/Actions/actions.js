import axios from 'axios'
import { GET_COMENTARIOS } from './actions-types';



export function postComent(state){
  return async function(dispatch){
     try {
      await axios.post("http://localhost:3001/comentar", state)
      alert('se añadio el comentario exitosamente');
     } catch (error) {
      alert(error)
     }

  }

}
export function getAllcomentarios() {
    return async function(dispatch) {
      try {
        const response = await axios.get("http://localhost:5173/comentarios");
  console.log('log de actions', response);
        if (response.status === 200) {
          dispatch({
            type: GET_COMENTARIOS,
            payload: response.data // Pasar los datos recibidos a action.payload
          });
        }
      } catch (error) {
        alert(error.message);
      }
    };
  }