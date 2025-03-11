import React, { useContext, useState } from "react";
import Button from "../button";
import { UseCartContext } from "../context/cartContext";

const ItemCounter = ({ product }) => {
  const [counter, setCounter] = useState(1);
  const increase = () => setCounter(counter + 1);
  const decrease = () => setCounter(counter - 1);
  const { cartCount } = UseCartContext();
  const comprar = () => {
    cartCount(product, counter);
  };
  return (
    <div className="flex gap-5  flex-col lg:flex-row">
      <div className="flex text-white text-center font-bold font-inter">
        <Button
          onClick={decrease}
          disabled={counter <= 1}
          className="w-10 rounded-full"
        >
          -
        </Button>
        <div className="border border-purple-500 w-12 rounded-sm flex justify-center items-center">
          <p className="text-center">{counter}</p>
        </div>
        <Button onClick={increase} className="w-10">
          +
        </Button>
      </div>

      <div className="flex">
        <Button
          onClick={comprar}
          className="bg-purple-500 p-2 lg:text-3xl text-white font-bold font-inter hover:scale-110 transition-all rounded-sm"
        >
          Añadir al carrito.
        </Button>
      </div>
    </div>
  );
};

export default ItemCounter;
