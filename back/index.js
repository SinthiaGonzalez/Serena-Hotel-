const server = require("./src/app.js");
const { conn } = require("./src/db.js");
require("dotenv").config();
const { PORT } = process.env;

// false no se borra la base de datos true modo dedarrollador si borras db

conn.sync({ force: false }).then(() => {
  // force: false
  server.listen(PORT, () => {
    console.log(`%s listening at ${PORT}`, PORT);
  });
});
