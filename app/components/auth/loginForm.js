"use client";
import { useState } from "react";
import Button from "../button";
import { useAuthContext } from "../context/AuthContext";
import Link from "next/link";
import Image from "next/image";

import React from "react";

const LoginForm = () => {
  const { loginUser } = useAuthContext();

  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const [error, setError] = useState(""); // Estado para manejar errores

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(""); // Reiniciar el error antes de intentar loguear

    try {
      await loginUser(values);
    } catch (err) {
      setError("Correo o contraseña incorrectos."); // Mensaje de error genérico
    }
  };

  return (
    <div className="w-screen h-screen grid grid-rows-12 grid-cols-12">
      <form
        onSubmit={handleSubmit}
        className="bg-stone-800 w-full col-start-2 row-start-3 col-span-4 row-span-9 flex flex-col gap-5"
      >
        <h2 className="text-white font-inter font-bold text-5xl flex justify-center pt-5">
          INICIAR SESIÓN.
        </h2>

        <input
          type="email"
          value={values.email}
          placeholder="E-MAIL"
          className="rounded-sm border border-white bg-stone-900 w-96 p-3 mb-4 mx-auto mt-28 font-inter font-bold text-white"
          name="email"
          onChange={handleChange}
        />

        <input
          type="password"
          value={values.password}
          placeholder="CONTRASEÑA"
          className="rounded-sm border border-white bg-stone-900 w-96 p-3 mb-4 mx-auto font-inter font-bold text-white"
          name="password"
          onChange={handleChange}
        />

        {/* Mostrar mensaje de error si hay un error */}
        {error && <p className="text-red-500 text-center font-bold">{error}</p>}

        <div className="flex gap-5">
          <Button
            type="submit"
            className="bg-purple-500 rounded-sm text-white p-2 font-inter font-bold text-3xl hover:scale-105 transition-all mx-auto"
          >
            INICIAR SESIÓN.
          </Button>
        </div>

        <Link href="/registerForm" className="text-blue-600 font-inter mx-auto">
          ¿No tienes cuenta? Regístrate.
        </Link>
      </form>

      <div className="row-start-3 col-start-7 row-span-8 col-span-5 relative">
        <Image
          src="/grid2.webp"
          alt="grid"
          className="w-full h-full object-fill pt-10 z-30 relative"
          width={1000}
          height={1080}
        />

        <Image
          src="/icon-mouse.webp"
          alt="mouse"
          className="absolute inset-0 m-auto rotate-6 z-40"
          width={600}
          height={600}
        />

        <Image
          src="/circulo.webp"
          alt="mouse"
          className="absolute inset-0 m-auto z-10 blur-2xl opacity-50"
          width={500}
          height={600}
        />
      </div>
    </div>
  );
};

export default LoginForm;
