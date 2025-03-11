"use client";
import { useAuthContext } from "../components/context/AuthContext";
import React, { useEffect } from "react";

const Adminlayout = ({ children, login }) => {
  const { user } = useAuthContext();

  // Verificar si el estado de `user` cambia y forzar la actualización del componente
  useEffect(() => {
    console.log("Estado del usuario:", user);
  }, [user]); // Agregar `user` como dependencia

  return <>{user.logged ? React.Children.toArray(children) : login}</>;
};

export default Adminlayout;
