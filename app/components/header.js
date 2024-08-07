import React from "react";
import Image from "next/image";
import Link from "next/link";

const header = () => {
  return (
    <header className="w-full h-16 grid grid-colums-3 bgRojoBlur text-white borde text-xl font-bold fixed">
      <div className="gap-4 flex col-span-1 col-star-3 col-end-3 justify-center items-center">
        <Link href={"/productos"}>
          <h2>Productos</h2>
        </Link>
        <Link href={"/"}>
          <Image alt="logo" src={"/logo.png"} width={60} height={60} />
        </Link>
        <Link href={"/drivers"}>
          <h3>Drivers</h3>
        </Link>
      </div>

      <div className="col-span-1 col-star-4 col-end-4 flex gap-4 mt-5 justify-center mb-4">
        <Link href={"/carrito"}>
          <Image alt="imgCarrito" src={"/cart.svg"} width={25} height={25} />
        </Link>
        <Image alt="imgUsuario" src={"/person.svg"} width={25} height={25} />
      </div>
    </header>
  );
};

export default header;
