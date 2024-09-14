"use client";
import React from "react";
import Button from "./components/button";
import { useRouter } from "next/navigation";

const NotFound = () => {
  const router = useRouter();
  return (
    <main>
      <h1>pagina no encontrada</h1>

      <Button onClick={() => router.back()}> volver </Button>
    </main>
  );
};

export default NotFound;
