const server = require('./src/app.js'); //importamos el servidor
const { conn } = require('./src/db.js'); //importamos la conexion a la base de datos

// sincronizamos la base de datos y luego levantamos el servidor, force true borra todas las tablas y las vuelve a crear cada vez que se reinicia el servidor
conn.sync({ force: false }).then(() => {
  server.listen(3001, () => {
    console.log('%s listening at 3001',server.name); // se permite el uso de console.log en este caso 
  });
});
