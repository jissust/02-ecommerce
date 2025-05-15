import { createContext, ReactNode, useState } from "react";

interface CartProviderProps {
  children: ReactNode;
}

export const CartContext = createContext();

export function CartProvider({ children }: CartProviderProps) {
  const [cart, setCart] = useState([]);

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
