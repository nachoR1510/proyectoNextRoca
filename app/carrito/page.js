"use client";
import React from "react";
import { useCartContext } from "../components/context/cartContext";
import Image from "next/image";
import Button from "../components/button";
import CartModifier from "../components/cart/cartModifier";

const carrito = () => {
  const { cart, totalPrice, clearCart } = useCartContext();

  const clean = () => {
    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div w-screen h-screen flex>
        <h1 className="text-white text-5xl text-center justiy-center content-center h-96 font-urban">
          Todavia no tienes productos en el carrito.
        </h1>
      </div>
    );
  }
  return (
    <div className="grid grid-rows-12 grid-cols-3 h-screen w-screen">
      <div className="row-start-2 flex gap-1 justify-self-center content-center col-span-3">
        <h1 className="text-white row-start-2 lg:text-5xl font-urban place-self-center">
          Productos
        </h1>

        <Button
          className="bg-white text-black lg:text-xl w-56 h-10 row-start-2 font-croma place-self-center"
          onClick={clean}
        >
          Limpiar carrito
        </Button>
      </div>

      <div className="row-start-3 lg:text-4xl justify-self-center col-start-1 col-span-3">
        {cart.map((item) => {
          return (
            <div className="flex">
              <div className="flex lg:justify-self-center lg:items-center lg:w-[500px] lg:gap-5 gap-1 flex-col lg:flex-row">
                <h2 className="text-white font-croma">{item.title}</h2>
                <Image alt={item.title} src={item.img} width={80} height={80} />
              </div>

              <div className="col-start-2 justify-self-center items-center lg:w-96">
                <h3 className="text-white font-croma text-center">
                  x{item.quantity}
                </h3>
              </div>

              <div>
                <h4 className="text-white font-croma text-center">
                  {" "}
                  ${item.price * item.quantity}
                </h4>
              </div>
            </div>
          );
        })}

        <p className="text-white">subtotal: $ {totalPrice()}</p>
      </div>
    </div>
  );
};

export default carrito;
