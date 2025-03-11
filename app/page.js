import React from "react";
import Image from "next/image";
import Link from "next/link";
import RecommendedProducts from "./components/RecomendedProducts";

const Home = async () => {
  const baseUrl =
    typeof window === "undefined"
      ? `http://${process.env.VERCEL_URL || "localhost:3000"}`
      : "";

  const data = await fetch(`${baseUrl}/api/productos/all`, {
    cache: "no-store",
  }).then((r) => r.json());

  const destacado = data.filter((data) => data.title == "XBOARD QS");

  return (
    <main className="bg-gradient-to-b from-stone-950 via-stone-900 to-stone-900">
      {destacado.map((product, index) => {
        const fontSize = product.fabricante.length >= 7 ? "16rem" : "26rem";

        return (
          <div
            key={index}
            className="h-screen w-full bg-fixed grid grid-rows-12 grid-cols-12"
          >
            <div className="row-start-2 row-span-12 col-start-1 col-span-12 flex justify-center">
              <Image alt="grid" src={"/grid.webp"} width={1900} height={1900} />
            </div>

            <div className="row-start-11 col-start-1 col-span-12 justify-self-center content-center z-50 bg-purple-500 p-5 flex flex-col aling-center rounded-sm hover:scale-110 transition-all">
              <Link href={`/productPage/${product.title.replace(/ /g, "")}`}>
                <p className="text-white font-urban font-bold text-3xl">
                  {product.fabricante} {product.title}
                </p>
              </Link>
            </div>

            <div className="relative flex justify-center items-center h-screen row-start-1 row-span-3 col-start-1 col-span-12 overflow-hidden">
              <h2
                className="text-purple-500 font-inter font-bold select-none pl-1 absolute text-center leading-none"
                style={{ fontSize }}
              >
                {product.fabricante.toUpperCase()}
              </h2>

              <h3
                className="font-inter font-bold select-none pl-1 z-30 text-purple-500/40 absolute pointer-events-none text-center leading-none "
                style={{ fontSize }}
              >
                {product.fabricante.toUpperCase()}
              </h3>
            </div>

            <div className="col-start-4 col-span-6 row-start-1 row-span-12 justify-self-center content-center">
              <Link href={`/productPage/${product.title.replace(/ /g, "")}`}>
                <Image
                  className="-rotate-12 drop-shadow-xl transition-all hover:scale-110 select-none z-30 "
                  alt="productoInicio"
                  src={product.img}
                  width={800}
                  height={700}
                />
              </Link>
            </div>
          </div>
        );
      })}

      <section className="h-screen w-full grid grid-rows-12 grid-cols-12">
        <h4 className="row-start-2 col-start-2 col-span-5 text-white text-5xl font-inter font-bold border-l-4 border-purple-500 h-12 pl-1">
          Productos recomendados
        </h4>

        <div className="row-start-3 col-start-2">
          <RecommendedProducts />
        </div>

        <div className="row-start-10 col-start-6 bg-purple-500 w-64 p-1 rounded-sm hover:scale-105 transition ease-in-out">
          <Link
            href={"/productos/all"}
            className="flex justify-center items-center"
          >
            <Image
              alt="icono tienda"
              src={"/shopping-bag-icon.svg"}
              width={100}
              height={100}
              className="w-16 h-16"
            />

            <h5 className="font-inter font-bold text-white text-4xl text-center">
              Tienda
            </h5>
          </Link>
        </div>
      </section>

      <section className="h-screen w-full grid grid-rows-12 grid-cols-12">
        <div className="row-start-1 col-start-2 row-span-10 col-span-10 flex items-center justify-center relative bg-[radial-gradient(circle,rgba(168,85,247,1)_0%,rgba(126,34,206,1)_100%),url('/topografia.webp')] bg-cover bg-center bg-blend-overlay">
          <div className="flex justify-center gap-10">
            <div className="bg-stone-900 w-80 h-96 flex flex-col items-center justify-center p-5 border border-stone-500">
              <Image
                alt="icono cuotas"
                src={"/payment-icon.png"}
                width={100}
                height={100}
              />

              <p className="text-white text-6xl font-bold font-inter text-center">
                Hasta 12 cuotas.
              </p>
            </div>

            <div className="bg-stone-900 w-80 h-96 flex flex-col items-center justify-center p-5 border border-stone-500">
              <Image
                alt="icono envios"
                src={"/delivery-icon.png"}
                width={100}
                height={100}
              />

              <p className="text-white text-6xl font-bold font-inter text-center">
                Envios a todo el pais.
              </p>
            </div>

            <div className="bg-stone-900 w-80 h-96 flex flex-col items-center justify-center p-5 border border-stone-500">
              <Image
                alt="icono calidad"
                src={"/quality-icon.png"}
                width={100}
                height={100}
              />

              <p className="text-white text-6xl font-bold font-inter text-center">
                Garantia oficial.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
