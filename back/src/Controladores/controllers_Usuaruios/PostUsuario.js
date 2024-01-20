const { Usuario } = require('../../db')

const CreateUsuario = async (req, res) => {
  try {
    const { name, apellido, email, telefono, contraseña,isadmin, estado } = req.body;
    console.log("aqui en el createusuario", name, apellido, email)
    const isAdmin = isadmin === true || isadmin === "true";
    const prueba = await Usuario.findOne({ where: { email: email } });
    if (prueba) {
      return res.status(201).json({ message: "Ya existe un usuario vinculado a ese correo" })
    } else {
      const newUser = await Usuario.create({
        name,
        apellido,
        email,
        telefono,
        contraseña,
        isadmin: isAdmin,
        estado
      });
      return res.status(200).json(newUser);
    }
  } catch (error) {
    res.status(500).json({ error: "Error al crear el usuario en la base de datos" });

  }
};

module.exports = { CreateUsuario };