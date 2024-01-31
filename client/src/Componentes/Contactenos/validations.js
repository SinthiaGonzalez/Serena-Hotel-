const validation = (contactData) => {

  const errors = {};

  if (!/^[a-zA-Z](?:\s?[a-zA-Z])*$/.test(contactData.nombre)) {
    errors.nombre =
      "El nombre debe contener al menos 3 caracteres y solo puede tener un espacio";
  }
  if (!/@.*\.com/.test(contactData.correo)) {
    errors.correo =
      "El correo debe contener al menos 6 caracteres, un '@' e incluir '.com' ";
  }

  if (!/^[0-9]*[+]?[0-9]*$/.test(contactData.telefono)) {
    errors.telefono =
      "Solo se pueden utilizar numeros y un simbolo '+' o un '-'";
  }
  if (!/^.{20,}$/.test(contactData.mensaje)) {
    errors.mensaje = "El mensaje debe contener al menos 20 caracteres";
  }

  return errors;
};

export default validation;


