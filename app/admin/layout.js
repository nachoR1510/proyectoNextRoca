"use client";
import { useAuthContext } from "../components/context/AuthContext";

import React from "react";

const Adminlayout = ({ children, login }) => {
  const { user } = useAuthContext();

  return <>{user.logged ? React.Children.toArray(children) : login}</>;
};

export default Adminlayout;
