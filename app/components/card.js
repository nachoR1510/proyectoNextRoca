import React from "react";
import Image from "next/image";
import Link from "next/link";

const card = ({ title, price, img, category, fabricante }) => {
  return (
    <Link href={`/productPage/${title.replace(/ /g, "")}`}>
      <div className="overflow-hidden grid grid-rows-3 border border-white/10 bg-stone-800 justify-center w-[300px] h-[500px]  hover:shadow-lg hover:shadow-purple-600/50 hover:bg-purple-800 lg:hover:scale-105 transition ease-in-out">
        <div className="w-full h-full row-start-1 row-span-2 place-content-center">
          <Image alt={title} src={img} width={300} height={500} />
        </div>
        <div className="flex flex-col gap-10 text-center row-start-3">
          <div className="font-bold md:text-2xl font-inter h-14 border-l border-purple-500 text-white">
            <h3 className="mr-5 ml-5">
              {category} {fabricante} {title}
            </h3>
          </div>
          <div className="md:text-3xl font-inter text-white text-center h-14">
            {" "}
            ${price.toLocaleString()}{" "}
          </div>
        </div>
      </div>
    </Link>
  );
};

export default card;
