const validation = (userData) => {
    const errors = {};
  
    if (!/^[a-zA-Z\s]{3,}$/.test(userData.name)) {
      errors.name = "El nombre debe contener al menos 3 caracteres";
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(userData.apellido)) {
        errors.apellido = "El nombre debe contener al menos 3 caracteres";
    }

    if (!/@.*\.com/.test(userData.email)) {
      errors.email = "El correo debe contener al menos 6 caracteres, un '@' e incluir '.com' ";
    }
    
    if (!/^[\d+-]*$/.test(userData.telefono)) {
        errors.telefono = "Solo se pueden utilizar numeros y un simbolo "+" o un "-"";
    }
    
    if (userData.contraseña!=userData.confirmarContraseña) {
      errors.confirmarContraseña="La contraseña no coincide con este campo"
    }
    return errors;
  };
  
  export default validation;