// CartContext.js
import React, { useState, createContext, useContext } from 'react';

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  const addToCart = (item) => {
    // Check if the item is already in the cart
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      // Item is already in the cart, so update the quantity
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
    } else {
      // Item is not in the cart, so add it with quantity 1
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };
  const removeFromCart = (itemId) => {
    console.log("Removing item from cart with id:", itemId);
    setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
  };

  console.log("Current Cart:", cart);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
