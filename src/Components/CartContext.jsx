import React, { createContext, useState, useEffect, useContext } from 'react';

// Create a Cart Context
const CartContext = createContext();

export function useCart() {
  return useContext(CartContext);
}

export const CartProvider = ({ children }) => {
  // Try to load the cart from localStorage on initial load
  const initialCart = JSON.parse(localStorage.getItem('cart')) || [];
  
  const [cart, setCart] = useState(initialCart);

  // Whenever the cart is updated, save it to localStorage
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  // Function to add an item to the cart
  const addToCart = (item) => {
    setCart([...cart, item]);
  };

  // Function to remove an item from the cart
  const removeFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
};
