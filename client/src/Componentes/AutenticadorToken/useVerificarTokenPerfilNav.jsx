import { useEffect, useState } from "react";

export const useVerificarTokenPerfilNav = () => {
  const [esTokenValido, setEsTokenValido] = useState(true);

  useEffect(() => {
    // Obtener la información directamente del localStorage y convertirla a booleano
    const token = JSON.parse(localStorage.getItem("token"));

    if (token) {
      // Si el token no es válido, redirigir al usuario a la página de inicio de sesión
      setEsTokenValido(true);
    } else {
      setEsTokenValido(false);
    }
  }, [esTokenValido]);

  return esTokenValido;
};
