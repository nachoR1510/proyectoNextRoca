import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="h-screen w-full bg-fixed grid grid-cols-12 grid-rows-12 md:grid-cols-2"
        style={{ backgroundImage: `url("/bgMain.png")` }}
      >
        <div className="flex items-center gap-8 text-center flex-col-reverse row-start-5 row-span-5 col-span-11 md:col-span-2 md:justify-center md:flex-row">
          <Image
            className="ml-10"
            alt="tecladoInicio"
            src={"/tecladoMain.png"}
            width={600}
            height={600}
          />
          <h1 className="text-4xl ml-8 text-center text-white font-bold w-48 md:text-6xl md:w-2/5 md:ml-0">
            Lleva tu juego al siguiente nivel.
          </h1>
        </div>
      </div>
    </main>
  );
}
