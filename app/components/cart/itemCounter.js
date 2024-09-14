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
    <div className="flex gap-2 font-croma flex-col lg:flex-row">
      <div className="flex  bg-white w-20 lg:w-[100px] p-2 lg:text-2xl text-black text-center hover:bg-black hover:text-white">
        <Button onClick={decrease} disabled={counter <= 1} className="w-20">
          -
        </Button>
        <div>{counter}</div>
        <Button onClick={increase} className="w-20">
          +
        </Button>
      </div>

      <div className="flex">
        <Button
          onClick={comprar}
          className="bg-white p-2 lg:text-3xl hover:bg-black hover:text-white"
        >
          Añadir al carrito.
        </Button>
      </div>
    </div>
  );
};

export default ItemCounter;
