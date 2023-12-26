// ComentPage.js
import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getAllcomentarios } from "../../redux/Actions/actions";

const ComentPage = () => {
  const dispatch = useDispatch();
  const comments = useSelector((state) => state.comentarios);

  useEffect(() => {
    dispatch(getAllcomentarios());
  }, [dispatch]);

  return (
    <div className="p-4 bg-gray-900 text-white rounded-md">
      <h1 className="text-2xl font-bold mb-8 ml-12 mt-16">COMENTARIOS</h1>
      {comments.map((comment) => (
        <div
          key={comment.id}
          className="bg-blue-900 p-20 mb-8 rounded-lg"
          style={{ backgroundColor: "#1D2828" }}
        >
          <h3 className="text-xl font-bold mb-2">{comment.title}</h3>
          <p className="text-lg">{comment.body}</p>
        </div>
      ))}
    </div>
  );
};

export default ComentPage;
