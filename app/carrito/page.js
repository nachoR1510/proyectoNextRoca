"use client";
import React from "react";
import { useCartContext } from "../components/context/cartContext";
import Image from "next/image";
import Button from "../components/button";
import CartModifier from "../components/cart/cartModifier";
import Swal from "sweetalert2";

const carrito = () => {
  const { cart, totalPrice, clearCart, removeFromCart } = useCartContext();

  const clean = () => {
    clearCart();
  };

  const compra = () => {
    Swal.fire({
      icon: "success",
      title: "Compra realizada con exito",
      text: "recibira mas informacion sobre el envio via email",
      confirmButtonText: "ACEPTAR",
      confirmButtonColor: "#4e148c",
    });

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
    <div className="grid grid-rows-12 grid-cols-1 h-screen w-screen">
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

      <div className="row-start-3 col-start-1 col-span-3 lg:text-4xl justify-self-center flex flex-col gap-5">
        {cart.map((item) => {
          return (
            <div className="bg-gradient-to-r from-zinc-900 to-zinc-900 via-zinc-800 border border-white/10 flex p-2 items-center rounded hover:shadow-lg hover:shadow-purple-600/50">
              <h3 className="font-urban p-2 text-xl lg:w-72 text-white">
                {item.title}
              </h3>
              <p className="text-white font-urban text-xl">x{item.quantity}</p>
              <Image alt={item.title} src={item.img} width={120} height={80} />
              <h4 className="text-white font-urban text-xl pl-5 lg:w-40">
                ${item.price * item.quantity}
              </h4>
              <Button className="lg:w-40" onClick={() => removeFromCart(item)}>
                <Image
                  alt="icon-trash"
                  src={"/icon-trash.svg"}
                  width={30}
                  height={30}
                />
              </Button>
            </div>
          );
        })}

        <div className="flex gap-5 justify-center items-center">
          <p className="text-white font-urban text-center">
            subtotal: $ {totalPrice()}
          </p>

          <Button className="bg-lime-500 text-white p-2 w-52" onClick={compra}>
            COMPRAR
          </Button>
        </div>
      </div>
    </div>
  );
};

export default carrito;
