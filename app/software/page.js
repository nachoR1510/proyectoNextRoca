import React from "react";
import Button from "../components/button";

const software = () => {
  return (
    <div className="grid grid-cols-3 grid-rows-1 w-screen h-screen">
      <div
        className="col-start-1 col-span-2"
        style={{
          backgroundImage: `url("/bg-software.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>
      <div className="col-start-3 flex flex-col self-center justify-self-center gap-5">
        <h1 className="text-center text-white font-urban text-5xl">
          Descarga nuestro software para controlar y sacarle el mejor
          rendimiento a tus dispositivos.
        </h1>
        <Button className="bg-lime-500 p-2 text-white w-40 ml-64">
          Descargar
        </Button>
      </div>
    </div>
  );
};

export default software;
