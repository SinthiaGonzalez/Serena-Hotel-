const {Desarrollador}= require('../../db')
const getDesarrolladores = async () => {
 
  const desarrolladores = Desarrollador.findAll();
  console.log(desarrolladores)

  return desarrolladores;
};

module.exports = { getDesarrolladores };
