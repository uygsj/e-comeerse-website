import React from 'react';
import CartContext from './CartContext'; // Update the import statement

const CartProvider = (props) => {
  const cartctx = {
    items: [],
    totalAmount: 0,
    // addItem: () => {...},
    // removeItem: () => {...},
  };

  return (
    <CartContext.Provider value={cartctx}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
