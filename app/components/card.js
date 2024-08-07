import React from "react";
import Image from "next/image";

const card = ({ title, price, img, category }) => {
  return (
    <div className="overflow-hidden flex bg-white w-[400px] h-[250px] md:w-[500px]">
      <div className="w-40 h-40 md:w-[250px] md:h-[250px]">
        <Image alt={title} src={img} width={200} height={200} />
      </div>
      <div className="px-6 py-4 flex flex-col gap-10 pt-5">
        <div className="font-bold md:text-3xl">{title}</div>
        <div className="font-bold md:text-2xl"> ${price} </div>
      </div>
    </div>
  );
};

export default card;
