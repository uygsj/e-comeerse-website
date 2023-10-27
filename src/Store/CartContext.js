import React, { useState, createContext, useContext, useEffect } from 'react';

export const CartContext = createContext({
  cart: [],
  addToCart: () => {},
  removeFromCart: () => {},
  updateCartItem: () => {},
  fetchCartData: () => {},
});

export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch initial cart data when the component mounts
    fetchCartData();
  }, []);

  const addToCart = (item) => {
    const itemIndex = cart.findIndex((cartItem) => cartItem.id === item.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity += 1;
      setCart(updatedCart);
      updateCartItem(cart[itemIndex]);
    } else {
      const newItem = { ...item, quantity: 1 };
      setCart([...cart, newItem]);
      createCartItem(newItem);
    }
  };

  const removeFromCart = (itemId) => {
    const itemIndex = cart.findIndex((item) => item.id === itemId);
    if (itemIndex !== -1) {
      const removedItem = cart[itemIndex];
      setCart((prevCart) => prevCart.filter((item) => item.id !== itemId));
      deleteCartItem(removedItem);
    }
  };

  const updateCartItem = (item) => {
    const updatedItem = { ...item, quantity: item.quantity };
    fetch(`https://crudcrud.com/api/c1541a94433746f49b91900182f7728a/cart/${item.id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(updatedItem),
    })
      .then((response) => {
        if (response.ok) {
          // Handle the success case
        } else {
          // Handle the error case
        }
      });
  };

  const createCartItem = (item) => {
    fetch('https://crudcrud.com/api/c1541a94433746f49b91900182f7728a/cart', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(item),
    })
      .then((response) => {
        if (response.ok) {
          // Handle the success case
        } else {
          // Handle the error case
        }
      });
  };

  const deleteCartItem = (item) => {
    fetch(`https://crudcrud.com/api/c1541a94433746f49b91900182f7728a/cart/${item.id}`, {
      method: 'DELETE',
    })
      .then((response) => {
        if (response.ok) {
          // Handle the success case
        } else {
          // Handle the error case
        }
      });
  };

  const fetchCartData = async () => {
    setLoading(true);
    fetch('https://crudcrud.com/api/c1541a94433746f49b91900182f7728a/cart')
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          // Handle the error case
        }
      })
      .then((data) => {
        setCart(data);
        setLoading(false);
      });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, updateCartItem, fetchCartData }}
    >
      {props.children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  return useContext(CartContext);
};
