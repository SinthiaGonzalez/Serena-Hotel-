const validation = (contactData) => {
    const errors = {};
  
    if (!/^[a-zA-Z]{3,}$/.test(contactData.nombre)) {
      errors.nombre = "El nombre debe contener al menos 3 caracteres";
    }
    if (!/@.*\.com/.test(contactData.correo)) {
      errors.correo = "El correo debe contener al menos 6 caracteres, un '@' e incluir '.com' ";
    }
    
    if (!/^[\d+-]*$/.test(contactData.telefono)) {
        errors.telefono = "Solo se pueden utilizar numeros y un simbolo "+" o un "-"";
    }
    if (!/^.{20,}$/.test(contactData.mensaje)) {
        errors.mensaje = "El mensaje debe contener al menos 20 caracteres";
      }
  
    return errors;
  };
  
  export default validation;
  