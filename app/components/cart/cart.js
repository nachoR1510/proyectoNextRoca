"use client";
import Image from "next/image";
import { UseCartContext } from "../context/cartContext";

const cart = () => {
  const { cartTotalQuantity } = UseCartContext();

  return (
    <div className="flex">
      <Image alt="imgCarrito" src={"/icon-cart.svg"} width={30} height={30} />
      <p>{cartTotalQuantity() || 0}</p>
    </div>
  );
};

export default cart;
