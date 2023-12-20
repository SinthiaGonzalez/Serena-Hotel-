const express = require('express');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const routes = require('./routes/index.js');

require('./db.js');

const server = express();

server.name = 'API';// nombre del servidor aunqye no lo modifica ya que sigue siendo app  

server.use(express.json());
//midaelware aca abajo
server.use(bodyParser.urlencoded({ extended: true, limit: '50mb' }));
server.use(bodyParser.json({ limit: '50mb' }));
server.use(cookieParser());
server.use(morgan('dev'));
// aqui abajo se configura el cors para que no de error de cors en el front end //* seguridad 
server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // solicitudes solo desde esta url
  res.header('Access-Control-Allow-Credentials', 'true'); // credenciales
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept'); //origin es la url de donde viene la solicitud, x-requested-with es el tipo de solicitud, content-type es el tipo de contenido que se esta enviando, accept es el tipo de contenido que acepta el servidor
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE'); // metodos que acepta el servidor
  next();
});

server.use('/', routes); // cuando llegue una solicitud a la ruta '/' se ejecuta el archivo routes/index.js donde esatn importadas todas las rutas que creamos en la carpeta routes

// mideleware de error, captura los errores y los envia al front end
server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server; // exportamos el servidor para poder usarlo en otros archivos
