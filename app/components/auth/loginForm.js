"use client";
import { useState } from "react";
import Button from "../button";
import { useAuthContext } from "../context/AuthContext";

import React from "react";

const LoginForm = () => {
  const { registerUser, loginUser, googleLogin } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const registrar = (values) => {
    registerUser(values);
  };

  return (
    <div className="w-screen h-screen z-10 flex justify-center items-center bg-opacity-25 ">
      <form className="bg-white py-4 px-6 rounded-xl max-w-md w-full">
        <h2>Login</h2>
        <input
          type="email"
          value={values.email}
          placeholder="tu email"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          value={values.password}
          placeholder="tu contraseña"
          className="p-2 rounded w-full border border-blue-100 block my-4"
          name="password"
          onChange={handleChange}
        />

        <div className="flex gap-5">
          <Button
            onClick={() => loginUser(values)}
            className="bg-violet-800 text-white p-2"
          >
            Ingresar
          </Button>
          <Button
            className="bg-violet-800  text-white p-2"
            onClick={registrar(values)}
          >
            Registrarme
          </Button>
          <Button
            onClick={googleLogin}
            className="mt-2 block bg-violet-800 text-white p-2 h-10"
          >
            Ingresa con Google
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
