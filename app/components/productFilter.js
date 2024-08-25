import Link from "next/link";
import React from "react";
import Image from "next/image";

const productFilter = () => {
  return (
    <div className="flex justify-center mb-5">
      <div className="flex justify-center gap-10 mt-7">
        <div className="flex flex-col justify-center items-center">
          <Link href={"/productos/teclado"} className="h-24">
            <Image
              src={"/icon-keyboard.webp"}
              alt="teclado-icon"
              width={160}
              height={100}
              className="pt-5"
            />
          </Link>

          <p className="text-white text-center font-urban">Teclados</p>
        </div>

        <div className="flex flex-col justify-center text-center">
          <Link href={"/productos/mouse"} className="h-24">
            <Image
              src={"/icon-mouse.png"}
              alt="mouse-icon"
              width={100}
              height={90}
            />
          </Link>

          <p className="text-white font-urban">Mouse</p>
        </div>

        <div className="flex flex-col justify-center text-center">
          <Link href={"/productos/auriculares"} className="h-24">
            <Image
              src={"/icon-headphone.webp"}
              alt="auriculares-icon"
              width={100}
              height={90}
            />
          </Link>

          <p className="text-white font-urban">Auriculares</p>
        </div>
      </div>
    </div>
  );
};

export default productFilter;
