import React from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./cart/cart";

const header = () => {
  return (
    <header className="w-full h-16 grid grid-cols-3 text-white bg-stone-800 fixed z-50 font-urban shadow-sm shadow-black">
      <div className="gap-4 flex justify-center items-center col-start-1 bg-gradient-to-r from-indigo-800 via-purple-700 to-pink-600">
        <Link href={"/"}>
          <div className="flex place-items-center">
            <Image
              alt="logo"
              src={"/logo-ultraGaming.png"}
              width={60}
              height={60}
              className="select-none"
            />
            <p className="text-2xl ">ULTRA GAMING</p>
          </div>
        </Link>
      </div>

      <div className="gap-4 flex justify-center items-center col-start-2">
        <Link href={"/productos/all"}>
          <h2 className="text-xl transition-all ease-in-out hover:text-purple-500 hover:animate-pulse hover:drop-shadow">
            PRODUCTOS
          </h2>
        </Link>
      </div>

      <div className="flex justify-center gap-5 justify-center items-center col-start-3 select-none">
        <Link href={"/carrito"}>
          <Cart />
        </Link>

        <Link href={"/admin"}>
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
