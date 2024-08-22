import React from "react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <header className="w-full h-20 grid grid-colums-3 text-black backdrop-blur-3xl bg-gray-50/90 text-xl font-bold fixed font-urban aling-center">
      <div className="gap-4 flex col-start-2 justify-center items-center">
        <Link href={"/productos"}>
          <h2>PRODUCTOS</h2>
        </Link>
        <Link href={"/"}>
          <div className="flex flex-col place-items-center">
            <Image alt="logo" src={"/logo.png"} width={50} height={50} />
            <p className="text-sm">MAMBA</p>
          </div>
        </Link>
        <Link href={"/drivers"}>
          <h3>DRIVERS</h3>
        </Link>
      </div>

      <div className="col-start-3 flex justify-center items-center gap-5">
        <Link href={"/carrito"}>
          <Image
            alt="imgCarrito"
            src={"/icon-cart.svg"}
            width={30}
            height={30}
          />
        </Link>

        <Link href={"/"}>
          <Image
            alt="imgUsuario"
            src={"/icon-user.svg"}
            width={30}
            height={30}
          />
        </Link>
      </div>
    </header>
  );
};

export default header;
