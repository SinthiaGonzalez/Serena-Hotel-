const validation = (contactData) => {
    const errors = {};
  
    if (!/^[a-zA-Z]{3,}$/.test(contactData.nombre)) {
      errors.nombre = "El nombre debe contener al menos 3 caracteres";
    }
    if (/^[a-zA-Z]{3,}@[a-zA-Z]{3,}\.com/.test(contactData.correo)) {
      errors.correo = "El correo debe contener al menos 6 caracteres, un '@' e incluir '.com' ";
    }
    
    if (!/^[0-9+-]{8,}$/.test(contactData.telefono)) {
        errors.telefono = "El numero debe contener al menos 8 caracteres y puede incluir '+' o '-'";
    }
    if (!/^.{20,}$/.test(contactData.mensaje)) {
        errors.mensaje = "El mensaje debe contener al menos 20 caracteres";
      }
  
    return errors;
  };
  
  export default validation;
  