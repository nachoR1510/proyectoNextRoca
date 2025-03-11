"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Cart from "./cart/cart";
import { useRouter } from "next/navigation";

const header = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();

  const handleSearch = (e) => {
    e.preventDefault();

    if (searchTerm.trim() !== "") {
      router.push(`/search?query=${searchTerm}`);
    }
  };

  return (
    <header className="w-full h-16 grid grid-cols-5 text-white bg-stone-800 fixed z-50 font-inter rounded-sm">
      <section className=" flex justify-center items-center col-start-1 bg-purple-500 rounded-sm">
        <Link href={"/"}>
          <div className="flex place-items-center relative ">
            <Image
              alt="logo"
              src={"/logoUltraGaming.webp"}
              width={500}
              height={500}
              className="select-none"
              style={{ height: "50px", width: "150px" }}
            />
          </div>
        </Link>
      </section>

      <section className="flex justify-self-center items-center col-start-2 col-span-2 w-[32rem]">
        <form onSubmit={handleSearch} className="w-full flex">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Buscar un producto"
            className="w-full h-9 placeholder:text-xl text-xl text-black placeholder:font-inter bg-[url('/search_icon.svg')] bg-no-repeat bg-[length:20px] bg-[left_10px_center] pl-10 focus:outline-none focus:ring-2 focus:ring-purple-500 rounded-sm"
          />
        </form>
      </section>

      <div className="gap-4 flex justify-center items-center col-start-4">
        <Link href={"/productos/all"}>
          <h2 className="text-xl font-inter font-bold transition-all ease-in-out hover:text-purple-500 hover:animate-pulse hover:drop-shadow">
            PRODUCTOS
          </h2>
        </Link>
      </div>
      <div className="flex justify-center gap-5 justify-center items-center col-start-5 select-none">
        <Link href={"/carrito"}>
          <Cart />
        </Link>

        <div className="h-10 border-l-2 border-gray-500 mx-4"></div>

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
