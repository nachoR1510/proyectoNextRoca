import React from "react";
import Button from "../button";
import { useCartContext } from "../context/cartContext";
import { useState } from "react";

const cartModifier = (item, quantity) => {
  const { cartCount, removeFromCart, cartSub } = useCartContext();
  const [count, setCount] = useState(quantity);

  const addToCart = () => {
    setCount(count + 1);
    const add = 1;
    cartCount(item, add);
  };

  const subFromCart = () => {
    setCount(count - 1);

    if (count === 0) {
      removeFromCart(item);
    } else {
      const sub = 1;
      cartSub(item, sub);
    }
  };

  const delate = () => {
    removeFromCart(item);
  };

  return (
    <div>
      <Button onClick={subFromCart}>-</Button>

      <Button onClick={addToCart}>+</Button>

      <Button onClick={delate}>Eliminar del carrito</Button>
    </div>
  );
};

export default cartModifier;
