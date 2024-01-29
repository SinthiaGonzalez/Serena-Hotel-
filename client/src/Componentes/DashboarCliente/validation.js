const validation = (userData) => {
    const errors = {};

    userData.telefono= Number(userData.telefono)
  
    if (!/^[a-zA-Z\s]{3,}$/.test(userData.name)) {
      errors.name = "El nombre debe contener al menos 3 caracteres";
    }

    if (!/^[a-zA-Z\s]{3,}$/.test(userData.apellido)) {
        errors.apellido = "El nombre debe contener al menos 3 caracteres";
    }

    if (!/@.*\.com/.test(userData.email)) {
      errors.email = "El correo debe contener al menos 6 caracteres, un '@' e incluir '.com' ";
    }
    
    if (!/^\d{6,}(\.\d+)?$/.test(userData.telefono)) {
        errors.telefono = "Solo se pueden utilizar numeros y un simbolo "+" o un "-"";
    }

    if(isNaN(userData.telefono)) errors.telefono = "Solo se aceptan numeros y un simbolo "+" o un "-""
    
    if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(userData.contraseña)) {
      errors.contraseña="La contraseña debe tener al menos una Mayuscula, una miniscula, un digito, un caracter especial y un minimo de 8 caracteres en total"
    }

    if (userData.contraseña!=userData.confirmarContraseña) {
      errors.confirmarContraseña="La contraseña no coincide con este campo"
    }
    return errors;
  };
  
  export default validation;