import React from "react";
import Image from "next/image";

const card = ({ title, price, img, category }) => {
  return (
    <div className="overflow-hidden grid grid-rows-3 bg-gray-50 w-[300px] h-[500px]">
      <div className="w-full h-full row-start-1 row-span-2 ">
        <Image alt={title} src={img} width={300} height={500} />
      </div>
      <div className="flex flex-col gap-10 text-center row-start-3">
        <div className="font-bold md:text-xl font-croma h-14">{title}</div>
        <div className="md:text-xl bg-black font-pixel text-white w-40 text-center">
          {" "}
          ${price}{" "}
        </div>
      </div>
    </div>
  );
};

export default card;
