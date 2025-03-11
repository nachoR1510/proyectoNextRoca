"use client";
import Image from "next/image";
import { UseCartContext } from "../context/cartContext";

const Cart = () => {
  const { cartTotalQuantity } = UseCartContext();

  return (
    <div className="flex">
      <Image alt="imgCarrito" src={"/icon-cart.svg"} width={30} height={30} />
      <p className="bg-purple-500 rounded-sm p-1 text-center h-8">
        {cartTotalQuantity() || 0}
      </p>
    </div>
  );
};

export default Cart;
