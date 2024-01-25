const validation = (userData) => {
    const errors = {};
  
    if (!/^[a-zA-Z]{3,}$/.test(userData.name)) {
      errors.name = "El nombre debe contener al menos 3 caracteres";
    }

    if (!/^[a-zA-Z]{3,}$/.test(userData.apellido)) {
        errors.apellido = "El nombre debe contener al menos 3 caracteres";
    }

    if (!/^[a-zA-Z]{3,}@[a-zA-Z]{3,}\.com$/.test(userData.email)) {
      errors.email = "El correo debe contener al menos 6 caracteres, un '@' y terminar en '.com' ";
    }
    
    if (!/^[0-9+-]{8,}$/.test(userData.telefono)) {
        errors.telefono = "El numero debe contener al menos 8 caracteres y puede incluir '+' o '-'";
    }
    return errors;
  };
  
  export default validation;