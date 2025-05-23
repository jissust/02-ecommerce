import { createContext, ReactNode, useEffect, useState } from "react";
import { ProductCart } from "../type/type";

interface CartProviderProps {
  children: ReactNode;
}

interface CartContextType {
  cart: ProductCart[];
  setCart: React.Dispatch<React.SetStateAction<ProductCart[]>>
}

export const CartContext = createContext<CartContextType | undefined>(undefined); 

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
