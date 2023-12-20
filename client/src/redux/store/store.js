import{createStore, applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'; //importamos thunk para trabajar cion funciones asincronas junto a compose y applyMiddleware
import rootReducer from '../reducer/reducer.js'; //importamso el reducer que creamos

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose; // esta línea es para conectar con la extensión del navegador => REDUX DEVTOOLS 
const store = createStore(
    rootReducer, //este es nuestro reducer que creamos
    composeEnhancer(applyMiddleware(thunk)) // esta línea es para poder hacer peticiones a un server
    );

export default store; //exportamos el store para poder usarlo en el .js