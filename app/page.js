import React from "react";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div
        className="h-screen w-full bg-fixed grid grid-cols-12 grid-rows-12 md:grid-cols-2"
        style={{
          backgroundImage: `url("/bgMain.jpg")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="fixed invisible lg:visible bottom-48 left-5">
          <Image
            alt="pulsar"
            src={"/pulsarText.png"}
            width={1800}
            height={600}
          />
        </div>

        <div className="row-start-2">
          <h2 className="mt-10 ml-10 text-base text-white font-croma font-bold pt-5 pb-5 w-auto hidden md:flex">
            //- Pulsar XBOARD QS Mechanical Gaming Keyboard
          </h2>
        </div>

        <div className="flex items-center  text-center flex-col-reverse row-start-5 row-span-5 col-span-11 md:col-span-2 md:justify-center md:flex-row">
          <div className="flex flex-col">
            <Image
              className=" ml-5 md:-rotate-12 drop-shadow-xl"
              alt="tecladoInicio"
              src={"/tecladoMain.png"}
              width={700}
              height={600}
            />

            <h2 className="mt-10 ml-10 bg-white text-xs font-croma font-bold pt-5 pb-5 md:invisible">
              Pulsar XBOARD QS Mechanical Gaming Keyboard
            </h2>
          </div>
        </div>

        <div className="row-start-10 hidden lg:col-span-2 lg:flex  justify-center gap-5">
          <div className="backdrop-blur bg-white/20 w-[500px] h-40 flex flex-col gap-5">
            <h2 className="font-croma font-bold text-xl text-center pt-2">
              Intercambio rapido.
            </h2>
            <p className="font-croma text-lg text-center">
              Los interruptores se pueden reemplazar sin soldar.
            </p>
          </div>

          <div className="backdrop-blur bg-white/20 w-[500px] h-40 flex flex-col gap-5">
            <h2 className="font-croma font-bold text-xl text-center pt-2">
              Perilla de control.
            </h2>
            <p className="font-croma text-lg text-center">
              Perilla de control de volumen y LED.
            </p>
          </div>

          <div className="backdrop-blur bg-white/20 w-[500px] h-40 flex flex-col gap-5">
            <h2 className="font-croma font-bold text-xl text-center pt-2">
              ALUMINIO CNC.
            </h2>
            <p className="font-croma text-lg text-center">
              Cuerpo de aluminio mecanizado por CNC de precisión.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
