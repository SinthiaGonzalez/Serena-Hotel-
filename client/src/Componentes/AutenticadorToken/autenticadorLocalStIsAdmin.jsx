import { useNavigate, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
export const useVerificarIsAdmin = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const isAdmin = JSON.parse(localStorage.getItem("isAdmin"));
    console.log(isAdmin);

    if (!isAdmin) {
      navigate("/");
    }
    // else {
    //   if (token === true && location.pathname === "/logearse") {
    //     navigate("/");
    //   }
    // }
  }, [navigate]);
};