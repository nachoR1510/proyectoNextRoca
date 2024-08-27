"use client";
import Image from "next/image";
import { useCartContext } from "../context/cartContext";

const cart = () => {
  const { cartTotalQuantity } = useCartContext();

  return (
    <div className="flex">
      <Image alt="imgCarrito" src={"/icon-cart.svg"} width={30} height={30} />
      <p>{cartTotalQuantity() || 0}</p>
    </div>
  );
};

export default cart;
