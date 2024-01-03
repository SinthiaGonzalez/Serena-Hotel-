import axios from 'axios';
import { GET_COMENTARIOS,ELIMINAR_COMENTARIO } from './actions-types';


export function postComent(state) {
  return async function (dispatch) {
    try {
      await axios.post("/comentar", state);
      alert('se añadió el comentario exitosamente');
    } catch (error) {
      alert(error);
    }
  }
}
export function postUsuario(state) {
  return async function (dispatch) {
    try {
      await axios.post("/usuario", state);
      console.log('log de action', state);
      alert('se creo el usuario exitosamente');
    } catch (error) {
      alert(error);
    }
  }
}


export function getAllcomentarios() {
  return async function (dispatch) {
    try {
      const response = await axios.get("/comentarios");
      if (response.status === 200) {
        dispatch({
          type: GET_COMENTARIOS,
          payload: response.data
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
      console.log('log de actions', response);
      if (response.status === 200) {
        dispatch({
          type: ELIMINAR_COMENTARIO,
          payload: id,
        });
        alert('Comentario eliminado exitosamente');
      }
    } catch (error) {
      alert(error.message);
    }
  };
}
