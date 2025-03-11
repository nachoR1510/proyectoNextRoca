"use client";
import { useState } from "react";
import Button from "../components/button";
import { useAuthContext } from "../components/context/AuthContext";
import Image from "next/image";

import React from "react";

const RegisterForm = () => {
  const { registerUser } = useAuthContext();
  const [values, setValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      await registerUser(values);
      setValues({ email: "", password: "" });
    } catch (err) {
      console.error("Error al registrar usuario:", err);
      setError("Hubo un problema al registrar el usuario.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-screen h-screen grid grid-rows-12 grid-cols-12">
      <form
        className="bg-stone-800 w-full col-start-2 row-start-3 col-span-4 row-span-9 flex flex-col gap-5"
        onSubmit={handleSubmit}
      >
        <h2 className="text-white font-inter font-bold text-5xl flex justify-center pt-5">
          REGISTRARSE
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
        {error && <p className="text-red-500">{error}</p>}
        <div className="flex gap-5">
          <Button
            className="bg-purple-500 rounded-sm text-white p-2 font-inter font-bold text-3xl hover:scale-105 transition-all mx-auto"
            type="submit"
            disabled={loading}
          >
            {loading ? "Registrando..." : "Registrarme"}{" "}
          </Button>
        </div>
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
          src="/mouse-register.webp"
          alt="mouse"
          className="absolute inset-0 m-auto rotate-6 z-40"
          width={430}
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

export default RegisterForm;
