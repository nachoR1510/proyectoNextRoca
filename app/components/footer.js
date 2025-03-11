import React from "react";
import Image from "next/image";

const footer = () => {
  return (
    <div className="bg-stone-800 w-full">
      <div className="flex flex-col">
        <h1 className="text-white font-inter font-bold text-4xl flex justify-center pt-5">
          Redes sociales
        </h1>

        <div className="flex justify-center">
          <Image alt="redes" src={"/redes.webp"} width={400} height={400} />
        </div>
      </div>
    </div>
  );
};

export default footer;
