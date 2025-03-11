"use client";
import React from "react";
import { UseCartContext } from "../components/context/cartContext";
import Image from "next/image";
import Button from "../components/button";
import Swal from "sweetalert2";
import Link from "next/link";

const carrito = () => {
  const {
    cart,
    totalPrice,
    clearCart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity,
  } = UseCartContext();

  const clean = () => {
    clearCart();
  };

  const compra = () => {
    Swal.fire({
      icon: "success",
      title: "Compra realizada con exito",
      text: "recibira mas informacion sobre el envio via email",
      color: "#FFFFFF",
      confirmButtonText: "ACEPTAR",
      confirmButtonColor: "#A855F7",
      background: "#292524",
    });

    clearCart();
  };

  if (cart.length === 0) {
    return (
      <div className="w-screen h-screen flex flex-col place-items-center ">
        <h1 className="text-white text-8xl text-center justiy-center content-center h-96 font-inter font-bold">
          Tu carrito esta vacio.
        </h1>

        <div className="bg-purple-500 w-64 p-1 rounded-sm hover:scale-105 transition ease-in-out justiy-center content-center">
          <Link
            href={"/productos/all"}
            className="flex justify-center items-center"
          >
            <Image
              alt="icono tienda"
              src={"/shopping-bag-icon.svg"}
              width={100}
              height={100}
              className="w-16 h-16"
            />

            <h5 className="font-inter font-bold text-white text-4xl text-center">
              Tienda
            </h5>
          </Link>
        </div>
      </div>
    );
  }
  return (
    <div className="grid grid-rows-12 grid-cols-12 h-screen w-screen">
      <div className="row-start-3 row-span-12 col-start-2 col-span-5 lg:text-4xl justify-self-center flex flex-col gap-5 overflow-auto pb-5 pr-5">
        {cart.map((item, index) => {
          return (
            <div className="flex flex-row gap-1">
              <div
                className="bg-stone-800 flex p-2 items-center h-40 w-full border-l border-purple-500"
                key={index}
              >
                <Image
                  alt={item.title}
                  src={item.img}
                  width={200}
                  height={40}
                  className="pr-5"
                />

                <div className="flex justify-between items-center w-full text-white font-inter gap-5">
                  <div className="flex flex-col text-white font-inter">
                    <p className="text-xl">{item.category}</p>
                    <p className="font-bold">
                      {item.fabricante} {item.title}
                    </p>
                    <p className="font-bold pt-2">
                      ${item.price.toLocaleString()}
                    </p>
                  </div>

                  <span className="text-white text-center font-bold font-inter bg-purple-500 p-1 w-16 text-xl">
                    x{item.quantity}
                  </span>
                </div>
              </div>

              <div className="flex flex-col gap-1">
                <Image
                  alt="icono tacho"
                  src={"/trash-icon.svg"}
                  width={40}
                  height={40}
                  className="bg-purple-500 p-1 cursor-pointer"
                  onClick={() => removeFromCart(item)}
                />

                <p
                  className="bg-purple-500 text-white cursor-pointer text-center font-inter px-1"
                  onClick={() => increaseQuantity(item)}
                >
                  +
                </p>

                <p
                  className="bg-purple-500 text-white cursor-pointer text-center font-inter px-1"
                  onClick={() => decreaseQuantity(item)}
                >
                  -
                </p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="bg-stone-800 col-start-8 col-span-5 row-start-3 row-span-7 mr-5 flex flex-col">
        <h1 className="font-inter text-white text-5xl font-bold ml-2 mt-2 border-l-2 border-purple-500">
          Productos.
        </h1>
        {cart.map((item, index) => {
          return (
            <div className="text-white font-inter text-xl flex gap-5 pt-2">
              <p className="w-96 pl-2">
                {item.category} {item.fabricante} {item.title}
              </p>
              <p className="w-20">${item.price.toLocaleString()}</p>
              <p className="w-10">x{item.quantity}</p>
              <p>${(item.quantity * item.price).toLocaleString()}</p>
            </div>
          );
        })}

        <h2 className="text-white font-inter text-4xl font-bold pt-5 pl-2">
          Total: ${totalPrice().toLocaleString()}
        </h2>

        <hr className="mx-5 mt-5" />

        <div className="w-full flex justify-center items-center mt-5">
          <button
            className="text-white font-inter font-bold text-4xl text-center bg-purple-500 p-2 rounded-sm hover:scale-105 transition-all w-40"
            onClick={compra}
          >
            Comprar
          </button>
        </div>
      </div>
    </div>
  );
};

export default carrito;
