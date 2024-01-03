import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllcomentarios, eliminarComentario } from "../../redux/Actions/actions";
import CardComent from "./cardComent/cardcoment";
import { Link } from "react-router-dom";

const ComentPage = () => {
  const dispatch = useDispatch();
  const comentarios = useSelector((state) => state.comentarios);

  useEffect(() => {
    dispatch(getAllcomentarios());
  }, [dispatch]);

  const handleEliminarComentario = (id) => {
    dispatch(eliminarComentario(id));
  };

  return (
    <div style={{ backgroundColor: "#1D2828", padding: "20px" }}>
      <div style={{ display: "flex", alignItems: "center" }}>
        <div style={{ width: "4px", height: "100%", backgroundColor: "white" }}></div>
        <h1 style={{ color: "white", fontSize: "2rem", fontWeight: "bold", marginLeft: "12px", marginTop: "16px" }}>COMENTARIOS</h1>
        <Link to="/comentar" style={{ marginLeft: "auto" }}>
          <button style={{ color: "white", backgroundColor: "#FF3D00", border: "2px solid #FF3D00", borderRadius: "4px", cursor: "pointer", padding: "8px 16px" }}>Dejar comentario</button>
        </Link>
      </div>
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {comentarios && comentarios.map((comentario, index) => (
          <CardComent key={index} comentario={comentario} onDelete={handleEliminarComentario} />
        ))}
      </div>
    </div>
  );
};

export default ComentPage;
