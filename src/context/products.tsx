import { createContext, useState, ReactNode } from "react";
import { products as initialProducts } from "../mocks/products.json";

interface ProductsProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext();

export function ProductsProvider({ children }: ProductsProviderProps) {
  const [products, setProducts] = useState(initialProducts);

  return (
    <ProductsContext.Provider
      value={{
        products,
        setProducts,
      }}
    >
      {children}
    </ProductsContext.Provider>
  );
}
