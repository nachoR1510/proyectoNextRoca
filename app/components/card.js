import React from "react";
import Image from "next/image";

const card = ({ title, price, img, category }) => {
  return (
    <div className="overflow-hidden flex flex-col place-items-center justify-around bg-gray-50 w-[300px] h-[300px] lg:h-[500px]">
      <div className="w-40 h-40 md:w-[250px] md:h-[250px]">
        <Image alt={title} src={img} width={200} height={200} />
      </div>
      <div className="flex flex-col gap-10 text-center">
        <div className="font-bold md:text-2xl font-croma">{title}</div>
        <div className="md:text-xl bg-black font-pixel text-white w-40 text-center">
          {" "}
          ${price}{" "}
        </div>
      </div>
    </div>
  );
};

export default card;
