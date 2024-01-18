import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const useVerificarToken = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = JSON.parse(localStorage.getItem("token"));
    console.log(token);

    if (!token) {
      navigate("/logearse");
    }
    // else {
    //   if (token === true && location.pathname === "/logearse") {
    //     navigate("/");
    //   }
    // }
  }, [navigate]);
};
