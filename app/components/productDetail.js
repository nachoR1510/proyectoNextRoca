"use client";
import React from "react";
import Image from "next/image";
import ItemCounter from "./cart/ItemCounter";

const productDetail = ({ product }) => {
  const { title, img, price, description, fabricante } = product;
  return (
    <div className="w-screen h-screen grid grid-rows-12 grid-cols-2">
      <div
        className="col-span-2 row-span-6 col-start-1 row-start-1"
        style={{
          backgroundImage: `url("/bg-productDetail.webp")`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      ></div>

      <div className="col-start-1 row-start-3 row-span-4 justify-self-center place-self-start">
        <Image alt={title} src={img} width={500} height={600} />
      </div>

      <div className="col-start-2 row-start-3 flex flex-col gap-2">
        <h1 className="lg:text-7xl text-xl font-urban font-bold text-white">
          {title}
        </h1>
        <h2 className="lg:text-7xl text-xl font-urban font-bold text-white">
          ${price}
        </h2>
        <ItemCounter product={product} />
      </div>

      <div className="col-start-1 col-span-2 row-start-9 lg:text-xl flex justify-center flex-col">
        <p className="text-white text-center pb-2">fabricante: {fabricante}</p>
        <p className="text-white  text-center ml-20 mr-20"> {description}</p>
      </div>
    </div>
  );
};

export default productDetail;
