import React from "react";
import Image from "next/image";
import Link from "next/link";

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
    <main>
      {destacado.map((product, index) => {
        const fontSize = product.fabricante.length >= 7 ? "22rem" : "32rem";

        return (
          <div
            key={index}
            className="h-screen w-full bg-fixed grid grid-rows-3 grid-cols-3"
            style={{
              backgroundImage: `url("/bg-main.jpg")`,
              backgroundRepeat: "no-repeat",
              backgroundSize: "cover",
            }}
          >
            <div className="relative flex justify-center items-center h-screen row-start-1 row-span-3 col-start-1 col-span-3 overflow-hidden">
              <h2
                className="text-white font-urban font-bold select-none pl-1 absolute text-center leading-none"
                style={{ fontSize }}
              >
                {product.fabricante.toUpperCase()}
              </h2>

              <h3
                className="text-white font-urban font-bold drop-shadow select-none pl-1 z-30 outline-text absolute pointer-events-none text-center leading-none"
                style={{ fontSize }}
              >
                {product.fabricante.toUpperCase()}
              </h3>
            </div>

            <div className="col-start-1 col-span-3 row-start-1 row-span-3 justify-self-center content-center">
              <Link href={`/productPage/${product.title.replace(/ /g, "")}`}>
                <Image
                  className="-rotate-12 drop-shadow-xl transition-all hover:scale-110 select-none z-30"
                  alt="tecladoInicio"
                  src={product.img}
                  width={700}
                  height={700}
                />
              </Link>
            </div>

            <div className="flex items-center gap-5 place-self-center row-start-3 col-start-1 col-span-3 gap-5 text-white text-2xl mt-40">
              <div className="flex content-center gap-5 w-full h-24 p-5 font-croma bg-stone-800 border-t border-purple-500 shadow-xl">
                <Image
                  src={"/credit-card.svg"}
                  alt="tarjeta"
                  width={50}
                  height={50}
                />
                <h4>Hasta 12 cuotas.</h4>
              </div>

              <div className="flex items-center gap-5 w-full h-24 p-5 font-croma bg-stone-800 border-t border-purple-500 shadow-xl">
                <Image
                  src={"/shipping.svg"}
                  alt="tarjeta"
                  width={50}
                  height={50}
                />
                <h4>Envio a todo el pais.</h4>
              </div>

              <div className="flex items-center gap-5 w-full h-24 p-5 font-croma bg-stone-800 border-t border-purple-500 shadow-xl">
                <Image
                  src={"/shield.svg"}
                  alt="tarjeta"
                  width={50}
                  height={50}
                />
                <h4>Garantia oficial.</h4>
              </div>
            </div>

            <div className="row-start-1 col-start-1 col-span-2 place-self-start bg-stone-800 flex p-5 gap-1 border-l border-purple-500 mt-20 ml-5">
              <Image src={"/stars.svg"} alt="tarjeta" width={30} height={30} />
              <h5 className="text-white font-urban text-2xl w-auto">
                {product.fabricante}-{product.title} | $
                {product.price.toLocaleString()}
              </h5>
            </div>
          </div>
        );
      })}
    </main>
  );
};

export default Home;
