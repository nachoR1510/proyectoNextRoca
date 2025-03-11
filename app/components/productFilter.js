"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";

const productFilter = () => {
  const categorias = ["teclado", "auriculares", "mouse"];
  const pathname = usePathname();

  return (
    <div className="flex flex-col gap-5 ml-20 mt-1 mb-1">
      {pathname !== "/productos/all" && (
        <Link href="/productos/all">
          <div className="flex items-center justify-center gap-5  mt-5 bg-purple-500 font-bold rounded-sm">
            <p className="text-white font-inter text-xl">Quitar filtros</p>
          </div>
        </Link>
      )}

      {categorias.map((categoria, index) => (
        <Link key={index} href={`/productos/${categoria}`}>
          <div className="flex items-center gap-10 border-l border-purple-500 w-96 h-36 bg-stone-800 overflow-hidden relative hover:scale-105">
            <Image
              alt={categoria}
              src={`/icon-${categoria}.webp`}
              width={300}
              height={300}
              className="absolute overflow-hidden -right-24 z-10"
            />
            <p
              className={`text-white font-inter text-3xl z-20 ml-1 ${
                pathname === `/productos/${categoria}`
                  ? `text-purple-500`
                  : `text-white`
              }`}
            >
              {categoria}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default productFilter;
