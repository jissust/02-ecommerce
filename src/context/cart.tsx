import { createContext, ReactNode, useEffect, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext();

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState(() => {
    const localStorageMyCart = localStorage.getItem("myCart");
    return localStorageMyCart ? JSON.parse(localStorageMyCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("myCart", JSON.stringify(cart));
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
