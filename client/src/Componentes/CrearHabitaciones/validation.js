const validation = (habitacionData) => {
  const errors = {};

  if (!/^[a-zA-Z\s]{3,}$/.test(habitacionData.nombre)) {
    errors.nombre = "El nombre debe contener al menos 3 caracteres";
  }
    
  if (!/^.{200,}$/.test(habitacionData.descripcion)) {
    errors.descripcion = "La descripción debe contener al menos 200 palabras";
  }
  
  if (habitacionData.servicios.length === 0) {
    errors.servicios = "Debes elegir al menos un servicio";
  }
  
  if (habitacionData.precio <= 0) {
    errors.precio = "El precio debe ser mayor a 0";
  }
  return errors;
};

export default validation;
