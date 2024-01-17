const { Usuario } = require("../db.js");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const loginCreateToken = async (req, res) => {
  try {
    const { email, contraseña } = req.body;
    console.log(email, contraseña);
    const user = await Usuario.findOne({ where: { email, contraseña } });

    if (!user) {
      res.status(400).json({ message: "Usuario o contraseña invalidos" });
    } else {
      const userId = user.id;
      const token = jwt.sign({ userId }, process.env.ACCES_JWT, {
        expiresIn: "1h",
      });
      res.json({ message: "Autenticación exitosa", token });
    }
  } catch (error) {
    console.error("error al crear el token", error);
    res.status(500).json({ message: "Error al crear el token" });
  }
};

module.exports = { loginCreateToken };
