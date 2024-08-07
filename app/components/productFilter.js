import Link from "next/link";
import React from "react";
import Image from "next/image";

const productFilter = () => {
  return (
    <div className="min-w-full flex justify-center content-center mb-5">
      <div className="flex justify-center gap-10 p-2 bgRojo mt-5 place-content-center w-80">
        <div className="flex flex-col justify-center content-center">
          <Link href={"/productos/teclado"}>
            <Image
              src={"/keyboard-fill.svg"}
              alt="teclado-icon"
              width={60}
              height={60}
            />
          </Link>

          <p className="text-white text-center">Teclados</p>
        </div>

        <div className="flex flex-col justify-center text-center">
          <Link href={"/productos/mouse"}>
            <Image
              src={"/mouse-fill.svg"}
              alt="mouse-icon"
              width={60}
              height={60}
            />
          </Link>

          <p className="text-white">Mouse</p>
        </div>

        <div className="flex flex-col justify-center text-center">
          <Link href={"/productos/auriculares"}>
            <Image
              src={"/headset.svg"}
              alt="auriculares-icon"
              width={60}
              height={60}
            />
          </Link>

          <p className="text-white ">Auriculares</p>
        </div>
      </div>
    </div>
  );
};

export default productFilter;
