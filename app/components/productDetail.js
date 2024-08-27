"use client";
import React from "react";
import Image from "next/image";
import ItemCounter from "./cart/itemCounter";

const productDetail = ({ product }) => {
  const { title, img, price, description } = product;
  return (
    <div className="overflow-hidden w-screen h-screen grid grid-rows-12 grid-cols-2">
      <div className="col-span-2 row-span-6 bg-zinc-400 col-start-1 row-start-1"></div>

      <div className="col-start-1 row-start-3 row-span-4 justify-self-center">
        <Image alt={title} src={img} width={600} height={800} />
      </div>

      <div className="col-start-2 row-start-3 flex flex-col gap-2">
        <h1 className="lg:text-7xl text-xl font-urban font-bold">{title}</h1>
        <h2 className="lg:text-7xl text-xl font-urban font-bold">${price}</h2>
        <ItemCounter product={product} />
      </div>

      <div className="col-start-1 lg:col-start-2 col-span-2 lg:col-span-1 row-start-8 ">
        <p className="text-white w-96 text-center">{description}</p>
      </div>
    </div>
  );
};

export default productDetail;
