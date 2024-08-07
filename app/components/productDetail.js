"use client";
import React from "react";
import Image from "next/image";
import Counter from "./counter";
import Button from "./button";

const productDetail = ({ title, price, img, category, description }) => {
  return (
    <div flex flex-col>
      <div className="overflow-hidden flex flex-col gap-5 justiy-center md:flex-row">
        <div className="">
          <Image alt={title} src={img} width={600} height={800} />
        </div>
        <div className="flex flex-col gap-10 justiy-center">
          <div className="font-bold text-white text-6xl">{title}</div>
          <div className="font-bold text-white text-4xl"> ${price} </div>
          <Counter />
          <Button className="w-40 bgRojo rounded text-4xl text-white">
            {" "}
            Comprar{" "}
          </Button>
        </div>
      </div>

      <p className="text-white text-center">{description}</p>
    </div>
  );
};

export default productDetail;
