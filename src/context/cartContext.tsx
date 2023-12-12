"use client"
import React, { createContext, useContext, ReactNode, useState, useEffect } from 'react';
import { useCurrentUser } from '@/api/auth/useCurrentUser';
import { getBasket, getProductByProductId } from '../api/ecommerceApi';

interface CartContextProps {
  cartContext: any[]; // Adjust the type based on your actual cart item structure
  updateCartContext: () => void;
}

const CartContext = createContext<CartContextProps | undefined>(undefined);

export const CartProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [cartContext, setCartContext] = useState([]);
  const [cartTotalContext, setCartTotalContext] = useState(0)
  const currentUser = useCurrentUser();

  const updateCartContext = async () => {
    if (currentUser) {
      const basket = await getBasket(currentUser.jwt, currentUser.user.id);
      setCartContext(basket);
      
    }
  };

  useEffect(() => {
    updateCartContext();
  }, []);

  return (
    <CartContext.Provider value={{ cartContext: cartContext, updateCartContext: updateCartContext }}>
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error('useCart must be used within a CartProvider');
  }
  return context;
};
