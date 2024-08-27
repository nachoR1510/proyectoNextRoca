import React from "react";
import Image from "next/image";

export const loading = () => {
  return (
    <div className="w-full h-full min-h-screen flex justify-center items-center">
      <Image
        src={"/loading-icon.png"}
        alt="loadingIcon"
        width={150}
        height={150}
        className="animate-spin"
      />
    </div>
  );
};

export default loading;
