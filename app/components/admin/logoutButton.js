"use client";
import React from "react";
import { useAuthContext } from "../context/AuthContext";
import Button from "../button";

const logoutButton = () => {
  const { logout } = useAuthContext();
  return (
    <Button onClick={logout} className="bg-red-500 rounded text-white p-2">
      Cerrar sesion
    </Button>
  );
};

export default logoutButton;
