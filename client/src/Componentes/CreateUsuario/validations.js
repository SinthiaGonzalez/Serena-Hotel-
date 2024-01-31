const validation = (userData) => {
    const errors = {};
  
    if(userData.name==="")  console.log("prueba"); 
    else { if (!/^[a-zA-Z](?:\s?[a-zA-Z])*$/.test(userData.name)) {
       errors.name = "El nombre debe contener al menos 3 caracteres y solo un espacio";}
     } 

     if(userData.apellido==="")  console.log("prueba"); 
    else {if (!/^[a-zA-Z](?:\s?[a-zA-Z])*$/.test(userData.apellido)) {
        errors.apellido = "El nombre debe contener al menos 3 caracteres y solo un espacio";
    }}
    if(userData.email==="")  console.log("prueba");
    else {if (!/@.*\.com/.test(userData.email)) {
      errors.email = "El correo debe contener al menos 6 caracteres, un '@' e incluir '.com' ";
    }}
    if(userData.telefono==="")  console.log("prueba");
    else {if (!/^[0-9]*[+]?[0-9]*$/.test(userData.telefono)) {
      errors.telefono = "Solo se pueden utilizar numeros y un simbolo '+' o un '-'";
    }}

    if(userData.contraseña==="")  console.log("prueba");
    else {if (!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/.test(userData.contraseña)) {
      errors.contraseña="La contraseña debe tener al menos una Mayuscula, una miniscula, un digito, un caracter especial y un minimo de 8 caracteres en total"
    }}
    
    if (userData.contraseña!=userData.confirmarContraseña) {
      errors.confirmarContraseña="La contraseña no coincide con este campo"
    }
    return errors;
  };
  
  export default validation;
