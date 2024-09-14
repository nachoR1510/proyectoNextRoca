import React from "react";
import Image from "next/image";
import Link from "next/link";

const card = ({ title, price, img, category }) => {
  return (
    <Link href={`/productPage/${title.replace(/ /g, "")}`}>
      <div className="overflow-hidden grid grid-rows-3 border border-white/10 rounded-sm bg-gradient-to-r from-zinc-900 to-zinc-900 via-zinc-800 justify-center w-[300px] h-[500px]  hover:shadow-lg hover:shadow-purple-600/50 lg:hover:w-[320px] lg:hover:h-[520px] transition duration-500  ease-in-out">
        <div className="w-full h-full row-start-1 row-span-2 place-content-center">
          <Image alt={title} src={img} width={300} height={500} />
        </div>
        <div className="flex flex-col gap-10 text-center row-start-3">
          <div className="font-bold md:text-2xl font-urban h-14 text-white">
            {title}
          </div>
          <div className="md:text-3xl font-urban text-white text-center h-14">
            {" "}
            ${price}{" "}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default card;
