const { Usuario } = require('../../db')

const CreateUsuario = async (req, res) => {
  try {
    const { name, apellido, email, telefono, contraseña,isadmin,estado,imagen} = req.body;
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
        estado,
        imagen

      });
      return res.status(200).json(newUser);
    }
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ error: error.message });

  }
};



module.exports = { CreateUsuario };



module.exports = { CreateUsuario };
