"use client";
import React from "react";
import Image from "next/image";
import ItemCounter from "./cart/itemCounter";

const productDetail = ({ product }) => {
  const { title, img, price, description, fabricante } = product;
  return (
    <div className="w-screen h-screen grid grid-rows-12 grid-cols-12">
      <div className="row-start-2 col-start-2 row-span-6 col-span-5">
        <Image
          alt="gridProduct"
          src={"/grid2.webp"}
          width={800}
          height={800}
          className="w-[1000px] h-[500px]"
        />
      </div>
      <div className="col-start-2 row-start-2 col-span-5 row-span-6 justify-items-center content-center">
        <Image alt={title} src={img} width={500} height={600} />
      </div>
      <div className="col-start-8 col-span-4 row-start-3 flex flex-col gap-2 ">
        <p className="lg:text-4xl text-xl font-urban font-bold text-white">
          {fabricante}
        </p>
        <h1 className="lg:text-7xl text-xl font-urban font-bold text-white w-full">
          {title}
        </h1>
        <h2 className="lg:text-7xl text-xl font-urban font-bold text-white">
          ${price.toLocaleString()}
        </h2>

        <hr />

        <ItemCounter product={product} />
      </div>

      <div className="row-start-9 col-start-2 col-span-10">
        <h3 className="bg-purple-500 text-white font-inter font-bold text-center text-xl w-40">
          Descripcion
        </h3>

        <div className="border border-white rounded-sm h-52">
          <p className="text-white font-inter p-5 text-xl">{description}</p>
        </div>
      </div>
    </div>
  );
};

export default productDetail;
