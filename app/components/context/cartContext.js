"use client";
import { createContext, useContext, useState, useEffect } from "react";

export const CartContext = createContext();

export const UseCartContext = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [i, setI] = useState([]);

  let cartJSON;

  useEffect(() => {
    cartJSON = JSON.parse(localStorage.getItem("cartJSON"));
    setCart(cartJSON ?? []);
  }, [i]);

  const sortCart = (oldCart) => {
    oldCart.sort((a, b) => {
      return b.price - a.price;
    });

    setCart(oldCart);

    cartJSON = JSON.stringify(oldCart);
    localStorage.removeItem("cartJSON");
    localStorage.setItem("cartJSON", cartJSON);
  };

  const cartCount = (product, newCount) => {
    const oldCount = cart.filter((el) => el.title === product.title);
    oldCount.map((el) => (newCount = newCount + el.quantity));
    const newCart = cart.filter((el) => el.title !== product.title);
    newCart.push({ ...product, quantity: newCount });
    sortCart(newCart);
  };

  const cartTotalQuantity = () => {
    return cart.reduce(
      (accumulator, actProduct) => accumulator + actProduct.quantity,
      0
    );
  };

  const totalPrice = () => {
    return cart.reduce((prev, act) => prev + act.quantity * act.price, 0);
  };

  const clearCart = () => {
    localStorage.clear("cartJSON");
    setCart([]);
  };

  const cartSub = (product, newCount) => {
    const oldCount = cart.filter((el) => el.title === product.title);
    oldCount.map((el) => (newCount = el.quantity - newCount));
    const newCart = cart.filter((el) => el.title !== product.title);
    newCart.push({ ...product, quantity: newCount });
    sortCart(newCart);
  };

  const removeFromCart = (item) => {
    setCart(cart.filter((product) => product.title !== item.title));
    cartJSON = JSON.stringify(
      cart.filter((product) => product.title !== item.title)
    );
    localStorage.removeItem("cartJSON");
    localStorage.setItem("cartJSON", cartJSON);
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        sortCart,
        cartCount,
        cartTotalQuantity,
        totalPrice,
        clearCart,
        cartSub,
        removeFromCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
