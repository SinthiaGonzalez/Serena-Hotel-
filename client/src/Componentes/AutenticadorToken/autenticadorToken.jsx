// autenticadorToken.jsx
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

export const useVerificarToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    localStorage.setItem("tokenValido", "true");
    // Obtener la información directamente del localStorage y convertirla a booleano
    const esTokenValido = localStorage.getItem("tokenValido") === "true";

    if (!esTokenValido) {
      // Si el token no es válido, redirigir al usuario a la página de inicio de sesión
      navigate("/logearse");
    }
  }, [navigate]);
};
